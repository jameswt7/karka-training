let resume = [{
    Career_Objective: "I would like to utilize my professional skill along with in the relative field to perform my duties to the best of my efficiency.",

    Education_Qualification: [{
        COURSE_NAME: "BE in CSE",
        UNIVERSITY_NAME: "Anna University Chennai",
        YAER: 2015,
        INSTITUTE_NAME: "St. Xavier’s Catholic College of Engineering, Nagercoil",
        CGPA: 62
    },
    {
        COURSE_NAME: "Diploma in Computer Science and Engineering",
        UNIVERSITY_NAME: "Tamil Nadu State Board",
        YAER: 2012,
        INSTITUTE_NAME: "Government Polytechnic College in Konam, Nagercoil",
        CGPA: 86
    },
    {
        COURSE_NAME: "SSLC",
        UNIVERSITY_NAME: "Tamil Nadu State Board",
        YAER: 2009,
        INSTITUTE_NAME: "Scott Christian and Higher Secondary School",
        CGPA: 80
    }],
    SOFTWARE_SKILLS: {
        Languages_known: "python,sql and html",
        Operating_Systems: "Windows 7,8,10",
    },
    personal_details: {
        Name: " A.James watt",
        FATHER_NAME: "S.Antony Samson",
        DOB: "11-01-1993",
        LANGUAGES_KNOWN: "Tamil and English",
        GENDER: "Male",
        MARITAL_STATUS: "Single",
        RELIGION: "Christian",
        Country: "India",
        mail: "jameswattofficial77@gmail.com",
        phone: "9080866128",
        Address: "35, ammancoil road, pallivillai 1st street, vetturnimadam,Nagercoil"

    },

    DECLARATIONS: "I hereby declare that the information furnished above is true and authentic to the best of my knowledge and that I am solely responsible for any discrepancy."

}]

//console.log(resume)  
function DATA() {
    var data = resume;
    let p = document.getElementById("para1")
    var pa = document.getElementById("paragra")
    pa.innerHTML= data;
    for(i=0;i<resume.length;i++){
        console.log(resume[i].Career_Objective)
        console.log(resume[i].DECLARATIONS)
        for(j=0;j<resume[i].Education_Qualification.length;j++)
        {
            console.log(resume[i].Education_Qualification[j].COURSE_NAME)
        }
    }
   
}
DATA()

function call1(e) // for Page Reload
{
    e.preventDefault();
}
//------------------------------------------------------------------------------------------------------------
// object iterate ---- using ----- for..... in loop 
// let obj={
//     name : "ajay",
//     age : 22,
//     qualification : "BE",
//     place : "Anjugramam"
// }
// for(let a in obj){
//     let value=obj[a]
//     console.log(value)
// }
//------------------------------------------------------------------------------------------------------------
// filer only mark using loop and for-in loop
// let obj=[{
//     name : "ajay",
//     age : 22,
//     qualification : "BE",
//     place : "Anjugramam",
//     mark : {
//     tamil: 182,
//     english: 174,
//     maths: 172,
//     chemistry: 165,
//     physics: 170,
//     biology: 142
// }}]
// //console.log(obj.name)
// for(i=0; i<obj.length;i++){
//     for(let a in obj[i].mark)
//     {
//         let val= obj[i].mark[a]
//         console.log(val)
//     }
// }
//------------------------------------------------------------------------------------------------------------