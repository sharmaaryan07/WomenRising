import { useState } from 'react';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
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
import JobState from './context/product/JobState';
import AdminJobState from './context/product/AdminJobState';
import BlogState from './context/product/BlogState';
import Jobdetail from './components/Jobdetail';
import Chatbot from './components/Chatbot';
import Cart from './components/Cart';
import Blogs from './components/Blogs';
import Addjob from './components/Addjob';
import Blogdetail from './components/Blogdetail';
import Addblog from './components/Addblog';
import Yourblog from './components/Yourblog';
import Applyjob from './components/Applyjob';
import Contact from './components/Contact';
import Translator from './components/Translator';
import About from './components/About';
import Admin from './components/Admin';
import Adminjob from './components/Adminjob';
import Adminjobdetail from './components/Adminjobdetail';
import Adminproductdetail from './components/Adminproductdetail';
import Adminproduct from './components/Adminproduct';
import AdminProductState from './context/product/AdminProductState';
import Adminlogin from './components/Adminlogin';


function App() {
  // useState for Loading bar
  const [progress, setProgress] = useState(0)

  // Logic For Alert start
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
    // Logic For Alert End

  };
  return (
    <>
      <ProductState>
        <JobState>
          <AdminJobState>
            <AdminProductState>
              <CartState>
                <BlogState>
                  <Router>
                    <LoadingBar
                      color='orange'
                      progress={progress}
                      waitingTime={1200}
                      loaderSpeed={1300}
                    />
                    <Alert alert={alert} />
                    <Translator />

                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/login' element={<Login setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/signup' element={<Signup setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/job' element={<Job setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/product' element={<Product showAlert={showAlert} />} />
                      <Route path='/sellproduct' element={<Sellproduct setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/productdetail/:id' element={<Productdetail setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/jobdetail/:id' element={<Jobdetail setProgress={setProgress} />} />
                      <Route path='/cart' element={<Cart />} />
                      <Route path='/blogs' element={<Blogs setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/addjob' element={<Addjob setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/blogdetail/:id' element={<Blogdetail setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/addblog' element={<Addblog setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/yourblog' element={<Yourblog />} />
                      <Route path='/apply/:id' element={<Applyjob setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/admin' element={<Admin />} />
                      <Route path='/adminlogin' element={<Adminlogin setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/adminjob' element={<Adminjob />} />
                      <Route path='/adminjobdetail/:id' element={<Adminjobdetail setProgress={setProgress} showAlert={showAlert} />} />
                      <Route path='/adminproduct' element={<Adminproduct />} />
                      <Route path='/adminproductdetail/:id' element={<Adminproductdetail setProgress={setProgress} showAlert={showAlert} />} />

                    </Routes>
                    <Chatbot />
                  </Router>
                  <Footer />
                </BlogState>
              </CartState>
            </AdminProductState>
          </AdminJobState>
        </JobState>
      </ProductState>
    </>
  );
}

export default App;
