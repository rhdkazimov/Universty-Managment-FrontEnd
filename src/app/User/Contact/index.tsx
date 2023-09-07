import React from "react";
import { useMutation, useQuery } from "react-query";
import { IContactForm } from "../../../models";
import { useService } from "../../../API/Services";
import { Button } from "@chakra-ui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { EQueryKeys } from "../../../enums";
import "./index.scss";

const initialValue = {
  header: "",
  text: "",
};

const Contact: React.FC = () => {
  const { studentService, userService } = useService();
  const [contactFormValues, setContactFormValues] =
    React.useState(initialValue);
  const { mutateAsync: mutateContactForm, isLoading: isLoginLoading } =
    useMutation((requestBody: IContactForm) => {
      return studentService
        .postContactForm(requestBody)
        .then()
        .catch((err) => console.log(err));
    });
  const { data: universtySettingData }: any | undefined = useQuery(
    [EQueryKeys.getUniverstySettingData],
    () => {
      return userService.getUniverstyData().catch((err) => {
        MySwal.fire({
          title: <strong>Xəta aşkarlandı</strong>,
          text: "Daha sonra yeniden cehd edin",
          icon: "error",
        });
      });
    }
  );

  const MySwal = withReactContent(Swal);

  const handleInputValue = ({
    target: { name, value },
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactFormValues((previus) => ({ ...previus, [name]: value }));
  };

  const handleSumbitForm = () => {
    const { header, text } = contactFormValues;
    if (header !== "" && text !== "") mutateContactForm(contactFormValues);
    else {
      MySwal.fire({
        title: <strong>Məlumatları Tam Doldurun.</strong>,
        icon: "error",
      });
    }
  };

  return (
    <div className="contactBoxBG">
      <div className="contactBox">
        <h1 className="contactHeader">Əlaqə</h1>
        <form className="contactSupportForm">
          <table>
            <tr>
              <td>
                <b>Başlıq:</b>
              </td>
              <td>
                <input
                  className="input"
                  name="header"
                  onChange={(e) => handleInputValue(e)}
                />
              </td>
            </tr>
            <tr>
              <td className="textAreaHeader">
                <b>Mətn:</b>
              </td>
              <td>
                <textarea
                  rows={8}
                  className="input textInput"
                  name="text"
                  onChange={(e) => handleInputValue(e)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="btnBox">
                <Button onClick={handleSumbitForm}>Göndər</Button>
              </td>
            </tr>
          </table>
        </form>
        <div className="contactInformationBox">
          <span>Telefon: {universtySettingData?.data.number}</span>
          <span>Faks: {universtySettingData?.data.faks}</span>
          <span>
            Mail: <b>{universtySettingData?.data.mail}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
