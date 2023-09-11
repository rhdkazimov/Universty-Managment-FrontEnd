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
  const [studentAttance, setStudentAttance] =
    React.useState<IGroupStudentAttance>();
  const [isEdit, setIsEdit] = React.useState(true);
  const { data: studentsAttanceData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getGroupStudentAttance],
    () => {
      return teacherService
        .getGroupStudentAttance(location.state)
        .catch((err) => {
          alert("Site not responding... Try after again");
        });
    }
  );
  const { mutateAsync: mutateStudentsAttance, isLoading: isSaveLoading } =
    useMutation((requestBody: IGroupStudentAttance[]) => {
      return teacherService
        .saveStudentsAttance(location.state, requestBody)
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

  // Set data state when changing input value problem
  const handleChangeInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    // setStudentAttance()
  };
  const handleEditAttances = () => {
    setIsEdit(false);
  };

  // AFTER HANDLE DATA SAVE STATE MUST BE HANDLE THIS POST PARAMETER
  const handleSaveChanges = () => {
    mutateStudentsAttance(studentsAttanceData.data);
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

  return studentsAttanceData.data ? (
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
              ({ id, name, surname, attance }: IGroupStudentAttance) => {
                ordinalNum++;
                return (
                  <Tr key={id}>
                    <Td>{ordinalNum}</Td>
                    <Td>{name + " " + surname}</Td>
                    <Td className="selectBoxTD">
                      {attance.map(({ DVM, idx }: any) => (
                        <select
                          defaultValue={DVM === "+" ? "+" : "-"}
                          className="selectBox"
                          name="DVM"
                          onChange={(e) => handleChangeInput(e)}
                          disabled={isEdit}
                        >
                          <option value="-">q</option>
                          <option
                            // selected={attance.DVM === "+" && true}
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