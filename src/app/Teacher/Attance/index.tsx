import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useService } from "../../../API/Services";
import { useMutation, useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { FadeLoader } from "react-spinners";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
  IGroupStudentAttance,
  IStudentAttanceForTeacher,
} from "../../../models";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../../routes/consts";
import Swal from "sweetalert2";
import "./index.scss";

const GroupAttance = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { teacherService } = useService();
  const [studentAttance, setStudentAttance] = React.useState<
    IGroupStudentAttance[]
  >([]);
  const [isEdit, setIsEdit] = React.useState(true);
  const { data: studentsAttanceData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getGroupStudentAttance],
    () => {
      return teacherService
        .getGroupStudentAttance(location.state.groupId,location.state.lessonId)
        .catch((err) => {
          // alert("Site not responding... Try after again");
          console.log(err);
        });
    },
    {
      onSuccess: () => {setStudentAttance(studentsAttanceData?.data)
      console.log(studentsAttanceData);
      console.log(studentsAttanceData?.data);
      },
    }
  );

  const { mutateAsync: mutateStudentsAttance, isLoading: isSaveLoading } =
    useMutation((requestBody: IGroupStudentAttance[]) => {
      return teacherService
        .saveStudentsAttance(location.state.groupId,location.state.lessonId, requestBody)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Qiymətlər Sistemə Köçürüldü",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsEdit(true);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Xəta baş verdi",
            text: "Dəyişikliklər saxlanılmadı! Daha sonra yenidən cəhd edin",
          });
        });
    });

  const handleChangeInput = (
    { target: { value } }: React.ChangeEvent<HTMLSelectElement>,
    studentIndex: number,
    attanceIndex: number
  ) => {
    setStudentAttance((previus) => {
      const updatedStudentGrade = [...previus];
      const updatedItem: IStudentAttanceForTeacher = {
        ...updatedStudentGrade[studentIndex].attance[attanceIndex],
      };
      updatedItem.dvm = value;
      updatedStudentGrade[studentIndex].attance[attanceIndex] = updatedItem;
      return updatedStudentGrade;
    });
  };
  const handleEditAttances = () => {
    setIsEdit(false);
  };

  const handleSaveChanges = () => {
    mutateStudentsAttance(studentAttance);
    console.log(studentAttance);
    
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

  return studentsAttanceData?.data ? (
    <div className="studentsAttanceDataBG">
      <div className="studentsAttanceDataBox">
        <h1>Davamiyyət Cədvəli</h1>
        <div className="returnBox" onClick={handleReturnTeacherGroups}>
          <ChevronLeftIcon />
          <span>Geri qayıt</span>
        </div>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th>Ad Soyad</Th>
              <Th className="selectBoxTh">Davamiyyət</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentsAttanceData.data.map(
              (
                { studentId, firstName, surName, attance }: IGroupStudentAttance,
                studentIdx: number
              ) => {
                ordinalNum++;
                return (
                  <Tr key={studentId}>
                    <Td>{ordinalNum}</Td>
                    <Td>{firstName + " " + surName}</Td>
                    <Td className="selectBoxTD">
                      {attance.map(({ dvm }: IStudentAttanceForTeacher, dvmIdx: number) => (
                        <select
                          key={dvmIdx}
                          defaultValue={dvm === "+" ? "+" : "-"}
                          className="selectBox"
                          name="DVM"
                          onChange={(e) =>
                            handleChangeInput(e, studentIdx, dvmIdx)
                          }
                          disabled={isEdit}
                        >
                          
                          <option value="-">q</option>
                          <option
                            value="+"
                          >
                            +
                          </option>
                        </select>
                      ))}
                    </Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
        <div className="actionBtn">
          {isEdit ? (
            <Button onClick={handleEditAttances}>Düzəliş et</Button>
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

export default GroupAttance;
