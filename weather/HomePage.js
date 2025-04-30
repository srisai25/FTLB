import React from "react";
import Weather from "./Weather";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <Weather />
    </div>
  );
};

export default HomePage;
