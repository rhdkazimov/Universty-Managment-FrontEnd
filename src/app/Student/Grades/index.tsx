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
          studentGradeData.data.map(({years,semester,grades}: IStudentGrades) => {
            return (
              <div className="gradeDataBox">
                <h1 className="gradeDataDate">
                  {years} {semester}.semestr
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
                    {grades.map(({lessonCode,lessonName,SDF1,SDF2,SDF3,TSI,SSI,ORT}: IStudentGradesInfo) => {
                      return (
                        <Tr
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <Td>{lessonCode}</Td>
                          <Td>{lessonName}</Td>
                          <Td>{SDF1}</Td>
                          <Td>{SDF2}</Td>
                          <Td>{SDF3}</Td>
                          <Td>{TSI}</Td>
                          <Td>{SSI}</Td>
                          <Td>{ORT}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </div>
            );
          })
        ) : (
          <div className="loaderBox">
          <FadeLoader color="#36d7b7" />
        </div>
        )
      }
    </div>
  );
};

export default Grades;
