import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; // Adjust the path as necessary
import Footer from './Components/Footer/Footer';
import banner_homePage from './Components/Assets/banner_homePage.png'; // Adjust the import path
import Product from './Pages/Product';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/jewelry' element={<ShopCategory category="jewelry" banner_homePage={banner_homePage} />} />
          <Route path='/guitars' element={<ShopCategory category="guitars" banner_homePage={banner_homePage} />} />
          <Route path='/equipment' element={<ShopCategory category="equipment" banner_homePage={banner_homePage} />} />
          <Route path=":/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
         
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
