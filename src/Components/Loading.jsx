import React from "react";
import Video from "./food.mp4";

const LoadingComponent = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        style={{ width: "100%", height: "50%" ,borderRadius: "10px" }}
      >
        <source src={Video} type="video/mp4" />
      
      </video>

      {/* Loading Spinners */}
      <div className="absolute inset-0 flex justify-center items-center z-20 mb-12">
        <div className="text-center">
          <span className="loading loading-spinner text-4xl text-red-500"></span>
          <span className="loading loading-spinner text-5xl text-blue-500"></span>
          <span className="loading loading-spinner text-6xl text-green-500"></span>
          <span className="loading loading-spinner text-7xl text-yellow-500"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
