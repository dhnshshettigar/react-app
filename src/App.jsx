import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import './css/App.css'
const App = () => {
    const movieNumber = 2;

    return (
        <>
            <div>
                <NavBar />
                <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Favorite" element={<Favorite/>}/>
                </Routes>    
            </main> 
            </div>
                       
        </>
    )
}


export default App
