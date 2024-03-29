import {Link} from "react-router-dom";
import { motion } from "framer-motion";

function Blog() {
    return (
      <div className="grid pt-10 pb-20 lg:max-2xl:grid-cols-2 2xl:max-3xl:grid-cols-3 dark:text-white dark:bg-midnight">
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeInOut",
              delay: 0,
            },
          }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0 }}
          whileHover={{
            scale: 1.1,
            translateY: -1,
            transition: { duration: 0.1 },
          }}
          className="border shadow-xl shadow-xanthous bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white"
        >
          <div>
            <Link to="https://medium.com/@hollyawheeler96/a-beginners-guide-to-defining-an-mvp-223d424eb602">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                A Beginner's Guide to Defining an MVP
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                A simplified guide to defining an MVP based on my project
                experience
              </p>
              <p className="font-medium italic text-xl mt-5 font-quicksand">
                4 min read
              </p>
              <div className="hidden sm:flex flex-row items-center mt-5">
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand">
                  <p>MVPs</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Guidance</p>
                </div>
              </div>
              <div className="flex justify-center sm:hidden ">
                <p className="bg-xanthous font-quicksand mt-5 text-lg font-medium p-2 rounded-xl">
                  Read on Medium
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeInOut",
              delay: 0,
            },
          }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0 }}
          whileHover={{
            scale: 1.1,
            translateY: -1,
            transition: { duration: 0.1 },
          }}
          className="border shadow-xl shadow-xanthous bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white"
        >
          <div>
            <Link to="https://medium.com/@hollyawheeler96/building-apis-and-restful-apis-in-flask-98b894507f76">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                Building APIs using Flask and Flask-RESTful
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                A short tutorial on how to build a RESTful API using basic Flask
                and Flask-Restful
              </p>
              <p className="font-medium italic text-xl mt-5 font-quicksand">
                9 min read
              </p>
              <div className="hidden sm:flex flex-row items-center mt-5">
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand">
                  <p>Flask</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Flask RESTful</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Building RESTful APIs</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Tutorial</p>
                </div>
              </div>
              <div className="flex justify-center sm:hidden ">
                <p className="bg-xanthous font-quicksand mt-5 text-lg font-medium p-2 rounded-xl">
                  Read on Medium
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeInOut",
              delay: 0,
            },
          }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0 }}
          whileHover={{
            scale: 1.1,
            translateY: -1,
            transition: { duration: 0.1 },
          }}
          className="border shadow-xl shadow-xanthous bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white"
        >
          <div>
            <Link to="https://medium.com/@hollyawheeler96/how-making-a-choose-your-own-adventure-game-changed-my-perspective-on-python-717399c787cf">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                How making a choose-your-own-adventure game changed my
                perspective on Python
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                A reflection on how building a game using Python changed my
                perspective on how coding languages can be used
              </p>
              <p className="font-medium italic text-xl mt-5 font-quicksand">
                3 min read
              </p>
              <div className="hidden sm:flex flex-row items-center mt-5">
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand">
                  <p>Python</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Personal Reflection</p>
                </div>
              </div>
              <div className="flex justify-center sm:hidden ">
                <p className="bg-xanthous font-quicksand mt-5 text-lg font-medium p-2 rounded-xl">
                  Read on Medium
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeInOut",
              delay: 0,
            },
          }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0 }}
          whileHover={{
            scale: 1.1,
            translateY: -1,
            transition: { duration: 0.1 },
          }}
          className="border shadow-xl shadow-xanthous bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white"
        >
          <div>
            <Link to="https://medium.com/@hollyawheeler96/react-router-for-absolute-beginners-047e4b6c5685">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                React Router for Absolute Beginners
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                A short tutorial on using React Router v6
              </p>
              <p className="font-medium italic text-xl mt-5 font-quicksand">
                6 min read
              </p>
              <div className="hidden sm:flex flex-row items-center mt-5">
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand">
                  <p>React.js</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>React Router</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Tutorial</p>
                </div>
              </div>
              <div className="flex justify-center sm:hidden ">
                <p className="bg-xanthous font-quicksand mt-5 text-lg font-medium p-2 rounded-xl">
                  Read on Medium
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "10px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: "50%",
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: "easeInOut",
              delay: 0,
            },
          }}
          transition={{ duration: 0.25, ease: "easeInOut", delay: 0 }}
          whileHover={{
            scale: 1.1,
            translateY: -1,
            transition: { duration: 0.1 },
          }}
          className="border shadow-xl shadow-xanthous bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white"
        >
          <div>
            <Link to="https://medium.com/@hollyawheeler96/but-where-do-i-even-start-af72f5cdb02d">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                "But where do I even start?"
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                A simplified guide on conquering blank page paralysis
              </p>
              <p className="font-medium italic text-xl mt-5 font-quicksand">
                5 min read
              </p>
              <div className="hidden sm:flex items-center mt-5">
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand">
                  <p>Problem Solving</p>
                </div>
                <div className="bg-sandblast dark:bg-glaucous rounded-md p-1 font-quicksand ms-3">
                  <p>Guidance</p>
                </div>
              </div>
              <div className="flex justify-center sm:hidden ">
                <p className="bg-xanthous font-quicksand mt-5 text-lg font-medium p-2 rounded-xl">
                  Read on Medium
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    );
}

export default Blog;