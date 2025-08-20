import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-primary">
            Praxis
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-neutral-content hover:text-primary transition-colors font-medium">Home</a>
            <a href="#" className="text-neutral-content hover:text-primary transition-colors font-medium">About</a>
            <a href="#" className="text-neutral-content hover:text-primary transition-colors font-medium">Services</a>
            <a href="#" className="text-neutral-content hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-neutral-content"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-black/80 backdrop-blur-sm shadow-lg transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#" className="block text-neutral-content hover:text-primary transition-colors font-medium">Home</a>
          <a href="#" className="block text-neutral-content hover:text-primary transition-colors font-medium">About</a>
          <a href="#" className="block text-neutral-content hover:text-primary transition-colors font-medium">Services</a>
          <a href="#" className="block text-neutral-content hover:text-primary transition-colors font-medium">Contact</a>
          <button className="btn btn-primary w-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;