import React from "react";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { json } from "stream/consumers";

// LOCAL STORAGE ID PROBLEM FROM LOCAL GET ITEM USER 

const Grades: React.FC = () => {
  const { studentService } = useService();
  const [studentId, setStudentId] = React.useState("");
  React.useEffect(() => {
    const localStudent = localStorage.getItem("user");
    if (localStudent) {
      const student = JSON.parse(localStudent);
    //   setStudentId(student.studentID);
    }
  }, []);

  const { data: studentGradeData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getStudentGrade],
    () => {
        const localStudent = localStorage.getItem("user");
        if (localStudent) {
          const student = JSON.parse(localStudent);
          setStudentId(student.studentID);
        }
      return studentService.getStudentGrades(studentId).catch((err) => {
        console.log(err);
      });
    }
  );
  return <div>index</div>;
};

export default Grades;
