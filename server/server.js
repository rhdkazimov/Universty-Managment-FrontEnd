const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  DUserData,
  DAnnouncesData,
  DProgramsData,
  DUserGrades,
  DStudentAttance,
  DUniverstySettingData,
  DTeachersGroup,
  DStudentGroupData,
  DTeacherGroupAttance,
} = require("./data/users");
const PORT = process.env.PORT | 3001;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post("/login", (req, res) => {
  // DUserData.forEach((data) => {
  //   if (req.body.userName === data.id && req.body.password === data.password) {
      res.status(200).json({ token: "YourTOKEN-CODE", user: DUserData[0] });
    // }
  // });
});

app.get("/AllAnnounces", (_, res) => {
  res.json(DAnnouncesData);
});

app.get("/AllPrograms", (_, res) => {
  res.json(DProgramsData);
});

app.get("/Program/:id", (req, res) => {
  res.json(DProgramsData.find((x) => x.sectionCode === req.params.id));
});

app.get("/grades/:id", (req, res) => {
  res.json(DUserGrades);
});

app.get("/attance/:id/:semester", (req, res) => {
  console.log(req.params.semester);
  res.json(DStudentAttance);
});

app.get("/system-settings-data", (_, res) => {
  res.json(DUniverstySettingData);
});

app.post("/contact/support/:id", (req, res) => {
  res.sendStatus(200);
});


app.get("/groups/:id", (req, res) => {
  res.json(DTeachersGroup);
});

app.get("/group/students/:id", (req, res) => {
  res.json(DStudentGroupData);
});

app.get("/group/attance/:id", (req, res) => {
  res.json(DTeacherGroupAttance);
});

app.post("/grade-note/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.sendStatus(200);
});

app.post("/group/save/attance/:id", (req, res) => {
  res.sendStatus(200);
  // res.json({salam:"salam"})
});


app.listen(PORT, () => {
  console.log("Server Is Working...");
});
