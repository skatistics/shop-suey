import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginSignupModal from "./components/modals/LoginSignupModal";
import FloatingDarkModeToggle from "./components/floating/FloatingDarkModeToggle";
import BackToTopButton from "./components/floating/BackToTopButton";
import NavBar from "./components/navigation/NavBar";
import CheckOutPage from "./pages/CheckOutPage";
import SystemPreferencesContextProvider from "./components/contexts/SystemPreferencesContextProvider";
import DarkModeContextProvider from "./components/contexts/DarkModeContextProvider";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider";
import SearchContextProvider from "./components/contexts/SearchContextProvider";

function App() {
  return (
    <BrowserRouter>
      <SystemPreferencesContextProvider>
        <DarkModeContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <SearchContextProvider>
                <div className="min-h-dvh w-full  bg-ct-D9E8D9 transition-all duration-300 dark:bg-ct-0B0D0C">
                  <NavBar />
                  <LoginSignupModal />
                  <BackToTopButton />
                  <FloatingDarkModeToggle />
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route
                      path="/products/:productId/"
                      element={<ProductPage />}
                    />
                    <Route path="/checkout" element={<CheckOutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </div>
              </SearchContextProvider>
            </CartContextProvider>
          </ProductContextProvider>
        </DarkModeContextProvider>
      </SystemPreferencesContextProvider>
    </BrowserRouter>
  );
}

export default App;
