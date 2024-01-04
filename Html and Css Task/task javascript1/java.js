// Task Assignment ::
// 1.

var arr = [5, 2, -7, 3, -2, -1];
var pushNegNum = [];
console.log("Task : Negative Number is")
function negativeNumOrder() {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            pushNegNum.push(element);

        }
    }
    return pushNegNum;
}
console.log(negativeNumOrder())

// 2.

var array = [5, 10, 15, 20, 25];
let sum = 0;
console.log("Task : sum of the array is")
function Sum() {
    for (let i = 0; i < array.length; i++) {

        sum += array[i];

    }
    console.log(sum)
}
Sum()

// 3.

var divArr = [10, 11, 20, 25, 5, 60, 50];

console.log("Task : divisible by 10")
for (let i = 0; i < divArr.length; i++) {
    if (divArr[i] % 10 === 0) {
        console.log(divArr[i])
    }
}

// 4. 

const MAXarrval = [23, 34, 77, 99, 324];

console.log("Task : Maximum number of an array is")

for (let i = 0; i < MAXarrval.length; i++) {
    const element = MAXarrval[i];
    if (element > 300) {
        console.log(element)
    }
}

// 5. 

var OddNum = [5, 10, 15, 20, 22, 23];
console.log("Task : Remove Odd number of an array is")
function ReplaceOddNum(arrr, old_value, new_value) {
    for (let i = 0; i < OddNum.length; i++) {
        // const element = OddNum[i];
        if (OddNum[i] % 2 === old_value) {
            OddNum[i]=new_value;
        }

    }
    return arrr;
}
console.log("Original Array: "+OddNum);
console.log(ReplaceOddNum(OddNum,1,0))








