var mynodelist = document.getElementsByTagName("li");
var i;

for(i=0;i<mynodelist.length;i++)
{
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className="close";
    button.appendChild(txt);
    mynodelist[i].appendChild(button);
}


var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++)
{
    close[i].onclick = function()
    {
        var div = this.parentElement;
        div.style.display="none";
    }
}

var list =document.querySelector('ul');
list.addEventListener('click',function(ev)
{
    if(ev.target.tagName === 'li')
    {
        ev.target.classList.toggle('checked')
    }
},false);

function newElementAdd()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("txtitleId").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '')
    {
        alert("You must write something");
    }
    else
    {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("txtitleId").value="";

    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7")
    button.className ="close";
    button.appendChild(txt);
    li.appendChild(button);

    for(i=0;i<close.length;i++)
    {
        close[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display="none";
        }
    }
}
