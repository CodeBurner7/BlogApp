import React from 'react'
import Topbar from './components/topbar/Topbar'
// import Header from './components/header/Header'
import Home from './pages/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Logout from './components/Logout';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


const App = () => {
  const user=true;
  return (
    <>
    <Topbar/>
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/write" element={<Write/>}></Route>
  <Route path="/register" element={user? <Home/>: <Register/>}></Route>
  <Route path="/login" element={user? <Write/>: <Login/>}></Route>
  <Route path="/settings" element={user? <Settings/> :<Login/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
     </Routes>
    </>
  )
}

export default App