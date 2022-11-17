import Homepage from "../images/deployedsite.png";
import FitSpace from "../images/fitspace.png";
import jate from "../images/jate.png";
import workdaySchedule from "../images/workdayscheduler.png";
import PortfolioSS from "../images/portfolioscreenshot.png";
import passwordGenerator from "../images/password-generator.png";

const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <p>Check out my deployed projects by clicking the images below.</p>
      <div className="projSection">
        <div className="projCol">
          <h1>Homepage</h1>
          <a href="https://tylerzeman.github.io/Homepage/" target="_blank">
            <img src={Homepage} alt="homepage screenshot" />
          </a>
          <p>
            This was my very first project that I collaberated with others in my
            coding bootcamp. Our goal with this site was to allow the user to
            store links in local storage. This was created in mind to help clean up and sort messy bookmark bars/folders.
          </p>
          <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
            >
              Repository
              
            </a>
            </button>
        </div>
        <div className="projCol">
          <h1>FitSpace</h1>
          <a
            href="https://fitspace-stay-fit-my-friends.herokuapp.com/"
            target="_blank"
          >
            <img src={FitSpace} alt="fitspace screenshot" />
          </a>
          <p>
            Another project that I collaberated with others was a fitness app
            that we created using Express Handlebars. The server was ran with
            Node.Js and has a working front/back end. The app allows users to
            register/login and authenticate their login credentials, once logged
            in the user is able to search for workouts to make fast, fun, and
            easy.
          </p>
            <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
              className="repoLink"
            >
              Repository
            </a></button>
        </div>
        <div className="projCol">
          <h1>JATE</h1>
          <a href="https://jate-tz.herokuapp.com/" target="_blank">
            <img src={jate} alt="jate screeshot" />
          </a>
          <p>
            JATE, is "just another text editor", it is a Progressive Web App
            that is downloadable. This was created to help users create notes or
            even code snippets with or without an internet connection.
            </p>
            <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
              className="repoLink"
            >
              Repository
            </a></button>
        </div>
        <div className="projCol">
          <h1>Workday Planner</h1>
          <a
            href="https://tylerzeman.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img src={workdaySchedule} alt="workday scheduler screenshot" />
          </a>
          <p>
            I created a Work-Day Scheduler to help plan out my day to help
            either for studies/meetings or anything that would require me to
            plan, to help keep organized and efficent. In this project I used
            mostly Vanilla javscript to generate the random alphanumeric
            passwords with a basic html page and CSS styling.
          </p>
          <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
              className="repoLink"
            >
              Repository
            </a></button>
        </div>

        <div className="projCol">
          <h1>Password Generator</h1>
          <a
            href="https://tylerzeman.github.io/Password-Generator/"
            target="_blank"
          >
            <img src={passwordGenerator} alt="password generator screenshot" />
          </a>
          <p>
            Here I created a random password generator using vanilla Javascript
            along with HTML/CSS. You can choose to opt for upper/lowercase
            letters, numbers, and special characters. You can also choose the
            length of the desired password from a minimum of 8 characters to 128
            characters.
          </p>
          <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
              className="repoLink"
            >
              Repository
            </a></button>
        </div>

        <div className="projCol">
          <h1>My Portfolio</h1>
          <a href=" https://tylerzeman.github.io/My-Portfolio/" target="_blank">
            <img src={PortfolioSS} alt="portfolio screenshot" />
          </a>
          <p>
            This is my portfolio that I created using React.Js, I love react and all it has to offer, this site lists all of my socials, a way to contact me, and to check out my github linked below. 
          </p>
          <button className="repoBtn"><a
              href="https://github.com/tylerzeman/My-Portfolio"
              target="_blank"
              className="repoLink"
            >
              Repository
            </a></button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
