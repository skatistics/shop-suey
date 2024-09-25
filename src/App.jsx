import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DarkModeToggle from "./components/DarkModeToggle";
import LoginSignupModal from "./components/login/LoginSignupModal";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh bg-ct-light-tanly-DADED4 dark:bg-ct-light-browngrey-3C403D">
        <NavBar />
        <LoginSignupModal />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
