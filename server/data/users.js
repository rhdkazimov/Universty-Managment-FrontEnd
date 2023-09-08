const DUserData = [
  {
    type: "student",
    id: "1111",
    password: "code123",
    firstName: "Ad",
    surName: "Soyad",
    birthDay: "11.03.2003",
    mail: "rhdkazimov@gmail.com",
    faculty: "Memarliq/Insaat",
    specialty: "Ekologiya Muhendisliyi",
    language: "AZ",
    includedYear: 2020,
    academicHelper: "Etibar Memmedov",
    status: true,
    perYear: 2200,
    includePoint: 700,
    stateOrdered: false,
    img: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
  },
  {
    type: "teacher",
    id: "2222",
    password: "2222",
    firstName: "Rahid",
    surName: "Kazimov",
    birthDay: "11.03.2023",
    mail: "rhdkazimov@gmail.com",
    faculty: "Memarliq/Insaat",
    specialty: "Ekolog",
    language: "AZ",
    includedYear: 2016,
    img: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
  },
];

const DAnnouncesData = [
  {
    headerInfo: "Elan 1",
    mainInfo: "Text 1",
    date: "11.030.45",
  },
  {
    headerInfo: "Elan 2",
    mainInfo: "Text 2",
    date: "11.030.45",
  },
  {
    headerInfo: "Elan 3",
    mainInfo: "Text 3",
    date: "11.030.45",
  },
];

const DUserGrades = [
  {
    years: "2020-2021",
    semester: 1,
    grades: [
      {
        lessonCode: "EKM 103",
        lessonName: "Ekologiya 1",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 104",
        lessonName: "Mühendis Qrafikası",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 105",
        lessonName: "Azərbaycan Dili",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 106",
        lessonName: "Ümumi Ekologiya",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
    ],
  },
  {
    years: "2020-2021",
    semester: 2,
    grades: [
      {
        lessonCode: "EKM 103",
        lessonName: "Ekologiya 1",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 104",
        lessonName: "Mühendis Qrafikası",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 105",
        lessonName: "Azərbaycan Dili",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
      {
        lessonCode: "EKM 106",
        lessonName: "Ümumi Ekologiya",
        SDF1: 52,
        SDF2: 85,
        SDF3: 92,
        TSI: 76,
        SSI: 82,
        ORT: 96,
      },
    ],
  },
];

const DProgramsData = [
  {
    sectionCode: "DEPS_ACC",
    sectionName: "Maliyyə və mühasibat",
    sectionLessons: ["ACC", "MHS"],
    sectionsProgramsForYear: [
      {
        year: 2023,
        code: 10218,
        lang: "AZ",
        programName: "Mühasibat",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
      {
        year: 2022,
        code: 102189,
        lang: "EN",
        programName: "Mühasibat 2",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
      {
        year: 2029,
        code: 10218,
        lang: "AZ",
        programName: "Mühasibat Sirleri",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
    ],
  },
  {
    sectionCode: "DEPS_ABC",
    sectionName: "Mühəndislik",
    sectionLessons: ["ACDC", "MNC"],
    sectionsProgramsForYear: [
      {
        year: 2024,
        code: 10208,
        lang: "AZ",
        programName: "Coding",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
      {
        year: 2023,
        code: 10208,
        lang: "AZ",
        programName: "Coding",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
      {
        year: 2021,
        code: 10208,
        lang: "AZ",
        programName: "Coding",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
    ],
  },
  {
    sectionCode: "DEPS_MNC",
    sectionName: "Maliyyə və mühasibat",
    sectionLessons: ["ACC", "MHS"],
    sectionsProgramsForYear: [
      {
        year: 2023,
        code: 10218,
        lang: "AZ",
        programName: "Mühasibat",
        faculty: "İqtisadiyyat və İdarəetmə",
      },
    ],
  },
];

const DStudentAttance = {
  year: "2020-2021",
  semester: 1,
  lessons: [
    {
      code: "EKM 103",
      name: "Ümumi Ekologiya",
      teacher: "Etibar Qehremanov",
      time: 26,
      plus: 16,
      absance: 2,
      percentage: 4,
    },
    {
      code: "EKM 104",
      name: "Ekologiya",
      teacher: "Etibar Qehremanov",
      time: 22,
      plus: 6,
      absance: 0,
      percentage: 8,
    },
    {
      code: "EKM 105",
      name: "Ümumi 2",
      teacher: "Etibar Qehremanov",
      time: 16,
      plus: 4,
      absance: 2,
      percentage: 16,
    },
  ],
};

const DUniverstySettingData = {
  number: "+994508859083",
  faks: "+994508859083",
  mail: "mirrahidsk@code.edu.az",
};

const DStudentGroupData = {
  groupCode: "4060A",
  lessonName:"Ekologiya",
  students: [
    {
      name: "Rahid",
      surname: "Kazimov",
      SDF1:0,
      SDF2:0,
      SDF3:0,
      TSI:0,
      SSI:0,
      ORT:0
    },
    {
      name: "Kenan",
      surname: "Elekberov",
      SDF1:0,
      SDF2:0,
      SDF3:0,
      TSI:0,
      SSI:0,
      ORT:0
    },
    {
      name: "Huseyn",
      surname: "Kazimov",
      SDF1:0,
      SDF2:0,
      SDF3:0,
      TSI:0,
      SSI:0,
      ORT:0
    },
    {
      name: "Nazim",
      surname: "Asimov",
      SDF1:0,
      SDF2:0,
      SDF3:0,
      TSI:0,
      SSI:0,
      ORT:0
    },
  ],
};

const DTeachersGroup = [
  {
    groupCode:"4060A",
    lessonName:"Ekologiya",
    studentCounts : 5
  },
  {
    groupCode:"4070A",
    lessonName:"Ekologiya",
    studentCounts : 15
  },
  {
    groupCode:"4080A",
    lessonName:"Ekologiya",
    studentCounts : 12
  },
  {
    groupCode:"4090A",
    lessonName:"Ekologiya",
    studentCounts : 4
  },
  {
    groupCode:"4010A",
    lessonName:"Ekologiya",
    studentCounts : 11
  }
]

module.exports = {
  DUserData,
  DAnnouncesData,
  DProgramsData,
  DUserGrades,
  DStudentAttance,
  DUniverstySettingData,
  DStudentGroupData,
  DTeachersGroup
};
