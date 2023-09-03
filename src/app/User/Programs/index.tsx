import * as React from "react";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { IPrograms } from "../../../models";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/consts";
import { Link } from "react-router-dom";

export default function ProgramsList() {
  const { userService } = useService();
  const navigate = useNavigate();
  const { data: userProgramsData, isLoading }: any | undefined = useQuery(
    [EQueryKeys.getAllPrograms],
    () => {
      return userService.getAllPrograms().catch((err) => {
        console.log(err);
      });
    }
  );




  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>№</Th>
            <Th>Bölmə kodu</Th>
            <Th>Bölmənin adı</Th>
            <Th>Bölməyə məxsus dərs kodu prefiksləri</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userProgramsData?.data.length ? (
            userProgramsData.data.map((program: IPrograms) => {
              return (
                <Tr sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <Td>{1}</Td>
                  <Td onClick={(e)=>navigate(ROUTES.STUDENT.FACULTY_PROGRAMS_PAGE,{state:program.sectionCode})}>{program.sectionCode}
                  
                  </Td>
                  <Td>{program.sectionName}</Td>
                  <Td>
                    {program.sectionLessons.map((les: string) => (
                      <span>{les}, </span>
                    ))}
                  </Td>
                </Tr>
              );
            })
          ) : (
            <h1>DATA YOXDUR</h1>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
