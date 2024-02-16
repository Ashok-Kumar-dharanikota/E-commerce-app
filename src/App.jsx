import NavBar from './containers/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Mens from './pages/Mens/Mens';
import Womens from './pages/Womens/Womens';
import Kids from './pages/Kids/Kids';
import { homeContext } from './context/HomeContext';
import HomeData from './data/data';
import './App.css'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';

function App() {

  return (

    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<homeContext.Provider value={HomeData}><Home /></homeContext.Provider>} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<Product />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App;
