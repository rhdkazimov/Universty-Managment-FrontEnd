import * as React from "react";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import { IPrograms, ISectionProgramsFor } from "../../../models";
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
import "./index.scss";

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

  const handleNavigatePrograms = (e: number, code: string) =>
    navigate(ROUTES.USER.FACULTY_PROGRAMS_PAGE, {
      state: {
        id: e,
        faculty: code,
      },
    });
  let ordinalNum = 0;

  return (
    <TableContainer className="facultyListContainer">
      <h1 className="facultyListHeader">Bölmələr (kafedraların) siyahısı</h1>
      <span className="facultyListInfo">
        Burada sistemdə tutulan kafedraları, kafedralara məxsus dərs kodu
        prefikslərini və kafedraların illərə görə proqramını görə bilərsiz.
      </span>
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
            userProgramsData.data.map(
              ({ id, lessons, name, code }: IPrograms) => {
                ordinalNum++;
                return (
                  <Tr
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Td>{ordinalNum}</Td>
                    <Td
                      className="sectionCode"
                      onClick={() => handleNavigatePrograms(id, code)}
                    >
                      {"DEPS_" + code}
                    </Td>
                    <Td>{name}</Td>
                    <Td>
                      {lessons.map(({ id, name }: ISectionProgramsFor) => (
                        <span key={id}>
                          {code + "_" + name.substring(0, 2).toUpperCase()},{" "}
                        </span>
                      ))}
                    </Td>
                  </Tr>
                );
              }
            )
          ) : (
            <Tr>
              <Td>DATA YOXDUR</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
