import tavernPage from "../images/tavern_page.png";
import onMyPlate from "../images/on_my_plate_page.png"
import grimReapersTower from "../images/grim_reapers_tower.png"
import slayTheDay from "../images/slaytheday.png"

function Projects() {
  return (
    <div className="min-h-screen dark:bg-midnight dark:text-white">
      <div className="grid grid-cols-1 md:px-20 lg:px-40 xl:px-60 2xl:px-80 3xl:px-96">
        <h1 className="text-6xl font-yeseva text-center mt-10">
          Ongoing Projects
        </h1>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white">
          <div>
            <img
              src={tavernPage}
              alt="an image of a homepage containing 4 characters"
              className="rounded-xl object-scale-down"
            />
            <h1 className="text-3xl font-bold font-yeseva mt-5">Tavern</h1>
            <p className="font-medium text-xl mt-5 mb-7 font-quicksand">
              An online character creator for Dungeons & Dragons 5e
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/hawheeler96/tavern"
                className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
              >
                View on Github
              </a>
              <div className="hidden md:flex ms-3 p-1 justify-end">
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Flask</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>React.js</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>SQLaclhemy</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>TailwindCSS</p>
                </div>
                <div className="hidden lg:flex bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>RESTful API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-yeseva text-center mt-36">
          Completed Projects
        </h1>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white">
          <div>
            <img
              src={onMyPlate}
              alt="an image of a homepage containing 4 characters"
              className="rounded-xl object-scale-down"
            />
            <h1 className="text-3xl font-bold font-yeseva mt-5">On My Plate</h1>
            <p className="font-medium text-xl mt-5 mb-7 font-quicksand">
              A no-frills online task manager
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/hawheeler96/TaskManager"
                className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
              >
                View on Github
              </a>
              <div className="hidden md:flex ms-3 p-1 justify-end">
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Flask</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>React.js</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>SQLaclhemy</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>CSS</p>
                </div>
                <div className="hidden lg:flex bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>RESTful API</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 dark:bg-midnight dark:shadow-white">
          <div>
            <img
              src={grimReapersTower}
              alt="an image of a homepage containing 4 characters"
              className="rounded-xl object-scale-down"
            />
            <h1 className="text-3xl font-bold font-yeseva mt-5">
              Escape the Grim Reaper's Tower
            </h1>
            <p className="font-medium text-xl mt-5 mb-7 font-quicksand">
              An escape room game run in the command line interface
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/hawheeler96/EscapeTheGrimReapersTower"
                className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
              >
                View on Github
              </a>
              <div className="hidden md:flex ms-3 p-1 justify-end">
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>Python</p>
                </div>
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>SQLite3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-xl shadow-midnight bg-white rounded-3xl p-10 m-10 mb-36 dark:bg-midnight dark:shadow-white">
          <div>
            <img
              src={slayTheDay}
              alt="an image of a homepage containing 4 characters"
              className="rounded-xl object-scale-down"
            />
            <h1 className="text-3xl font-bold font-yeseva mt-5">
              Slay the Day
            </h1>
            <p className="font-medium text-xl mt-5 mb-7 font-quicksand">
              An online calendar app
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/hawheeler96/slaytheday"
                className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
              >
                View on Github
              </a>
              <div className="hidden md:flex ms-3 p-1 justify-end">
                <div className="bg-glaucous rounded-md p-1 font-quicksand ms-3 text-white">
                  <p>React.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
