function over()
{
    //e.preventDefault();
    let container =document.getElementById("cont")
    container.style.backgroundColor="green"
}
function leave()
{
    //e.preventDefault();
    let container =document.getElementById("cont")
    container.style.backgroundColor="red"
}

// function handlechange()
// {

//     let listitem = document.getElementById("sltlistitem").value;
//     let parag = document.getElementById("para")
//     parag.innerHTML= listitem
// }

let listitem = document.getElementById("sltlistitem")
listitem.addEventListener("change",handlechange)

function handlechange()
{
    let listitem = document.getElementById("sltlistitem").value;
    let parag = document.getElementById("para")
    parag.innerHTML= listitem
}