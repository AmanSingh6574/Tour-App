import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import SignUp from "./Components/SignUp";


export default function App() {
  return (

     <div>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/Contact" element={<Contact/>} ></Route>
        <Route path="/Service" element={<Service/>} ></Route>
        <Route path="/Signup" element={<SignUp/>} ></Route>
      </Routes>

      </div>

  );
}


