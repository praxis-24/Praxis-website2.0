import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold z-20">
          "Image here"
        </a>
        <div className="flex items-center gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md">
            Inquire now!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
