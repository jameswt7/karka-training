
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;