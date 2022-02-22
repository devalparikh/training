import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import About from "./containers/About";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div data-theme={darkMode ? "myDark" : "myLight"} className="bg-base-100">
      <NavBar darkMode={darkMode} setDarkMode={(value) => setDarkMode(value)} />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
