import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';



function App() {

  return (
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
