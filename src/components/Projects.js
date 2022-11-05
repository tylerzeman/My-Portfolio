import Homepage from "../images/deployedsite.png";
import FitSpace from "../images/fitspace.png";
import jate from "../images/jate.png";
import workdaySchedule from "../images/workdayscheduler.png";
import PortfolioSS from "../images/portfolioscreenshot.png";
import passwordGenerator from "../images/password-generator.png";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h1>Projects</h1>
      <p>Check out my projects by clicking the images below.</p>
      <div className="projSection">
        <div className="projCol">
          <a href="https://tylerzeman.github.io/Homepage/" target="_blank">
            <img src={Homepage} alt="homepage screenshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>
        <div className="projCol">
          <a
            href="https://fitspace-stay-fit-my-friends.herokuapp.com/"
            target="_blank"
          >
            <img src={FitSpace} alt="fitspace screenshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>
        <div className="projCol">
          <a href="https://jate-tz.herokuapp.com/" target="_blank">
            <img src={jate} alt="jate screeshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>
        <div className="projCol">
          <a
            href="https://tylerzeman.github.io/Work-Day-Scheduler/"
            target="_blank"
          >
            <img src={workdaySchedule} alt="workday scheduler screenshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>

        <div className="projCol">
          <a
            href="https://tylerzeman.github.io/Password-Generator/"
            target="_blank"
          >
            <img src={passwordGenerator} alt="password generator screenshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>

        <div className="projCol">
          <a href=" https://tylerzeman.github.io/My-Portfolio/" target="_blank">
            <img src={PortfolioSS} alt="portfolio screenshot" />
          </a>
          <a href="https://github.com/tylerzeman/My-Portfolio" target="_blank" className="repoLink">
            Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
