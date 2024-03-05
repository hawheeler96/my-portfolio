import tavernPage from "../images/tavern_page.png";
import onMyPlate from "../images/on_my_plate_page.png"
import grimReapersTower from "../images/grim_reapers_tower.png"
import slayTheDay from "../images/slaytheday.png"

function Projects() {
  return (
    <div className="min-h-screen dark:bg-midnight dark:text-white">
      <div className="grid grid-cols-1 px-96">
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
            <a
              href="https://github.com/hawheeler96/tavern"
              className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
            >
              View on Github
            </a>
          </div>
        </div>
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
            <a
              href="https://github.com/hawheeler96/TaskManager"
              className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
            >
              View on Github
            </a>
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
            <a
              href="https://github.com/hawheeler96/EscapeTheGrimReapersTower"
              className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
            >
              View on Github
            </a>
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
            <a
              href="https://github.com/hawheeler96/slaytheday"
              className="bg-xanthous text-xl font-quicksand font-bold p-2 rounded-md transition-colors ease-in-out delay-50 hover:bg-rose hover:text-soft-white dark:text-midnight dark:hover:text-white"
            >
              View on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
