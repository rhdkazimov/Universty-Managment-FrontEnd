import React from "react";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { IStudentGrades, IStudentGradesInfo } from "../../../models";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import "./index.scss";
import { FadeLoader } from "react-spinners";

const Grades: React.FC = () => {
  const { studentService } = useService();
  const { data: studentGradeData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getStudentGrade],
    () => {
      const localStudent = localStorage.getItem("user");
      if (localStudent) {
        const student = JSON.parse(localStudent);
        return studentService
          .getStudentGrades(student.id)
          .catch((err) => console.log(err));
      }
    }
  );

  if (isLoading)
  return (
    <div className="loaderBox">
      <FadeLoader color="#36d7b7" />
    </div>
  );

  return (
    <div className="gradeBox">
      <h1 className="gradeBoxHeader">Qiymət Cədvəli</h1>
      {
        //TABLE DESIGN PROBLEM
        studentGradeData?.data.length ? (
              <div className="gradeDataBox">
                <h1 className="gradeDataDate">
                </h1>
                <Table className="gradeDataTable">
                  <Thead>
                    <Tr>
                      <Th>Dərs Kodu</Th>
                      <Th>Dərsin Adı</Th>
                      <Th>SDF1</Th>
                      <Th>SDF2</Th>
                      <Th>SDF3</Th>
                      <Th>TSİ</Th>
                      <Th>SSİ</Th>
                      <Th>ORT</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {studentGradeData?.data.map(({id,sdF1,sdF2,sdF3,ssi,tsi,ort,lesson:{id:lessonId,name}}: IStudentGrades) => {
                      return (
                        <Tr
                        key={id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <Td>{lessonId}</Td>
                          <Td>{name}</Td>
                          <Td>{sdF1}</Td>
                          <Td>{sdF2}</Td>
                          <Td>{sdF3}</Td>
                          <Td>{tsi}</Td>
                          <Td>{ssi}</Td>
                          <Td>{ort}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            )
      : (
          <div className="loaderBox">
          <FadeLoader color="#36d7b7" />
        </div>
        )
      }
    </div>
  );
};

export default Grades;
