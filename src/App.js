import Navbar from './components/Navbar';
import FigureExample from './pages/figure';
import LoginPage from './components/Login';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignupPage from './components/Signup';


function App() {
  return (
    <>
    <Navbar>
      <LoginPage></LoginPage>
      <SignupPage></SignupPage>
    </Navbar>
    <FigureExample/>
    </>
  );
}

export default App;
