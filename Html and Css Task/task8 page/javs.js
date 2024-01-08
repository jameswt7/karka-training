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




