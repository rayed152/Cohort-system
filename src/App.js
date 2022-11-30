import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Teacher from "./dashboard/Teacher";
import Student from "./dashboard/Student";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<  Home/>}/>
          <Route path="/teacher" element={< Teacher/>}/>
          <Route path="/Student" element={<  Student/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
