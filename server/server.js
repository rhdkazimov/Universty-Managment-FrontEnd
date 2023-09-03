const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DUserData, DAnnouncesData, DProgramsData } = require("./data/users");
const PORT = process.env.PORT | 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  res.json({ systemMessage: "Working,Not Problem" });
});

app.post("/login", (req, res) => {
  if (
    req.body.userName === DUserData.studentID &&
    req.body.password === DUserData.password
  ) {
    res.json({ token: "YourTOKEN-CODE", user: DUserData });
  } else {
    res.sendStatus(400);
  }
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

app.listen(PORT, () => {
  console.log("Server Is Working...");
});
