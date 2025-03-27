import './App.css';
import Course from './courses/Courses';
import Home from './home/Home';
import {Navigate , Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
