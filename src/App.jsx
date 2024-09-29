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

import DarkModeContextProvider from "./contexts/DarkModeContextProvider";
import FloatingDarkModeToggle from "./components/FloatingDarkModeToggle";

import FloatingCartList from "./components/FloatingCartList";

import CartContextProvider from "./components/contexts/CartContextProvider";
import FloatingCartList from "./components/FloatingCartList";

function App() {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <CartContextProvider>
          <div className="min-h-dvh bg-[#d5dad6] dark:bg-[#0b0d0c]">
            <NavBar />
            <CartList />
            <LoginSignupModal />
            <FloatingDarkModeToggle />
            <BackToTopButton />
            <FloatingCartList />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<TempPage />} />
              <Route path="/products/:productId/" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </CartContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
}

export default App;
