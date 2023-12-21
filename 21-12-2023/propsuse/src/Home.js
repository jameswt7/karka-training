
import React from "react";
import Button from './Button'

function handleClick() 
{
    alert("Clicked")
    return(
        <>
          

            <Button Cliked={handleClick} />
            
        </>
      
        );
}
export default handleClick();