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
import Footer from './components/Footer';
import Job from './components/Job';
import Product from './components/Product';
import ProductState from './context/product/ProductState';
import Sellproduct from './components/Sellproduct';

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/job' element={<Job />} />
            <Route path='/product' element={<Product />} />
            <Route path='/sellproduct' element={<Sellproduct/>} />
          </Routes>
        </Router>

        <Footer/>
      </ProductState>
    </>
  );
}

export default App;
