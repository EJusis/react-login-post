import './App.css';
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import mainContext from "./context/mainContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/Create post";
import StartPage from "./pages/StartPage";


function App() {
    const [getView, setView] = useState('')
    const [getView2, setView2] = useState('')
    const [getNewUser, setNewUser] = useState([])
    const [getCurrentUser,setCurrentUser] = useState();
    const [getPost, setPost] = useState([])
    console.log(getNewUser)
    console.log(getCurrentUser)



  return (
    <div className="App">


        <mainContext.Provider value={{getView, setView, getNewUser, setNewUser, getCurrentUser, setCurrentUser ,getPost, setPost, getView2, setView2}}>
            <BrowserRouter>
            <Navbar/>


                <Routes>

                    <Route path='/' element={<StartPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/createPost' element={<CreatePost/>}/>

                </Routes>

            </BrowserRouter>



        </mainContext.Provider>


    </div>
  );
}

export default App;
