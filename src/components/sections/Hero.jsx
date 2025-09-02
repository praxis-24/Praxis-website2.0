import React from "react";
import HeroImg from "../../assets/heroImage.png";

const Heropage = () => {
  return (
    <div id="home" className="min-h-screen flex items-center bg-base-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-primary uppercase font-bold tracking-wide mb-4">
            Transforming Ideas into Reality
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  text-gray-600">
            Building Digital Solutions for Tomorrow
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We create innovative digital solutions that help businesses thrive
            in the modern world. Our expertise spans web development, mobile
            apps, and digital transformation.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <div className="bg-base-200 w-full aspect-square rounded-xl shadow-none">
            <div className="w-full h-full flex items-center justify-center text-base-content/50">
              <img
                src={HeroImg}
                alt="Hero"
                className="max-w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
