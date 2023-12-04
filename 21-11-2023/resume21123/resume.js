// let resume = [{
//     Career_Objective: "I would like to utilize my professional skill along with in the relative field to perform my duties to the best of my efficiency.",

//     Education_Qualification: [{
//         Course1:
//         {
//             COURSE_NAME: "BE in CSE",
//             UNIVERSITY_NAME: "Anna University Chennai",
//             YAER: 2015,
//             INSTITUTE_NAME: "St. Xavier’s Catholic College of Engineering, Nagercoil",
//             percentage: 62
//         },
//         Course2:
//         {
//             COURSE_NAME: "Diploma in Computer Science and Engineering",
//             UNIVERSITY_NAME: "Tamil Nadu State Board",
//             YAER: 2012,
//             INSTITUTE_NAME: "Government Polytechnic College in Konam, Nagercoil",
//             percentage: 86
//         },
//         Course3:
//         {
//             COURSE_NAME: "SSLC",
//             UNIVERSITY_NAME: "Tamil Nadu State Board",
//             YAER: 2009,
//             INSTITUTE_NAME: "Scott Christian and Higher Secondary School",
//             percentage: 80
//         }
//     }],
//     SOFTWARE_SKILLS: {
//         Languages_known: "python,sql and html",
//         Operating_Systems: "Windows 7,8,10",
//     },
//     personal_details: {
//         Name: " A.James watt",
//         FATHER_NAME: "S.Antony Samson",
//         DOB: "11-01-1993",
//         LANGUAGES_KNOWN: "Tamil and English",
//         GENDER: "Male",
//         MARITAL_STATUS: "Single",
//         RELIGION: "Christian",
//         Country: "India",
//         mail: "jameswattofficial77@gmail.com",
//         phone: "9080866128",
//         Address: "35, ammancoil road, pallivillai 1st street, vetturnimadam,Nagercoil"

//     },

//     DECLARATIONS: "I hereby declare that the information furnished above is true and authentic to the best of my knowledge and that I am solely responsible for any discrepancy."

// }]

// console.log(resume)
// function DATA() {

//     for (i = 0; i < resume.length; i++) {
//         console.log(resume[i].Career_Objective)
//         console.log(resume[i].DECLARATIONS)
//         for (j = 0; j < resume[i].Education_Qualification.length; j++) {
//             console.log(resume[i].Education_Qualification[j].COURSE_NAME)

//         }

//     }
// }


// DATA()

// function call1(e) // for Page Reload
// {
//     e.preventDefault();
// }


function call()
{

    let textbox1 = document.getElementById("txtinput1").value;
    let textbox2 = document.getElementById("txtinput2").value;
    let selectopt = document.getElementById("sltoperation").value;
    let resultlbl = document.getElementById("labelresult")
  
    resultlbl.innerHTML=selectopt
    let res
    if(selectopt == "+")
    {
        res= textbox1+textbox2;
        resultlbl.innerHTML=res
        //alert(`${res}`)
    }
    alert(`${res}`)

}

function callpageload(e) // for Page Reload
{
    e.preventDefault();
}
