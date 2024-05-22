
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import  Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; // Adjust the path as necessary


function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/jewelry' element={<ShopCategory category="jewerly"/>}/>
          <Route path='/guitars' element={<ShopCategory category="guitars"/>}/>
          <Route path='/equiptment' element={<ShopCategory category="equiptment"/>}/>
         
      
      
      <Route >
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
