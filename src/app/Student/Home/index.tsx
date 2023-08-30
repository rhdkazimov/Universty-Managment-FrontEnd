import React from "react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { ILoginnedStudent } from "../../../models";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import "./index.scss";

export const StudentInfo: React.FC = () => {
  const [studentInfo, setStudentInfo] = React.useState<ILoginnedStudent>();
  const navigate = useNavigate();
  React.useEffect(() => {
    const data = localStorage.getItem("user");
    if (data !== null) setStudentInfo(JSON.parse(data));
    else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate(ROUTES.STUDENT.LOGIN);
    }
  }, []);

  return studentInfo ? (
    <TableContainer className="studentInfoTable">
      <Table variant="simple">
        <Tbody>
          <Tr>
            <td className="studentImgBox"  rowSpan={20} >
                <img
                className="studentImgPhoto"
                  src={studentInfo.img}
                  alt="Tələbə"
                />
            </td>
            <Td>Tələbə Nömrəniz :</Td>
            <Td>
              <b>{studentInfo.studentID}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Ad,Soyad :</Td>
            <Td>
              <b>{studentInfo.firstName + " " + studentInfo?.surName}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Doğum tarixi: </Td>
            <Td>
              <b>{studentInfo.birthDay}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>İxtisas: </Td>
            <Td>
              <b>{studentInfo.specialty}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Fakültə : </Td>
            <Td>
              <b>{studentInfo.faculty}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Akademik Məsləhətçi: </Td>
            <Td>
              <b>{studentInfo.academicHelper}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Status: </Td>
            <Td>
              <b>{studentInfo.status ? "Tehsil alır" : "Tehsil Yekunlaşıb"}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>İllik Təhsil haqqı (60 kredit üçün): </Td>
            <Td>
              <b>{studentInfo.perYear}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Qəbul balı : </Td>
            <Td>
              <b>{studentInfo.includePoint}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Mail : </Td>
            <Td>
              <b>{studentInfo.mail}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Dövlət sifarişli : </Td>
            <Td>
              <b>{studentInfo.stateOrdered ? "Bəli" : "Xeyr"}</b>
            </Td>
          </Tr>
          <Tr>
            <Td>Qeydiyyat tarixi : </Td>
            <Td>
              <b>{studentInfo.includedYear}</b>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <FadeLoader color="#36d7b7" />
  );
};
