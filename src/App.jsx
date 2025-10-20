import './App.css'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar';
import Hero from './pages/Users/HomePage/Hero/Hero'
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/Admin/HomePage/MainPage/MainPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar />
            <Hero />
            </>
          }
        />

        <Route
          path="/admin/home"
          element={
            <>
            <Navbar />
            <MainPage />
            </>
          }
        />
        
      </Routes>
    </div>
  )
}

export default App
