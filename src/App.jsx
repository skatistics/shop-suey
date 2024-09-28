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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh bg-ct-white-FEFCFF dark:bg-ct-black-19191A text-ct-black-19191A dark:text-ct-white-FEFCFF">
        <NavBar />
        <LoginSignupModal />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/temp" element={<TempPage />} />
          <Route path="/products/:productId/" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
