 const DUserData = {
    studentID:"202010023",
    password:"code123",
    firstName:"Ad",
    surName:"Soyad",
    birthDay: "11.03.2003",
    mail:"rhdkazimov@gmail.com",
    faculty:"Memarliq/Insaat",
    specialty:"Ekologiya Muhendisliyi",
    language:"AZ",
    includedYear:2020,
    academicHelper:"Etibar Memmedov",
    status:true,
    perYear:2200,
    includePoint:700,
    stateOrdered:false,
    img:"https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
}


const DAnnouncesData = [
    {
        headerInfo:"Elan 1",
        mainInfo:"Text 1",
        date:"11.030.45"
    },
    {
        headerInfo:"Elan 2",
        mainInfo:"Text 2",
        date:"11.030.45"
    },
    {
        headerInfo:"Elan 3",
        mainInfo:"Text 3",
        date:"11.030.45"
    },
]

const DProgramsData = [
    {
        sectionCode:"DEPS_ACC",
        sectionName:"Maliyyə və mühasibat",
        sectionLessons: ["ACC","MHS"],
        sectionsProgramsForYear: [{
            year:2023,
            code:10218,
            lang:"AZ",
            programName:"Mühasibat",
            faculty:"İqtisadiyyat və İdarəetmə"
        },{
            year:2022,
            code:102189,
            lang:"EN",
            programName:"Mühasibat 2",
            faculty:"İqtisadiyyat və İdarəetmə"
        },{
            year:2029,
            code:10218,
            lang:"AZ",
            programName:"Mühasibat Sirleri",
            faculty:"İqtisadiyyat və İdarəetmə"
        },
]
    },
    {
        sectionCode:"DEPS_ABC",
        sectionName:"Mühəndislik",
        sectionLessons: ["ACDC","MNC"],
        sectionsProgramsForYear: [{
            year:2024,
            code:10208,
            lang:"AZ",
            programName:"Coding",
            faculty:"İqtisadiyyat və İdarəetmə"
        },{
            year:2023,
            code:10208,
            lang:"AZ",
            programName:"Coding",
            faculty:"İqtisadiyyat və İdarəetmə"
        },{
            year:2021,
            code:10208,
            lang:"AZ",
            programName:"Coding",
            faculty:"İqtisadiyyat və İdarəetmə"
        },]
    },
    {
        sectionCode:"DEPS_MNC",
        sectionName:"Maliyyə və mühasibat",
        sectionLessons: ["ACC","MHS"],
        sectionsProgramsForYear: [{
            year:2023,
            code:10218,
            lang:"AZ",
            programName:"Mühasibat",
            faculty:"İqtisadiyyat və İdarəetmə"
        }]
    },
]

module.exports = {
    DUserData,DAnnouncesData,DProgramsData
};