import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginSignupModal from "./components/modals/LoginSignupModal";
import FloatingDarkModeToggle from "./components/floating/FloatingDarkModeToggle";
import BackToTopButton from "./components/floating/BackToTopButton";
import CartContextProvider from "./components/contexts/CartContextProvider";
import SystemPreferencesContextProvider from "./components/contexts/SystemPreferencesContextProvider";
import NavBar from "./components/NavBar";
import CheckOutPage from "./pages/CheckOutPage";
import SearchResultsModal from "./components/modals/SearchResultsModal";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import PaymentOptionsModal from "./components/modals/PaymentOptionsModal";

function App() {
  return (
    <BrowserRouter>
      <SystemPreferencesContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <div className="min-h-dvh w-full  bg-ct-D9E8D9 transition-all duration-300 dark:bg-ct-0B0D0C">
              <NavBar />
              <SearchResultsModal />
              <LoginSignupModal />
              <PaymentOptionsModal />
              <BackToTopButton />
              <FloatingDarkModeToggle />
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
