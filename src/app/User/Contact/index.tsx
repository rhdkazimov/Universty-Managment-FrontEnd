import React from "react";
import { useMutation, useQuery } from "react-query";
import { IContactForm } from "../../../models";
import { useService } from "../../../API/Services";
import { Button } from "@chakra-ui/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { EQueryKeys } from "../../../enums";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";

const initialValue = {
  header: "",
  text: "",
  contact:""
};

const Contact: React.FC = () => {
  const { studentService, userService } = useService();
  const navigate = useNavigate();
  const [contactFormValues, setContactFormValues] =
    React.useState(initialValue);
  const { mutateAsync: mutateContactForm, isLoading: isLoginLoading } =
    useMutation((requestBody: IContactForm) => {
      return studentService
        .postContactForm(requestBody)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mesajınız Uğurla Göndərildi",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(ROUTES.USER.ANOUNCE_PAGE);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Xəta baş verdi",
            text: "Daha sonra yenidən cəhd edin",
          });
        });
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
              <td>
                <b>Əlaqə:</b>
              </td>
              <td>
                <input
                placeholder="Nömrə və ya Mail Ünvanı"
                  className="input"
                  type="mail"
                  name="contact"
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
          {
            universtySettingData?.data.map(({id,key,value}:any)=>{
             return <span key={id}>{key}: {value}</span>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Contact;
