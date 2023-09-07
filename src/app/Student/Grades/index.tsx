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
          studentGradeData.data.map((gradeData: IStudentGrades) => {
            return (
              <div className="gradeDataBox">
                <h1 className="gradeDataDate">
                  {gradeData.years} {gradeData.semester}.semestr
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
                    {gradeData.grades.map((grade: IStudentGradesInfo) => {
                      return (
                        <Tr
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <Td>{grade.lessonCode}</Td>
                          <Td>{grade.lessonName}</Td>
                          <Td>{grade.SDF1}</Td>
                          <Td>{grade.SDF2}</Td>
                          <Td>{grade.SDF3}</Td>
                          <Td>{grade.TSI}</Td>
                          <Td>{grade.SSI}</Td>
                          <Td>{grade.ORT}</Td>
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
