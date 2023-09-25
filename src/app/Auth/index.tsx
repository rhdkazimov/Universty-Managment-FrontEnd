import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useUserAuthicantion } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/consts";

const initialLoginValue = {
  id: 0,
  password: "",
};

const initialLoginErrorValue = {
  id: false,
  password: false,
};

export const Login:React.FC = () => {
  const { mutateLoginUserApplication, isLoginLoading,setUserData } = useUserAuthicantion();
  const [error,setError] = React.useState(false);
  const navigate = useNavigate();
  const [loginInputValue, setLoginInputValue] = React.useState(initialLoginValue);
  const [loginInputError, setLoginInputError] = React.useState(initialLoginErrorValue);
  const handleLoginInputChanges = React.useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
      setLoginInputValue((previus) => ({ ...previus, [name]: value }));
    },
    []
  );

  const handleSumbitLoginForm = () => {
    if (
      loginInputValue.password.replace(/\s/g, "") !== "" &&
      loginInputValue.id !== 0
    ) {
      setLoginInputError({ id: false, password: false });
      mutateLoginUserApplication(loginInputValue).then(()=>{navigate(ROUTES.STUDENT.MAIN_PAGE)
      }).catch((err) => {
        console.log(err);
        setError(true);
      });
    }
    if (loginInputValue.password === "" && loginInputValue.id === 0) {
      setLoginInputError({ id: true, password: true });
    } else if (loginInputValue.password === "") {
      setLoginInputError({ id: false, password: true });
    } else if (loginInputValue.id === 0) {
      setLoginInputError({ id: true, password: false });
    }
  };

  return (
    <div className="login-form-div">
    <Formik initialValues={initialLoginValue} onSubmit={handleSumbitLoginForm}>
      <Form className="login-form">
       {error && <b className="error">Tələbə nömrəsi və ya şifrə səhvdir</b> }
        <FormControl isInvalid={loginInputError.id}>
          <FormLabel>Tələbə Nömrəsi</FormLabel>
          <Input
            onChange={handleLoginInputChanges}
            name="id"
            placeholder="Telebe İD qeyd edin"
          />
          <FormErrorMessage>Tələbə İD daxil edin</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={loginInputError.password}>
          <FormLabel>Şifrə</FormLabel>
          <Input
            onChange={handleLoginInputChanges}
            name="password"
            placeholder="Şifrənizi daxil edin"
          />
          <FormErrorMessage>Şifrənizi daxil edin</FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" className="loginFormSumbitBtn" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
    </div>
  );
};
