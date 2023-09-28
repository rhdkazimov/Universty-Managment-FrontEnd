import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useService } from "../../../API/Services";
import { useMutation, useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { FadeLoader } from "react-spinners";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IGroupStudents } from "../../../models";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../../routes/consts";
import Swal from "sweetalert2";
import "./gradesnote.scss";

const initialStudentGradeValue = [
  {
    id:0,
    firstName: "Ad",
    surName: "Soyad",
    sdF1: 0,
    sdF2: 0,
    sdF3: 0,
    tsi: 0,
    ssi: 0,
    ort: 0,
  }
]

const StudentsGradesNote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { teacherService } = useService();
  const [studentGrade, setStudentGrade] = React.useState<IGroupStudents[]>([]);
  const [isEdit, setIsEdit] = React.useState(true);
  const { data: studentsGradesData, isLoading,refetch:refetchGrades }: any | undefined = useQuery(
    [EQueryKeys.getGroupStudentsGrades],
    () => {
      return teacherService
        .getGroupStudents(location.state.groupId)
        .catch((err) => {
          // alert("Not Responding . . .");
          console.log(err);
        });
    },
    {
      onSuccess: () => {
        setStudentGrade(studentsGradesData?.data?.students);
      },
    }
  );
  const { mutateAsync: mutateStudentsGrades, isLoading: isSaveLoading } =
    useMutation((requestBody: IGroupStudents[]) => {
      return teacherService
        .saveStudentsGrade(location.state.lessonId, requestBody)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Qiymətlər Sistemə Köçürüldü",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsEdit(true);
          refetchGrades();
          navigate(ROUTES.TEACHER.TEACHER_GROUPS);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Xəta baş verdi",
            text: "Dəyişikliklər saxlanılmadı! Daha sonra yenidən cəhd edin",
          });
        });
    });

  // Set data state when changing input value problem
  const handleChangeInput = (
    { target: { name, value } }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
      setStudentGrade((previus) => {
        const updatedStudentGrade = [...previus];
        const updatedItem: IGroupStudents = {
          ...updatedStudentGrade[index],
        };
        if(name === "sdF1" || name === "sdF2" || name === "sdF3" || name === "ssi" || name === "tsi")
        updatedItem[name] = parseInt(value);
        updatedStudentGrade[index] = updatedItem;
        return updatedStudentGrade;
      });
  };

  const handleEditGrades = () => {
    setIsEdit(false);
  };

  const handleSaveChanges = () => {
    mutateStudentsGrades(studentGrade);
    setIsEdit(true);
  };

  const handleReturnTeacherGroups = () => {
    if (isEdit) {
      return navigate(ROUTES.TEACHER.TEACHER_GROUPS);
    } else {
      Swal.fire({
        title: "Geri Qayıtmağ İstədiyinizdən Əminsiniz?",
        text: "Dəyişikliklər yaddaşda saxlanılmayacağ !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hə,əminəm !",
        cancelButtonText: "Ləğv et",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate(ROUTES.TEACHER.TEACHER_GROUPS);
        } else return null;
      });
    }
  };
  let ordinalNum = 0;

  if (isLoading || isSaveLoading) {
    return (
      <div className="loaderBox">
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }

//return studentGrade!==undefined? (
  return studentsGradesData?.data? (
    <div className="studentsGradesDataBG">
      <div className="studentsGradesDataBox">
        <h1>
          {studentsGradesData.data.groupCode} -
          {studentsGradesData.data.lessonName}
        </h1>
        <div className="returnBox" onClick={handleReturnTeacherGroups}>
          <ChevronLeftIcon />
          <span>Geri qayıt</span>
        </div>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Ad Soyad</Th>
              <Th>SDF1</Th>
              <Th>SDF2</Th>
              <Th>SDF3</Th>
              <Th>TSI</Th>
              <Th>SSI</Th>
              <Th>ORT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentsGradesData.data.students.map(
              (
                {
                  id,
                  sdF1,
                  sdF2,
                  sdF3,
                  tsi,
                  ssi,
                  ort,
                  firstName,
                  surName,
                }: IGroupStudents,
                idx: number
              ) => {
                ordinalNum++;
                return (
                  <Tr key={id}>
                    <Td>{ordinalNum}</Td>
                    <Td>{firstName + " " + surName}</Td>
                    <Td>
                      <input
                        type="number"
                        name="sdF1"
                        onChange={(e) => handleChangeInput(e, idx)}
                        defaultValue={sdF1}
                        disabled={isEdit}
                      />
                    </Td>
                    <Td>
                      <input
                        type="number"
                        name="sdF2"
                        onChange={(e) => handleChangeInput(e, idx)}
                        defaultValue={sdF2}
                        disabled={isEdit}
                      />
                    </Td>
                    <Td>
                      <input
                        type="number"
                        name="sdF3"
                        onChange={(e) => handleChangeInput(e, idx)}
                        defaultValue={sdF3}
                        disabled={isEdit}
                      />
                    </Td>
                    <Td>
                      <input
                        type="number"
                        name="tsi"
                        onChange={(e) => handleChangeInput(e, idx)}
                        defaultValue={tsi}
                        disabled={isEdit}
                      />
                    </Td>
                    <Td>
                      <input
                        type="number"
                        name="ssi"
                        onChange={(e) => handleChangeInput(e, idx)}
                        defaultValue={ssi}
                        disabled={isEdit}
                      />
                    </Td>
                    <Td>{ort}</Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
        <div className="actionBtn">
          {isEdit ? (
            <Button onClick={handleEditGrades}>Düzəliş et</Button>
          ) : (
            <Button onClick={handleSaveChanges}>Yaddaşa Vur</Button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="loaderBox">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default StudentsGradesNote;
