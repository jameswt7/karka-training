import React from 'react'

function Home() {
  const buttonfunction = () => {
    console.log("hi")
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={buttonfunction}>HI
      </button>
    </div>
  )
}
export default Home
