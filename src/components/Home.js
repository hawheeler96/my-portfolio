import React, { useState } from "react";
import {motion} from "framer-motion";
function Home() {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-midnight">
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-5xl xs:text-5xl sm:text-6xl md:text-8xl font-yeseva flex justify-center text-center  px-10 dark:text-soft-white"
        >
          {" "}
          Full Stack Engineer. Training enthusiast. Lifelong learner.
        </motion.h1>
        <motion.p
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-base md:max-3xl:text-2xl flex justify-center text-center pt-5 xs:max-3xl:pt-10 px-20 xl:max-3xl:px-80 font-quicksand font-medium dark:text-soft-white"
        >
          After five years of working in policy operations and learning &
          development, I am on a journey to become a full-time software
          engineer. Welcome to my portfolio!
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
