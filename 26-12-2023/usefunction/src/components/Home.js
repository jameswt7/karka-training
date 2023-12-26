import React from 'react';


export default function Home({ count, onClick }) 
{
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }
 


