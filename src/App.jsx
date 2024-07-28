import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Wish from "./Pages/WishList/Wish";
import Flats from "./Pages/Flats/Flats";
import SpecificFlat from "./Pages/SpecificFlat/SpecificFlat";
import About from "./Pages/AboutUs/about";
import Partner from "./Pages/PartnerWithUs/Partner";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wish />} />
            <Route path="/flats" element={<Flats />} />
            <Route path="/flats/:id" element={<SpecificFlat />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/joinus" element={<Partner />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
