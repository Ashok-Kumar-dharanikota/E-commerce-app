import NavBar from './containers/NavBar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Support from './pages/Support/Support';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import { homeContext } from './context/HomeContext';
import HomeData from './data/data';
import './App.css'

function App() {

  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<homeContext.Provider value={HomeData}><Home /></homeContext.Provider>} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </>
  )
}

export default App;
