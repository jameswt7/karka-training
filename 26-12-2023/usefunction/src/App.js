import React,{ useState } from 'react';
import Home from './components/Home';
import Videoplay from './components/Videoplay';


export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <Home count={count} onClick={handleClick} />
      <Home count={count} onClick={handleClick} />
      <Videoplay />
    </div>
  );
}

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }
