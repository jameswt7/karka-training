// let a = [11,10,"array"]
// console.log(a)

//--------------------------------------------------------------------------------------------------------------------
// let b={
//     name:"james",
//     age:1,
// }
// console.log(b.name)

//--------------------------------------------------------------------------------------------------------------------
// let mark = {
//     tamil: 182,
//     english: 174,
//     maths: 172,
//     chemistry: 165,
//     physics: 170,
//     biology: 142
// }

// //console.log("the",mark.tamil > mark.english);

// if (mark.physics >=160 && mark.chemistry >=160 && mark.maths >=160 && mark.biology >= 160) {        
//     console.log("you are eligible for Demid College");
// }
// else if (mark.tamil >= 150 || mark.english >= 150 && mark.maths >= 150 && mark.physics >= 150) {
//     console.log("you are eligible for engineering");
// }
// else if (mark.chemistry >= 140 || mark.physics >= 140 && mark.biology >= 140 && mark.maths >= 140) {
//     console.log("Eligible for Bsc course");
// }
// else {
//     console.log("you are not fit for any coures");
// }

// //--------------------------------------------------------------------------------------------------------------------

// function call()     // for Get value from Html Page DOM and store in variable 
// {

//     let name = document.getElementById("Usrname1").value;
//     let dob = document.getElementById("date1").value;
//     let salary = document.getElementById("sal").value;

//     let formdata = {    // for store variable in array object  after and finally inside function call 

//         username: name,
//         DOB: dob,
//         salary: salary,
//     }
//     console.log(formdata)

//     let formdata1 = document.getElementById("frm1").value;
//     let par1 =document.getElementById("para1")
//     par1.innerHTML = name;
//     let par2 =document.getElementById("para2")
//     par2.innerHTML = dob;
//     let par3 =document.getElementById("para3")
//     par3.innerHTML = salary;
// }
// call()

// function call1(e) // for Page Reload
// {
//     e.preventDefault();
// }

// //--------------------------------------------------------------------------------------------------------------------

// let marks=[{      //  array inside mulitple object
//     tamil : 10,
//     eng: 10
// },{
// tamil : 10,
//     eng: 10
// },
// {
// tamil : 10,
//     eng: 10
// }
// ]
// console.log(marks)
//--------------------------------------------------------------------------------------------------------------------

// let students = [{
//     name: "mahathi",
//     qualification: 12,
// }, {
//     name: "james",
//     qualification: "BE",
// }, {
//     name: "mathan",
//     qualification: "BA",
// }, {
//     name: "arun",
//     qualification: "BE",

// }]
// console.log(students)
// for(i=0;i<students.length;i++)
// {
//     console.log(students[i].name)
// }

//--------------------------------------------------------------------------------------------------------------------

let students = [{
    name: "mahathi",
    place: "ngl",
    qualification: ["ba", "ma", "mba"],
    skills: ["html", "css", "js"]
},
{
    name: "james",
    place: "vadacherry",
    qualification: ["ba", "mE"],
    skills: ["html", "css", "python"]
},
{
    name: "mathan",
    place: "ngl",
    qualification: ["ba", "bsc", "bcom"],
    skills: ["python", "node"]
},
{
    name: "arun",
    place: "vadacherry",
    qualification: ["be", "me", "phd"],
    skills: ["html", "python", "react"]

}]

// for (i = 0; i < students.length; i++) {
//     console.log(students[i].name)
//     for (j = 0; j < students[i].qualification.length; j++) 
//     {
//         console.log(students[i].qualification[j])
//         for (k = 0; k < students[i].skills.length; k++) 
//         {
//             console.log(students[i].skills[k])

//         }
//     }

// }
//--------------------------------------------------------------------------------------------------------------------

// for (i = 0; i < students.length; i++) {   // filter by skill python
//     //console.log(students[i].name)
//     for (j = 0; j < students[i].skills.length; j++) {
//         if (students[i].skills[j] == "python") {
//             console.log(students[i].name)

//         }
//     }
// }
//--------------------------------------------------------------------------------------------------------------------
 // filter by place ngl ,because here not in array
// for (i = 0; i < students.length; i++) 
// {  
//         if (students[i].place == "ngl") 
//         {          
//             console.log(students[i].name)
//         }
// }

//--------------------------------------------------------------------------------------------------------------------
// Sorted array using loop

// const numberArr = [5, 9, 2, 8, 4, 10, 1, 3, 7, 6];

// function sortedFunction(arr) {
//   let sortedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let n = 0;
//       if (arr[i] > arr[j]) {
//         n = arr[i];
//         arr[i] = arr[j];
//         arr[j] = n;
//       }
//     }
//     sortedArr.push(arr[i]);
//   }
//   return sortedArr;
 
// }
// sortedFunction(numberArr);
// const newArr = sortedFunction(numberArr)
// console.log(newArr)

//----------------  oR
// let arr = [4, 2, 5, 1]
// let temp;

// function converter(arr) {

//   for(let i=0; i<arr.length; i++) {

//     for (let j=i+1; j<arr.length; j++) {

//       if(arr[i] > arr[j]) {

//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

// const newArr = converter(arr)
// console.log(newArr)   
//--------------------------------------------------------------------------------------------------------------------

for (i = 0; i < students.length; i++) 
{  
        if (students[i].place == "ngl") 
        {          
            console.log(students[i].name)
            // console.log(students[i].qualification)
            // console.log(students[i].skills)
            for (j = 0; j < students[i].qualification.length; j++) 
            {
                console.log(students[i].qualification[j])
                for(j=0; j < students[i].skills.length;j++)
                {
                    console.log(students[i].skills[j])
                }
               
            }
            
        }
}
