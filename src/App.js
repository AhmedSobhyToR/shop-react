import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'
function App() {
  return (
    <>
    <BrowserRouter basename='/shop-react'>
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/shirts' element={<ShopCategory banner={men_banner} category="shirts"/>}/>
      <Route path='/jeans' element={<ShopCategory banner= {women_banner} category="jeans"/>}/>
      <Route path='/shoes' element={<ShopCategory banner={kids_banner} category="shoes"/>}/>
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
