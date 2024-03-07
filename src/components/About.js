import hollyFillerPhoto from '../images/website seflie.png'

function About() {
    return (
      <div className="grid lg:grid-cols-2 font-quicksand font-medium pb-20 lg:max-3xl:p-10 text-xl dark:text-soft-white dark:bg-midnight">
        <div className="col-start-1 p-5">
          <img
            src={hollyFillerPhoto}
            width={450}
            alt="a young white woman with long wavy golden-brown hair sitting in front of a computer and smiling"
            className="hidden lg:max-3xl:block absolute left-10 lg:left-10 xl:left-40 2xl:left-80 3xl:left-96 top-20 rounded-xl shadow-xl shadow-sandblast dark:shadow-white"
          />
        </div>
        <div className="col-start-2 p-5">
          <h1 className="text-5xl font-yeseva">About Me</h1>
        </div>
        <div className="col-start-2 p-5">
          <p>
            Hi there! My name is Holly Wheeler, and I am a full stack software
            engineer based in Oakland, California.
          </p>
        </div>
        <div className="col-start-2 p-5">
          <p>
            I started my career in tech a few months after graduating college in
            2018. I started as an ads analyst at MoPub, a subsidiary of Twitter
            at the time. I continued to do policy work for a few years, joining
            the Twitter side of the business in 2019. In 2021, I moved into a
            learning and development role on the policy team I had been working
            for, and found I had a passion for training. After leadership
            changed hands, I survived several rounds of layoffs, but was
            unfortunately laid off in 2023.
          </p>
        </div>
        <div className="col-start-2 p-5">
          <p>
            I took this as an opportunity to re-evaluate my career path. I liked
            training and policy, but I wasn`t sure I wanted to do them forever.
            I had worked with engineers and was constantly impressed by the
            things they could build, so I decided to try a free self-paced
            Python course. That course opened my eyes to the beauty and fun of
            coding, and I couldn`t stop there. I enrolled in a full-time
            software engineering bootcamp run by Flatiron School, where I
            learned JavaScript, React, Python, and Flask, along with HTML and
            CSS.
          </p>
        </div>
        <div className="col-start-2 p-5">
          <p>
            My time in policy and training gave me a deeper appreciation and
            consideration for the user experience. This consideration heavily
            affects the way I code – making sure things are user friendly and
            accessible is one of my top priorities whenever I start a new
            project.
          </p>
        </div>
      </div>
    );
}

export default About;