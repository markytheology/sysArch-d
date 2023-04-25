import Navbar from './components/Navbar';
import FigureExample from './pages/figure';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <Navbar/>
    <FigureExample/>
    </>
  );
}

export default App;
