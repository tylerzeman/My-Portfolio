import "./App.css";
import profilePic from "./images/profile.jpg";
import Header from './components/Header'
import Education from './components/Education'
import Resume from './components/Resume'
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <body>
        <Header/>
        <div class="mainview">
          <h1>Tyler Zeman</h1>
          <h2>Software Developer</h2>
        </div>
        <section id="about-me" class="section sectionStyle">
          <img id="prfpic"src={profilePic} alt="profile pic"></img>
          <p class="box">
            Hello everyone, my name is Tyler Zeman. I am 23 years old and aspire
            becoming a Full Stack Developer. Before I have taken a 1-month web
            development Bootcamp with Nucamp in Decemeber 2020. I hope to gain
            lots of valuable information from the Full Stack Bootcamp I am
            attending this summer through the University of Minnesota.
          </p>
        </section>
        <Education/>
        <Resume/>
        <Projects/>
        <footer id="footer"class="bottom-bar">
          <a href="https://github.com/tylerzeman" target="_blank">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-zeman-29a068207/"
            target="_blank"
          >
            LinkedIn
          </a>
        </footer>
      </body>
    </div>
  );
}

export default App;
