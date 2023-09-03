import React from "react";
import { useLocation } from "react-router-dom";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IPrograms, ISectionProgramsFor } from "../../../models";
import { log } from "console";

const FacultyProgram = () => {
  const location = useLocation();
  const { userService } = useService();
  const { data: programData }: any | undefined = useQuery(
    [EQueryKeys.getProgramByCode],
    () => {
      return userService.getProgramByCode(location.state).catch((err) => {
        console.log(err);
      });
    }
  );
 

  console.log(programData?.data);
  

  

  return ( <TableContainer>
    <Table>
      <Thead>
        <Tr>
          <Th>№</Th>
          <Th>İli</Th>
          <Th>Kodu</Th>
          <Th>Dil</Th>
          <Th>Programın adı (İxtisasın Adı)</Th>
          <Th>Aid Olduğu fakültə</Th>
        </Tr>
      </Thead>
      <Tbody>
        {programData?.data?.sectionsProgramsForYear.length ? (
          programData?.data?.sectionsProgramsForYear.map((program: ISectionProgramsFor) => {
            return (
              <Tr key={program.code} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <Td>{1}</Td>
                <Td >{program.year}
                </Td>
                <Td>{program.code}</Td>
                <Td>{program.lang}</Td>
                <Td>{program.programName}</Td>
                <Td>{program.faculty}
                </Td>
              </Tr>
            );
          })
        ) : (
          <h1>ISLEMIR</h1>
        )}
      </Tbody>
    </Table>
  </TableContainer>)
};

export default FacultyProgram;
