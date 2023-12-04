
// - jquery pgm 1 :

// $(document).ready(function(){
//     $("#btnhide").click(function(){
//         $("#para1").hide()
//     })
//     $("#btnshow").click(function(){
//     $("#para1").show()
//     })
// })

//-------------------------------------------------------------------------------------------------------------
// Event for Jquery : double click event
// - jquery pgm 2 :

// $(document).ready(function(){
//     $("#btnhide").dblclick(function(){
//         $("#para1").hide()
//     })
//     $("#btnshow").click(function(){
//             $("#para1").show()
//             })
// })
// //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 2 : multiple inside in the Jquery css , animation , events is called as Chaining 
// $(document).ready(function () {
//     $("#btnenter").mouseenter(function () {
//         $("#para1").css({"background-color": "yellow", "font-size": "200%"});
//         $("#para2").css("background-color", "red");   // animation 
//         $("#para2").slideUp(3000).slideDown(3000) // animation 3000 miliseconds
//         alert("You entered !");
//     })
//     $("#btnleave").mouseleave(function () {
//         $("#para1").css({"background-color": "green", "font-size": "200%"});
//         alert("Bye! You now leave!");
//     })
//     $("#btnup").mouseup(function () {
//         $("#para1").css({"background-color": "red", "font-size": "200%"});
//     })
//     $("#btnhold").mousehold(function () {
//         $("#para1").css({"background-color": "blue", "font-size": "200%"});
//     })
// })

// //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 3 :
// // show call slow
// $(document).ready(function () {
//     $("#btncall").click(function () {
//         $("#para1").hide("slow", function (){  // call back function
//             alert("You hide!")})
        
// })
// })
// // hide 
// $(document).ready(function () {
//     $("#btnhide").click(function () {
//         $("#para1").hide();
//             alert("You hide!");      
// })
// })

// //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 4 :

