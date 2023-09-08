import React from "react";
import { EQueryKeys } from "../../../enums";
import { useQuery } from "react-query";
import { useService } from "../../../API/Services";
import { FadeLoader } from "react-spinners";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ITeacherGroups } from "../../../models";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import "./index.scss";
const GradesNote: React.FC = () => {
  const { teacherService } = useService();
  const navigate = useNavigate();
  const { data: teacherGroupsData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getGroupStudent],
    () => {
      const localUser = localStorage.getItem("user");
      if (localUser) {
        const user = JSON.parse(localUser);
        return teacherService
          .getTeachersGroup(user.id)
          .catch((err) => console.log(err));
      }
    }
  );

  const handleNavigateStudents = (e: string) => {
    navigate(ROUTES.TEACHER.CHECK_STUDENTS_GRADES, { state: e });
  };

  if (isLoading) {
    return (
      <div className="loaderBox">
        <FadeLoader color="#36d7b7" />
      </div>
    );
  }

  return teacherGroupsData ? (
    <div className="teacherGroupsDataBoxBG">
      <div className="teacherGroupsDataBox">
        <h1 className="boxHeader">Dərs Deyilən Qruplar :</h1>
        <Table>
          <Thead>
            <Tr>
              <Th>Dərs Kodu</Th>
              <Th>Dərsin Adı</Th>
              <Th>Tələbə Sayı</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {teacherGroupsData.data.map(
              ({ groupCode, studentCounts, lessonName }: ITeacherGroups) => {
                return (
                  <Tr key={groupCode}>
                    <Td>{groupCode}</Td>
                    <Td>{lessonName}</Td>
                    <Td>{studentCounts}</Td>
                    <Td onClick={() => handleNavigateStudents(groupCode)}>
                      <Button className="moreInformation">Daha Ətraflı</Button>
                    </Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  ) : (
    <div className="loaderBox">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default GradesNote;
