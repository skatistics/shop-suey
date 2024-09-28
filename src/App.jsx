import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DarkModeToggle from "./components/DarkModeToggle";
import LoginSignupModal from "./components/modals/LoginSignupModal";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import TempPage from "./components/TempPage";
import BackToTopButton from "./components/BackToTopButton";
import CartList from "./components/modals/CartList";
import { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext([]);

function App() {
  const [cartlist, setCartlist] = useState([]);

  function addToCart(product) {
    const tempcart = [...cartlist];
    tempcart.push(product);
    setCartlist(tempcart);
  }

  return (
    <BrowserRouter>
      <ShopContext.Provider value={{ cartlist, addToCart }}>
        <div className="min-h-dvh bg-ct-white-FEFCFF dark:bg-ct-black-19191A text-ct-black-19191A dark:text-ct-white-FEFCFF">
          <NavBar />
          <CartList />
          <LoginSignupModal />
          <DarkModeToggle />
          <BackToTopButton />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<TempPage />} />
            <Route path="/products/:productId/" element={<ProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ShopContext.Provider>
    </BrowserRouter>
  );
}

export default App;
