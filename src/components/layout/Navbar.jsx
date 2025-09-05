import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollUtils";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Navlogo from "../../assets/logoImage.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();
  const showGetStarted = scrollPosition > window.innerHeight * 0.7;

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setIsDarkMode(initialTheme === 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => scrollToSection(sectionId), 100);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-sm shadow-md border-b border-base-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            <img
              src={Navlogo}
              alt="Paxis Logo"
              className="w-16 h-auto mx-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-base-content/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-base-content/80 hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="text-base-content/80 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-base-content/80 hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle Switch with Icons */}
            <label className="flex items-center cursor-pointer space-x-2">
              <svg 
                className="w-4 h-4 text-base-content/60" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={toggleTheme}
                className="toggle toggle-md toggle-primary"
              />
              <svg 
                className="w-4 h-4 text-base-content/60" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </label>

            <div
              className={`transition-opacity duration-300 ${
                showGetStarted ? "opacity-100" : "opacity-0"
              }`}
            >
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-base-content"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-base-100/80 backdrop-blur-sm shadow-lg border-b border-base-300 transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-base-content/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="block text-base-content/80 hover:text-primary transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="block text-base-content/80 hover:text-primary transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block text-base-content/80 hover:text-primary transition-colors font-medium"
          >
            Contact
          </a>
          
          {/* Mobile Dark Mode Toggle */}
          <div className="flex items-center justify-between py-2">
            <span className="text-base-content/80 font-medium">Dark Mode</span>
            <label className="flex items-center cursor-pointer space-x-2">
              <svg 
                className="w-4 h-4 text-base-content/60" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={toggleTheme}
                className="toggle toggle-md toggle-primary"
              />
              <svg 
                className="w-4 h-4 text-base-content/60" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </label>
          </div>
          
          <button
            className={`btn btn-primary w-full transition-opacity duration-300 ${
              showGetStarted ? "opacity-100" : "opacity-0"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
