import React, { useState } from "react";

function Home() {
  return (
    <div className="md:max-3xl:flex justify-center items-center">
      <div>
        <h1 className="text-5xl xs:text-6xl md:text-8xl font-yeseva flex justify-center text-center pt-20 xs:pt-40 sm:pt-60 md:pt-40 lg:pt-60 xl:max-3xl:pt-80 px-10 dark:text-soft-white">
          {" "}
          Full Stack Engineer. Training enthusiast. Lifelong learner.
        </h1>
        <p className="text-l md:max-3xl:text-2xl flex justify-center text-center xs:max-3xl:pt-10 px-20 xl:max-3xl:px-80 font-quicksand font-medium dark:text-soft-white">
          After five years of working in policy operations and learning &
          development, I am on a journey to become a full-time software
          engineer. Welcome to my portfolio!
        </p>
      </div>
    </div>
  );
}

export default Home;
