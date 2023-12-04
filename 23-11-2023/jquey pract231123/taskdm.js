// 4 methods in Jquery ::
// Get, Set, Add & Remove used to text , html, val
// text => only the text values
// 1- Get Method

// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("p").text()) // tag selector directl using =>"p"
//             })
// })
// // Html => Html Tags
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("p").html()) // tag selector directl using =>"p"
//             })
// })
// // val => only get the input values
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("#input").val()) // tag selector directl using =>"p"
//             })
// })
// //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 2 :
// 2- Set Method ::::
// text => here set the manual text values
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("p").text('Kumar')) 
//             })
// })
// // Html => Html Tags
// $(document).ready(function(){
//         $("#btnsubmit").click(function(){
//                     console.log($("#para1").html('<h1>Mathan</h1>'))
//                 })
//     })
// // val => only get the input values
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("#input").val('james')) // tag selector directl using =>"p"
//             })
// })
// //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 3 :
// 3- Add Method :::: // two types 1, append and 2, prepend
////(i) append => add element at end
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("#para1").append('james')) // tag selector directl using =>"p"
//             })
// })
// //ii) prepend => add element at start
// $(document).ready(function(){
//     $("#btnsubmit").click(function(){
//                 console.log($("#para1").prepend('james')) 
//             })
// })
// // //-------------------------------------------------------------------------------------------------------------
// - jquery pgm 4 :
// 4- Remove Method ::::
// $(document).ready(function () {
//     $("#btnsubmit").click(function () {
//         console.log($("#para1").remove())
//     })
// })  
// next time hide above remove method after call add class output visible in console window
// Add Class ::
// $(document).ready(function () {
//     $("#btnsubmit").click(function () {
//         console.log($("#para1").addClass('Kumar'))
//     })
// })
// // //-------------------------------------------------------------------------------------------------------------
// pgm:: for filter even number
var arr = [4, 5, 7, 8, 14, 45, 76];
var b=[]
$(document).ready(function (){  
    $("#btnsubmit").click(function even() 
    {    
         
        for (var i = 0; i < arr.length; i++) 
        {
            if (arr[i] % 2 == 0) 
            {
                b.push(arr[i])   // push method

                $("#para2").html(b);                
                //alert(arr[i])
            }     
           // console.log(b)
        }
    })
}
)
// // //-------------------------------------------------------------------------------------------------------------


