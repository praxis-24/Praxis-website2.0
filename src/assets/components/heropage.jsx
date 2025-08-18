import React from "react";

const Heropage = () => {
  return (
    <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
        <div className="text-center md:text-left space-y-6">
          <p className="text-red-600 uppercase font-semi-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className="text-gray-900 text-5xl font-semi-bold lg:text-6xl !leading-tight">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet facilisis urna. Praesent consectetur, nisl sit amet consequat
            vulputate, erat odio suscipit felis, sed varius lorem ipsum sed leo.
          </p>
          <button>Email Us</button>
          <button>Get Connected</button>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
