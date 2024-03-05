import {Link} from "react-router-dom";

function Blog() {
    return (
      <div className="grid grid-cols-3 mt-10 dark:text-white">
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div>
            <Link to="https://medium.com/@hollyawheeler96/a-beginners-guide-to-defining-an-mvp-223d424eb602">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                A Beginner's Guide to Defining an MVP
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                4 min read
              </p>
              <div className="flex flex-row items-center mt-5">
                <div className="bg-glaucous rounded-md p-1 font-quicksand text-white">
                  <p>MVPs</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Guidance</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div>
            <Link to="https://medium.com/@hollyawheeler96/building-apis-and-restful-apis-in-flask-98b894507f76">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                Building APIs using Flask and Flask-RESTful
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                9 min read
              </p>
              <div className="flex flex-row items-center mt-5">
                <div className="bg-glaucous rounded-md p-1 font-quicksand text-white">
                  <p>Flask</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Flask RESTful</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Building RESTful APIs</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Tutorial</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div>
            <Link to="https://medium.com/@hollyawheeler96/how-making-a-choose-your-own-adventure-game-changed-my-perspective-on-python-717399c787cf">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                How making a choose-your-own-adventure game changed my
                perspective on Python
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                3 min read
              </p>
              <div className="flex flex-row items-center mt-5">
                <div className="bg-glaucous rounded-md p-1 font-quicksand text-white">
                  <p>Python</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Personal Reflection</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div>
            <Link to="https://medium.com/@hollyawheeler96/react-router-for-absolute-beginners-047e4b6c5685">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                React Router for Absolute Beginners
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                6 min read
              </p>
              <div className="flex flex-row items-center mt-5">
                <div className="bg-glaucous rounded-md p-1 font-quicksand text-white">
                  <p>React.js</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>React Router</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Tutorial</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div>
            <Link to="https://medium.com/@hollyawheeler96/but-where-do-i-even-start-af72f5cdb02d">
              <h1 className="text-3xl font-bold font-yeseva mt-5">
                "But where do I even start?"
              </h1>
              <p className="font-medium text-xl mt-5 font-quicksand">
                5 min read
              </p>
              <div className="flex items-center mt-5">
                <div className="bg-glaucous rounded-md p-1 font-quicksand text-white">
                  <p>Problem Solving</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Guidance</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Blog;