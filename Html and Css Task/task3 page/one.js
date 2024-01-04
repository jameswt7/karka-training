var a=10;

if ( a %2 ===0) 
{
    console.log("the no is even")
} else {
    console.log("the no is odd")
}

var b=[1,2,3,4,5,6];
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    if ( element %2 ===0) 
    {
        console.log("the no is even",element)
    } else {
        console.log("the no is odd",element)
    }
        // console.log(element)
}

// function array_element_replace(arr, old_value, new_value) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === old_value) {
//         arr[i] = new_value;
//       }
//     }
//     return arr;
//   }
//   num = [1, 2, 3, 2, 2, 8, 1, 9];
//   console.log("Original Array: "+num);
//   console.log(array_element_replace(num, 2, 5));