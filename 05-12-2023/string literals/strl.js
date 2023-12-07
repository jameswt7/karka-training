// let firstName = "John";
// let lastName = "Doe";

// let text = `Welcome ${firstName}, ${lastName}!`;

// document.getElementById("demo").innerHTML = text;
// </script>
// let sum = (a, b) => {  // the curly brace opens a multiline function
//     let result = a + b;
//     return result; // if we use curly braces, then we need an explicit "return"
//   };

//   alert( sum(1, 2) ); // 3
// )
// //----------------------------   Strings Literals and StriNgs Interpolation  ----------------------------------------------------------------

$(document).ready(function () {
  $("#btnsubmit").click(function even() {
    let firstName = "James";
    let lastName = "watt";
    let age = 40;
    let address = "vetturnimadam, Nagercoil";
    let text = `Welcome ${firstName}, ${lastName}! ,age is ${age} ,place is ${address}`;
    $("#para1").text(text);
    //document.getElementById("para1").innerHTML = text;
    //alert();
    //console.log(b)
  });
});
// //----------------------------   Arrow Functions  ------------------------
$(document).ready(function () {
  $("#btncalcute").click(function even() {
    let arithematicfunc = (a, b) => {
      // the curly brace opens a multiline function // Named function
      let add = a + b;
      let sub = a - b;
      let mul = a * b;
      let div = a / b;
      let txtoutput = `the Arithematic Value add is ${add}, sub is ${sub} , mul is ${mul} , div is ${div}`;
      return txtoutput; // if we use curly braces, then we need an explicit "return"
    };

    $("#para2").text(arithematicfunc(1, 2));
    //document.getElementById("para2").innerHTML = arithematicfunc(1, 2);
  });
});

// //-------------------------------------- Spread Operator ---------------------------------------------------
$(document).ready(function () {
  $("#btnspreadopt").click(function even() {
    const myVehicle = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
    };

    const updateMyVehicle = {
      type: "car",
      year: 2021,
      color: "yellow",
    };

    const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

    // //Check the result object in the console:
    console.log(myUpdatedVehicle);

  });
});

// <script>
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

// document.write(numbersCombined);
// </script>
//output = 1,2,3,4,5,6

// //--------------------------------------Array Reducer ---------------------------------------------------
$(document).ready(function () {
  $("#btnspreadopt").click(function myFunc() {
    const numbers = [[175, 50, 25], [17, 5, 2], [15, 5, 5]];
    document.getElementById("para4").innerHTML = numbers.concat();
    return;
  });
});

/* <script>
const numbers = [175, 50, 25];
document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
</script> output*/
// ----------- 3 Array Reducer Format ----------------------------
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(numbers);
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
// //--------------------------------------Object Map in JS -------------------------------------------------

// const fruits = new Map([
//   ["app",500],["ban",300],["ora",200]]);
//   console.log(fruits.get("app"))  
//   console.log(fruits.set("app",200))
//------------------------------------------------------------------------------------------------------------
// const people = [{ name: "ajay", age: 22 },
// { name: "mahathi", age: 17 },
// { name: "jemil", age: 23 }]
// const peopleMapping = people.map(person => ({ ...person, isAdult: person.age >= 18 }))
// console.log(peopleMapping)
//-----------------------------------------------------------------------------------------------------------------------------
//The loadTable function loops through the items of the returned array and create a <tr> with each field value inside a <td>. 
// $("td.sno").each(function(index,element){  $(element).text(index + 1); });  // Auto 
//------------------------------------------------------------------------------------------------------------

const students = [
  { name: "manish", age: 22, place: "k" },
  { name: "ajay", age: 22, place: "tk" },
  { name: "jemil", age: 23, place: "kkl" },
  { name: "james", age: 25, place: "ngl" },
  { name: "mahathi", age: 17, place: "tpn" },
  { name: "arun", age: 25, place: "md" },
  { name: "arun", age: 25, place: "md" },
  { name: "arun", age: 25, place: "md" },
  { name: "mathan", age: 24, place: "tky" }]
// 
// 
loadTable('data-table', ['name', 'age', 'place'], students);
function loadTable(tableId, field, data) {
  //$('#' + tableId).empty(); //not really necessary
  var rows = '';
  $.each(data, function (index, item) {
    var row = '<tr>';
    $.each(field, function (index, field) {
      row += '<td>' + item[field + ''] + '</td>';
    });
    rows += row + '<tr>';
  });
  $('#' + tableId).html(rows);
}
//------------------------------------------------------------------------------------------------------------
