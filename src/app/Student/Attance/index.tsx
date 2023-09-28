import React from "react";
import { useService } from "../../../API/Services";
import { EQueryKeys } from "../../../enums";
import { useQuery } from "react-query";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Select,
  Button,
} from "@chakra-ui/react";
import { FadeLoader } from "react-spinners";
import "./index.scss";
import { IStudentAttanceData } from "../../../models";

const Attance: React.FC = () => {
  const { studentService } = useService();
  const [semester, setSemester] = React.useState("1");
  const {
    data: studentAttanceData,
    isLoading,
    refetch: referchAttanceData,
  }: any | undefined = useQuery([EQueryKeys.getStudentAttance], () => {
    const localStudent = localStorage.getItem("user");
    if (localStudent) {
      const student = JSON.parse(localStudent);
      return studentService
        .getStudentAttance(student.id)
        .catch((err) => console.log(err));
    }
  });
  let orderNum = 0;

  const handleChangeSemester = () => referchAttanceData();

  if (isLoading)
    return (
      <div className="loaderBox">
        <FadeLoader color="#36d7b7" />
      </div>
    );

  return studentAttanceData.data ? (
    <div className="studentAttanceDataBox">
      <h1 className="boxHeader">Elektron Jurnal</h1>
      {/* <div className="selectContainer">
        <span className="selectInfo">Smestr:</span>
        <Select
          className="selectBox"
          variant="filled"
          onChange={(e) => {
            setSemester(e.target.value);
          }}
          name=""
          id=""
        >
          <option value="1">1.semestr</option>
          <option value="2">2.semestr</option>
          <option value="3">3.semestr</option>
          <option value="4">4.semestr</option>
          <option value="5">5.semestr</option>
          <option value="6">6.semestr</option>
          <option value="7">7.semestr</option>
        </Select>
        <Button onClick={handleChangeSemester}>Göstər</Button>
      </div> */}
      <Table className="tableBox">
        <Thead>
          <Tr>
            <Th>№</Th>
            <Th>Kodu</Th>
            <Th>Dərsin adı</Th>
            <Th>Dərsin müəllimi</Th>
            <Th>Saat</Th>
            <Th>+</Th>
            <Th>q</Th>
            <Th>%</Th>
            <Th>Qaib Göstəricisi</Th>
          </Tr>
        </Thead>
        <Tbody>
          {studentAttanceData.data.map(
            ({
              id,
              name,
              teacher,
              time,
              plus,
              absance,
              percentage,
            }: IStudentAttanceData) => {
              orderNum++;
              return (
                <Tr
                key={id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <Td>{orderNum}</Td>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{teacher}</Td>
                  <Td>{time}</Td>
                  <Td>{plus}</Td>
                  <Td>{absance}</Td>
                  <Td>{percentage}</Td>
                  <Td>
                    <div className="progressBox">
                      <div
                        style={{ width: percentage+"%" }}
                        className="progressBar"
                      ></div>
                    </div>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </div>
  ) : (
    <div className="loaderBox">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default Attance;
