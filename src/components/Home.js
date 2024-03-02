import React, { useState } from "react";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-8xl font-kalina font-bold flex justify-center text-center pt-80 px-10 dark:text-soft-white">
          {" "}
          Full Stack Engineer. Training enthusiast. Lifelong learner.
        </h1>
        <p className="text-2xl flex justify-center text-center pt-10 px-56 font-quicksand font-medium dark:text-soft-white">
          After five years of working in policy operations and learning &
          development, I am on a journey to become a full-time Software
          Developer. Welcome to my portfolio.
        </p>
      </div>
    </div>
  );
}

export default Home;
