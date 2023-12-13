import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

const App1 = () => {
  return (
    <router>
      <div>

        <nav>
          <link to="/">Home</link>
          <link to="./Pages/Contact.js"></link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    </router>
)}
// const Header = () => {
//   return (
//     <>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//     </>
//   );
// }

// const root1 = ReactDOM.createRoot(document.getElementById('root'));
// root1.render(<Header />);
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// Just import Route from react-router

// import { browserRouter, Router, Route } from 'react-router';