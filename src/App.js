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
import CartState from './context/product/CartState';
import Sellproduct from './components/Sellproduct';
import Productdetail from './components/Productdetail';
import Alert from './components/Alert';
import { useState } from 'react';
import JobState from './context/product/JobState';
import Jobdetail from './components/Jobdetail';
import Chatbot from './components/Chatbot';
import Cart from './components/Cart';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress] = useState(0)
  
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type, messageType) => {
    setAlert(
      {
        message: message,
        type: type,
        mssgType: messageType
      }
    )

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  return (
    <>
      <ProductState>
        <JobState>
          <CartState>
          <Router>
            <Navbar/>
              <LoadingBar
                color='#f11946'
                progress={progress}
              />
            <Alert alert={alert} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login progress={progress} setProgress={setProgress} showAlert={showAlert} />} />
              <Route path='/signup' element={<Signup showAlert={showAlert} />} />
              <Route path='/job' element={<Job showAlert={showAlert} />} />
              <Route path='/product' element={<Product showAlert={showAlert} />} />
              <Route path='/sellproduct' element={<Sellproduct showAlert={showAlert} />} />
              <Route path='/productdetail/:id' element={<Productdetail />} />
              <Route path='/jobdetail/:id' element={<Jobdetail />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Chatbot />
          </Router>

          <Footer />
          </CartState>
        </JobState>
      </ProductState>
    </>
  );
}

export default App;
