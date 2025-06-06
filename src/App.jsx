import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import './css/App.css'
import { MovieProvider } from './contexts/MovieContext';

const App = () => {

    return (
        <>
            <MovieProvider>
                <NavBar />
                <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Favorite" element={<Favorite/>}/>
                </Routes>    
            </main> 
            </MovieProvider>
                       
        </>
    )
}


export default App
