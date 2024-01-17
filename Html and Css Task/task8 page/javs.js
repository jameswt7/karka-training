// Task Assignment ::
// 1.

// let sum=0;

// while(true)
// {
//     const usrInput = prompt('Enter an integer (Enter 0 to stop):')
//     const num = parseInt(usrInput)

//     if(!isNaN(num))
//     {
//         sum += num;
//         if (num === 0) 
//         {
//             break;   
//         }
//     }
// }
// console.log('Total sum:' + sum)

// // 2.
// var age =  parseInt(prompt('Enter an age'))

// if (age < 16) 
// {
//     console.log("You can't drive.");
// }
// else if( age>=16 && age<=17)
// {
//     console.log("You can drive but not vote.");
// }
// else if( age>=18 && age<=24)
// {
//     console.log("You can vote but not rent a car.");
// }
// else if( age>=25)
// {
//     console.log("You can do pretty much anything.");
// }

// 3.
// var fstarr =[1,2,3,4,5,6,7,8,9,10]
// var previous_num = 0
// var sum = 0;
// for (let index = 0; index < fstarr.length; index++) 
// {
//         sum += fstarr[index];
//         console.log('Current number', `${fstarr[index]}` ,'Previous number',`${previous_num}`,'Sum :',`${sum}`);
// }

// // 4. 
// const startNo = 10;
// const endNo = 55;
// function even_num(startNo,endNo){
// 	var evenCount = 0;
//     var oddCount = 0;
// 	for(var i = startNo ; i <=endNo; i++) {
// 		if (i % 2 === 0){
// 			evenCount++;
           
// 		}
//         else 
//         {
//             oddCount++;
           
//         }
// 	}
//     console.log('Even number occurence :', evenCount);
//     console.log('Odd number occurence :', oddCount);

// }
// even_num(startNo,endNo)

// 5.

// const number1 = 20;
// const number2 = 30;

// function ProductorSum(number1,number2)
// {
//     const product = number1 * number2;
//     if(product<500)
//     {
//         const sum = number1 + number2;
//         return sum;
//     }
//     else
//     {
//         return product;
//     }
// }
// const result = ProductorSum(number1,number2)
// console.log('Result is',result);

// 6.

// const no1=25;
// const no2=40;
// const no3=30;
// function Greatestthree(no1,no2,no3)
// {
// var greatestNum = no1;

//     if (no2>greatestNum) {
//         greatestNum=no2;
//     }
//     if (no3>greatestNum) {
//         greatestNum=no3;
//     }
//     console.log('The greatest number is', greatestNum)
// }
// Greatestthree(no1,no2,no3)

// 7.

// const arrList = [10,20,30,20,10,50,60,40,80,50,40]

// function getUnique(arr)
// {
//     let uniqitms=[];
//         for (let index of arr) {

//             if(uniqitms.indexOf(index)===-1){
//                 uniqitms.push(index);
//             }   
//         }
//         console.log(uniqitms)
// }
// getUnique(arrList)

// 8.

// var nums = [3,2,2,3]

// function RemoveAndReplace(arrr,old_value,new_value)
// {
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === old_value) 
//         {
//             nums[index]=new_value;         
//         }   
//     }
//     return arrr
// }
// console.log("Original Array: "+nums)
// console.log(RemoveAndReplace(nums,3,2))

// // 9.

// var arr1 = [1,2,3,1] 
// var arr2 = [1,2,3,4,] 
// function fTrueorFalse(nums) 
// {
//     const uniqitms = new Set();
//     for (let index of nums) 
//     {
//         if(uniqitms.has(index))
//         {
//             return true;
//         }
//         uniqitms.add(index);   
//     }
//     return false;
// }
// console.log(fTrueorFalse(arr1));
// console.log(fTrueorFalse(arr2))

// 10.

// const num=38;            
// function addDigits(num)
// {
//     while(num>=10)
//     {
//         let sum=0;
//         while(num>0)
//         {
//             sum += num % 10;
//             num = Math.floor(num/10);
//         }
//         num = sum;
//     }
//     return num;
// }
// console.log(addDigits(num))

// 11.

// const arrlst = [1,0,2,3,0,4,5,0]

// function duplicateZeros(arrlst)
// {
//     const arrLength = arrlst.length;
//     for(let i=arrLength-1;i>=0;i--)
//     {
//         if(arrlst[i]===0)
//         {
//             for(let j=arrLength-1;j>i;j--)
//             {
//                 arrlst[j] = arrlst[j-1]
//             }
//             if(i+1<arrLength)
//             {
//                 arrLength[i+1]=0;
//             }
//             i--;
//         }

//     }
// }
// duplicateZeros(arrlst)
// console.log(arrlst)

// 12. 

// const nums1 = [1,2,2,1];
// const nums2 = [2,2];

// function intersection(nums1,nums2)
// {
//     var results=[];
//     for(var i=0;i<nums1.length;i++)
//     { 
//         const currentNum = nums1[i];
//         if(nums2.includes(currentNum) && !results.includes(currentNum))
//         {
//             results.push(currentNum)
//         }
//     }
//     return results;
// }
// const result = (intersection(nums1,nums2));
// console.log("Array intersection is :" ,result);

// 13. 

// const password=prompt("Enter the Password");

// function isStrongPassword(password)
// {
//     if(password.length < 8)
//     {
//         return false;
//     }
//     if(!/[a-z]/.test(password))
//     {
//         return false;
//     }
//     if(!/[A-Z]/.test(password))
//     {
//         return false;
//     }
//     if(!/\d/.test(password))
//     {
//         return false;
//     }
//     if(!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password))
//     {
//         return false;
//     }
//     return true;
// }
// const isPasswordStrong = isStrongPassword(password)
// if(isPasswordStrong)
// {
//     console.log("Password was Strong : ",password)
// }
// else {
//     console.log("Password is not strong. Please follow the criteria.");
// }

// 14. 

// const nums =[[1,2],[3,4]]
// const operation = "Add"
// const output = arrayOperation(nums,operation)
// function arrayOperation(nums,operation)
// {
//     let result = 0;
//     for(let i=0;i<nums.length;i++)
//     {
//         for(let j=0;j<nums[i].length;j++)
//         {
//             if(operation==="Add")
//             {
//                 result += nums[i][j]
//             }
//         }
//     }
//     return result;
// }
// console.log("The sum is : ",output)

// 15.

// const nums=[[23,98],[42,70]]
// const operation = "String";
// const output = arrayOperation(nums,operation);
// function arrayOperation(nums,operation)
// {
//     if(operation==="String")
//     {
//         const flatArray=nums.flat();
//         const result = JSON.stringify(flatArray)
//         return result;
//     }
//     else{
//         return null;
//     }
// }
// console.log("The string is ", output);

// 16.

// function generateCumulativeSumArray(inputArray) {
//     let outputArray = [];
//     let cumulativeSum = 0;
  
//     for (let i = 0; i < inputArray.length; i++) {
//       cumulativeSum += inputArray[i];
//       outputArray.push(cumulativeSum);
//       outputArray.push(inputArray[i]);
//     }
  
//     return outputArray;
//   }
  
//   const inputArray = [5, 10, 20, 2, 0, 33, 100, 90];
//   const outputArray = generateCumulativeSumArray(inputArray);
  
//   console.log(outputArray);
  
// 17. 
// var nums = [0,1,0,3,12]
// function moveZeros (nums)
// {
//     const newArray = [];
//     const allZeros = [];
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]>=1)
//         {
//             newArray.push(nums[i]);
//         }
//         else{
//             allZeros.push(nums[i])
//         }
//     } 
//     return newArray.concat(allZeros)
// }
// var outputArr = moveZeros (nums)
// console.log(outputArr)



// Day 3 :

// 18.

// const strDta = " J a m e s w A T t ";
// const RemoveSpace = strDta.replaceAll(' ','')
// console.log(RemoveSpace);

// 19.

// var x= 10;
// var y= 20;
// x= x + y;
// y=x-y;
// x=x-y
// console.log(x,y)

// 20.
// Example usage
// const string1 = "Listen";
// const string2 = "Silent"; 

// function StringOrAnagram(str1, str2) {
//   // Remove spaces and convert to lowercase for accurate comparison
//   const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
//   const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

//   // Check if the lengths are the same
//   if (cleanStr1.length !== cleanStr2.length) {
//     return false;
//   }

//   // Sort the characters in both strings and compare
//   const sortedStr1 = cleanStr1.split('').sort().join('');
//   const sortedStr2 = cleanStr2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// }

// if (StringOrAnagram(string1, string2)) {
//   console.log(`${string1} and ${string2} are anagrams.`);
// } else {
//   console.log(`${string1} and ${string2} are not anagrams.`);
// }

// 21.

// const data=[{month:1,units_consumed:100,billAmount:200},
// {month:2,units_consumed:150,billAmount:300},
// {month:3,units_consumed:300,billAmount:1500},
// {month:4,units_consumed:400,billAmount:2000}];

// const dictionaryView = data.map(item=>{
//     return {
//         month : item.month,
//         units_consumed:item.units_consumed,
//         billAmount:item.billAmount
//     };
// });
// console.log('Dictionary_View',dictionaryView)

// 22.

// function calculate_electricity_bill(consumer_data)
// {
//     const   { consumer_name,eb_reading } = consumer_data;
//     const billDetails = [];

//     for(let i=0;i<eb_reading.length-1;i++)
//     {
//         const units_consumed = eb_reading[i+1]-eb_reading[i];
//         let rate=0;
//         if(units_consumed>0 && units_consumed<=100) 
//         {
//             rate=0;
//         }
//         else if(units_consumed>100 && units_consumed <=200)
//         {
//             rate=2;
//         }
//         else if(units_consumed>200 && units_consumed <=500)
//         {
//             rate=5;
//         }
//         else if(units_consumed>500 && units_consumed <=1000)
//         {
//             rate =10;
//         }
//         else{
//             rate=14;
//         }

//         const billAmount = units_consumed * rate;
//         billDetails.push({
//             month: i + 1,
//             units_consumed,
//             billAmount
//         });
//     }
//     const totalBillAmount = billDetails.reduce((total,entry)=>total + entry.billAmount,0);

//     return{
//         consumer_name,
//         billDetails,
//         totalBillAmount
//     };
// }

// const consumer_data = {"consumer_name":"james watt","eb_reading":[1100,1200,1350,1650,2050]};

// const result=calculate_electricity_bill(consumer_data);
// console.log(result)

// 23.

// const items_list = [
//     {'name': 'Apple', 'category': 'Fruits'},
//     {'name': 'Carrot', 'category': 'Vegetables'},
//     {'name': 'Banana', 'category': 'Fruits'},
//     {'name': 'Broccoli', 'category': 'Vegetables'}]

// function groupItemByCategory(items_list)
// {
//     const categoryDict = {};

//     items_list.forEach(item => {
//         const { name, category}= item;

//         if(!categoryDict[category])
//         {
//             categoryDict[category]=[];

//         }
//         categoryDict[category].push(name);
//     });
//     return categoryDict;
// }

// const result = groupItemByCategory(items_list);

// console.log(result);


// 24.

// var my_resume = {
//     name : 'James Watt',
//     email : 'wattjms1993@gmail.com',
//     mobileNo : '814-854-3140',
//     softSkills : ['Communication','Teamwork','Time Management'],
//     hardSkills : ['Javascript','HTML','CSS','Python'],
//     education : {
//         sslc : {
//             board : 'State Board',
//             year : 2009,
//             percentage : 80
//         },
//         diploma : {
//             board : 'State Board',
//             year : 2012,
//             percentage : 86
//         },
//         degree : {
//             course : 'Bachelor of Science in Computer Science',
//             university : 'St.Xaviers Catholic College of Engineering ',
//             year : 2015,
//             cgpa : 6.2
//         }
//     },
//     projects : ['Patient Management System','Content-Based Image Retrieval','Production Management Website'],
//     experience : {
//         company1 :{
//             role : 'Software Developer',
//             duration : '2015-2018',          
//         },
//         company2 :{
//             role :'Senior Developer',
//             duration : '2018-2024'
//         }
//     },
//     hobbies :['ReadingPapers','Music'],
//     personalDetails:{
//         fatherName : 'S.Antony Samson',
//         fatherOccupation : 'Business',
//         languagesknown : ['Tamil','English'],
//         dob : 'January-11-1993',
//         gender : 'male' ,
//         martialStatus : 'Single',
//         address : '35 Ammancoil Road, Pallivillai 1st Street,Vetturnimadam,Nagercoil-629003,KanyaKumari,TamilNadu '
//     }
// }
// console.log(my_resume)



