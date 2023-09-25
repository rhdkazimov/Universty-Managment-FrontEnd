import { useLocation, useNavigate } from "react-router-dom";
import { useService } from "../../../API/Services";
import { useQuery } from "react-query";
import { EQueryKeys } from "../../../enums";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ISectionProgramsFor } from "../../../models";
import "./facultyprogram.scss";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { ROUTES } from "../../../routes/consts";

const FacultyProgram: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userService } = useService();
  const { data: programData }: any | undefined = useQuery(
    [EQueryKeys.getProgramByCode],
    () => {
      return userService.getProgramByCode(location.state.id).catch((err) => {
        alert("Site not responding... Try after again")
      });
    }
  );

  const handleReturnList = () => navigate(ROUTES.USER.PROGRAMS_PAGE);
  let ordinalNum = 0;
  return (
    <TableContainer className="facultyProgramContainer">
      <h1 className="facultyProgramHeader">
        Kafedra proqramların illərə görə siyahısı
      </h1>
      <div className="returnProgramListContainer" onClick={handleReturnList}>
        <ChevronLeftIcon className="returnProgramListIcon" />{" "}
        <span className="returnProgramsList">Siyahıya Geri Dön</span>
      </div>
      <span className="facultyName">{location.state.faculty} kafedrasının illərə görə proqramları</span>
      <Table>
        <Thead>
          <Tr>
            <Th>№</Th>
            <Th>Programın adı (İxtisasın Adı)</Th>
            <Th>Aid Olduğu fakültə</Th>
          </Tr>
        </Thead>
        <Tbody>
          {programData?.data?.length? (
            programData?.data?.map(
              ({id,name}: ISectionProgramsFor) => {
                ordinalNum++;
                return (
                  <Tr
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Td>{ordinalNum}</Td>
                    <Td>{name}</Td>
                    <Td>{location.state.faculty}</Td>
                  </Tr>
                );
              }
            )
          ) : (
            <Tr><Td>
              Məlumat Yoxdur
              </Td></Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FacultyProgram;
