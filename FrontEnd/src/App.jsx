import { Toaster } from 'react-hot-toast';
import './App.css';
import Signup from './components/Signup';
import Course from './courses/Courses';
import Home from './home/Home';
import {Navigate , Route, Routes} from "react-router-dom"
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser? <Course />: <Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
