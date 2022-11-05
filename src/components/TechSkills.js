import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/js.png";
import MYSQL from "../images/mysql.png";
import API from "../images/api.png";
import REACT from "../images/atom.png";

const TechSkills = () => {
  return (
    <div className="tsSection">
      <h1 id="tsTitle">Technical Skills</h1>
      <div className="pngContainer">
        <img className="techPng" src={HTML} alt="html png" />
        <img className="techPng" src={CSS} alt="css png" />
        <img className="techPng" src={JS} alt="js png" />
        <img className="techPng" src={API} alt="api png" />
        <img className="techPng" src={MYSQL} alt="mysql png" />
        <img className="techPng" src={REACT} alt="react png" />
      </div>
    </div>
  );
};

export default TechSkills;
