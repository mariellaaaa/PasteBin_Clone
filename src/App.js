import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { Auth } from './components/User.js/Auth';
import React, { useState } from 'react';
import Cookies from "universal-cookie";
import { SearchPaste } from './components/Paste/SearchPaste';
import { CreatePaste } from './components/Paste/CreatePaste';
import { SignOut } from './components/User/SignOut';
import ViewPaste from './components/Paste/ViewPaste';
import Home from './components/Home';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';


const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return (
      <div> 
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  } 

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create' element={<CreatePaste />} />
          <Route path='/search' element={<SearchPaste />} />
          <Route path='/signout' element={<SignOut isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path='/view/:id' element={<ViewPaste />} />
        </Routes>
      </div>
    </>
  );
    
}

export default App;
