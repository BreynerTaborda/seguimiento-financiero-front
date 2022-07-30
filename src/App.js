import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePublico from './pages/HomePublico';
import Login from './pages/login/Login';
function App() {
  return (
    <HomePublico></HomePublico>
  );
}

export default App;
