import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DarkModeToggle from "./components/DarkModeToggle";
import LoginSignupModal from "./components/login/LoginSignupModal";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/temp" element={<TempPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
