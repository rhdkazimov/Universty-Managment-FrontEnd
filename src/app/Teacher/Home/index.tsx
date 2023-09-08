import React from "react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { ILoginnedTeacher } from "../../../models";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import "../../Student/Home/index.scss";

export const TeacherInfo: React.FC = () => {
  const [teacherInfo, setTeacherInfo] = React.useState<ILoginnedTeacher>();
  const navigate = useNavigate();
  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (data !== null) setTeacherInfo(JSON.parse(data));
    else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate(ROUTES.USER.LOGIN);
    }
  }, []);

  return teacherInfo ? (
    <TableContainer className="userInfoTable">
      <Table variant="simple">
        <Tbody>
          <Tr>
            <td className="userImgBox" rowSpan={20}>
              <img
                className="userImgPhoto"
                src={teacherInfo.img}
                alt="teacher"
              />
            </td>
            <Td>Müəllim Nömrəniz :</Td>
            <Td>
              <b>{teacherInfo.id}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Ad,Soyad :</Td>
            <Td>
              <b>{teacherInfo.firstName + " " + teacherInfo?.surName}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Doğum tarixi: </Td>
            <Td>
              <b>{teacherInfo.birthDay}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>İxtisas: </Td>
            <Td>
              <b>{teacherInfo.specialty}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Fakültə : </Td>
            <Td>
              <b>{teacherInfo.faculty}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Mail : </Td>
            <Td>
              <b>{teacherInfo.mail}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Qeydiyyat tarixi : </Td>
            <Td>
              <b>{teacherInfo.includedYear}</b>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <FadeLoader color="#36d7b7" />
  );
};
