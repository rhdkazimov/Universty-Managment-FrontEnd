import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useService } from "../../../API/Services";
import { useMutation, useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { FadeLoader } from "react-spinners";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IGroupInfo, IGroupStudents } from "../../../models";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../../routes/consts";
import Swal from "sweetalert2";
import "./gradesnote.scss"

const StudentsGradesNote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { teacherService } = useService();
  const [studentGrade, setStudentGrade] = React.useState<IGroupInfo>();
  const [isEdit, setIsEdit] = React.useState(true);
  const { data: studentsGradesData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getGroupStudentsGrades],
    () => {
      return teacherService.getGroupStudents(location.state).catch((err) => {
        alert("Site not responding... Try after again");
      });
    }
  );
  const { mutateAsync: mutateStudentsGrades, isLoading: isSaveLoading } =
    useMutation((requestBody: IGroupInfo) => {
      return teacherService
        .saveStudentsGrade(location.state, requestBody)
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
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Xəta baş verdi",
            text: "Dəyişikliklər saxlanılmadı! Daha sonra yenidən cəhd edin",
          });
        });
    });

  // Set data state when changing input value problem
  const handleChangeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    // setStudentGrade()
  };

  const handleEditGrades = () => {
    setIsEdit(false);
  };

  // AFTER HANDLE DATA SAVE STATE MUST BE HANDLE THIS POST PARAMETER
  const handleSaveChanges = () => {
    mutateStudentsGrades(studentsGradesData.data);
    setIsEdit(true);
  };

  const handleReturnTeacherGroups = () => {
    if (isEdit) {
      return navigate(ROUTES.TEACHER.CHECK_GRADES);
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
          return navigate(ROUTES.TEACHER.CHECK_GRADES);
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

  return studentsGradesData.data ? (
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
            ({
              SDF1,
              SDF2,
              SDF3,
              TSI,
              SSI,
              ORT,
              name,
              surname,
            }: IGroupStudents) => {
              ordinalNum++;
              return (
                <Tr key={name + surname}>
                  <Td>{ordinalNum}</Td>
                  <Td>{name + " " + surname}</Td>
                  <Td>
                    <input
                      type="number"
                      name="sdf1"
                      onChange={(e) => handleChangeInput(e)}
                      defaultValue={SDF1}
                      disabled={isEdit}
                    />
                  </Td>
                  <Td>
                    <input
                      type="number"
                      name="sdf2"
                      onChange={(e) => handleChangeInput(e)}
                      defaultValue={SDF2}
                      disabled={isEdit}
                    />
                  </Td>
                  <Td>
                    <input
                      type="number"
                      name="sdf3"
                      defaultValue={SDF3}
                      disabled={isEdit}
                    />
                  </Td>
                  <Td>
                    <input
                      type="number"
                      name="tsi"
                      defaultValue={TSI}
                      disabled={isEdit}
                    />
                  </Td>
                  <Td>
                    <input
                      type="number"
                      name="ssi"
                      defaultValue={SSI}
                      disabled={isEdit}
                    />
                  </Td>
                  <Td>{ORT}</Td>
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
