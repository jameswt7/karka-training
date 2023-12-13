import React from 'react'
import { useLocation,useParams} from 'react-router-dom'

export const Home = ()=>{
  const {para}=useParams;
  const loc=useLocation();
  console.log(loc);
  return(
    <div>
      <p>hi my book is no {para} </p>
      <h2>{loc.pathname}</h2>
    </div>
  )
}

// function Home() {

//   const buttonfunction = () => {
//     console.log("hi")
//   }

//   return (
//     <div>
//       <div>Home</div>
//       <button onClick={buttonfunction}>HI
//       </button>
//     </div>
//   )
// }
// export default Home
