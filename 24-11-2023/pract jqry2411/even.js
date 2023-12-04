var pdata = JSON.parse($("#para1").text()); // paragraph tag string than iruku so convert to number using JSON .parse
var b=[]
$(document).ready(function (){  
    $("#btnsubmit").click(function even() 
    {    
       
        for ( i = 0; i < pdata.length; i++) 
        {
            if (pdata[i] % 2 == 0) 
            {
                   b.push(pdata[i])
                   $("#para2").text(b)
                   //alert();
                 //alert(pdata[i])   
            }     
         //console.log(b)   
        }
    })
}
)
// //-------------------------------------------------------------------------------------------------------------