import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import { AuthContext } from "./context/authContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";

function App() {
  const { authUser } = useContext(AuthContext);
  console.log("authuser=", authUser)
  return (
    <div className='p-4 h bg-white'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;