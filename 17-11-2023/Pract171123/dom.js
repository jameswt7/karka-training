
// function contain() {
//     let container = document.getElementsByClassName("main")
//     console.log(container)
//     let para = document.getElementById("para")
//     console.log(para)
//     let span = document.getElementsByTagName("span")
//     console.log(span)
// }
// contain()
// -----------------------------------------------------------------------------------

// function greeting() {
//     let greet = document.getElementById("greetings")
//     //console.log(greet)
//     greet.innerHTML = "hello"
// }
//greeting() - not apply automatic
// -----------------------------------------------------------------------------------

function call()
{
    let newDiv = document.createElement("li")
    newDiv.textContent="new one"
    let container=document.getElementById("container")
    container.appendChild(newDiv)

}
//call()
function remove()
{
 
    let cont=document.getElementById("container")
    cont.removeChild(cont.firstElementChild)
    //cont.remove()   -- deleted whole element

}
// -----------------------------------------------------------------------------------

function text()
{
    let input = document.getElementById("input").value;
    console.log(input)
    // let txt = document.getElementById("btn")
    // console.log(txt)
}

function formdata(e)
{
    e.preventDefault();
    let textuser =document.getElementById("txt").value;    //txt id for username must be use .value to get text value
    console.log(textuser)
    let passworduser =document.getElementById("pwd").value;    //pwd id for password must be use .value to get text value
    console.log(passworduser)

}
formdata()