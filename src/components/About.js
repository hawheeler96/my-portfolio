import hollyFillerPhoto from '../images/website seflie.png'
import { motion } from "framer-motion";

function About() {
    return (
      <div className="grid lg:grid-cols-2 font-quicksand font-medium pb-20 lg:max-3xl:p-10 text-xl dark:text-soft-white dark:bg-midnight">
        <div className="col-start-1 p-5 overflow-hidden">
          <motion.img
            src={hollyFillerPhoto}
            width={450}
            alt="a young white woman with long wavy golden-brown hair sitting in front of a computer and smiling"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="hidden lg:max-3xl:block absolute left-10 lg:left-10 xl:left-40 2xl:left-80 3xl:left-96 top-20 rounded-xl shadow-xl shadow-sandblast dark:shadow-white"
          />
        </div>
        <div className="col-start-2 p-5 overflow-hidden">
          <motion.h1
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-5xl pt-10 lg:max-3xl:pt-0 font-yeseva"
          >
            About Me
          </motion.h1>
        </div>
        <div className="col-start-2 p-5 pe-10 overflow-hidden">
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Hi there! My name is Holly Wheeler, and I am a full stack software
            engineer based in Oakland, California.
          </motion.p>
        </div>
        <div className="col-start-2 p-5 pe-10 overflow-hidden">
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            I started my career in tech a few months after graduating college in
            2018. I started as an ads analyst at MoPub, a subsidiary of Twitter
            at the time. I continued to do policy work for a few years, joining
            the Twitter side of the business in 2019. In 2021, I moved into a
            learning and development role on the policy team I had been working
            for, and found I had a passion for training. After leadership
            changed hands, I survived several rounds of layoffs, but was
            unfortunately laid off in 2023.
          </motion.p>
        </div>
        <div className="col-start-2 p-5 pe-10 overflow-hidden">
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            I took this as an opportunity to re-evaluate my career path. I liked
            training and policy, but I wasn`t sure I wanted to do them forever.
            I had worked with engineers and was constantly impressed by the
            things they could build, so I decided to try a free self-paced
            Python course. That course opened my eyes to the beauty and fun of
            coding, and I couldn`t stop there. I enrolled in a full-time
            software engineering bootcamp run by Flatiron School, where I
            learned JavaScript, React, Python, and Flask, along with HTML and
            CSS.
          </motion.p>
        </div>
        <div className="col-start-2 p-5 pe-10 overflow-hidden">
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            My time in policy and training gave me a deeper appreciation and
            consideration for the user experience. This consideration heavily
            affects the way I code – making sure things are user friendly and
            accessible is one of my top priorities whenever I start a new
            project.
          </motion.p>
        </div>
      </div>
    );
}

export default About;