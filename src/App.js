import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
// import Footer from './components/Footer';
import Job from './components/Job';
import Product from './components/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/job' element={<Job/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </Router>

      {/* <Footer/> */}
    </>
  );
}

export default App;
