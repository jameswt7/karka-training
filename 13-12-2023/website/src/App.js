import "./App.css";
import React from "react";
import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom";
import {Home} from "./Home";
import {State} from "./State";


function App() {
  return (
    <div className="container">
      {/* <Router>
      <nav>
        <ul>
          <Link to="/Home/1" class="list"> Home 1 </Link>
          <Link to="/Home/2" class="list"> Home 2 </Link>
          <Link to="/Home/3" class="list"> Home 3 </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      {/* <Routes>
        <Route path="/Home/:para" element={<Home />} />
       
      
      </Routes>
      </Router> */} 
    <State/>

    </div>
  );
}

export default App;
