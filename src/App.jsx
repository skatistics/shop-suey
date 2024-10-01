import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginSignupModal from "./components/modals/LoginSignupModal";
import CartListModal from "./components/modals/CartListModal";
import FloatingDarkModeToggle from "./components/floating/FloatingDarkModeToggle";
import FloatingCartList from "./components/floating/FloatingCartList";
import BackToTopButton from "./components/floating/BackToTopButton";
import CartContextProvider from "./components/contexts/CartContextProvider";
import SystemPreferencesContextProvider from "./components/contexts/SystemPreferencesContextProvider";
import NavBar from "./components/NavBar";
import CheckOutPage from "./pages/CheckOutPage";
import SearchResultsModal from "./components/modals/SearchResultsModal";
import ProductContextProvider from "./components/contexts/ProductContextProvider";

function App() {
  return (
    <BrowserRouter>
      <SystemPreferencesContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <div className="min-h-dvh w-full bg-[#d5dad6] dark:bg-[#0b0d0c]">
              <NavBar />
              <SearchResultsModal />
              <CartListModal />
              <LoginSignupModal />
              <FloatingDarkModeToggle />
              <BackToTopButton />
              <FloatingCartList />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/:productId/" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </CartContextProvider>
        </ProductContextProvider>
      </SystemPreferencesContextProvider>
    </BrowserRouter>
  );
}

export default App;
