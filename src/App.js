import "./App.css";
import profilePic from "./images/profile.jpg";
function App() {
  return (
    <div className="App">
      <body>
        <header class="main-header">
          <nav>
            <a href="#about-me">About</a>
            <a href="#resume">Resume</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
          </nav>
        </header>
        <div class="mainview">
          <h1>Tyler Zeman</h1>
          <h2>Software Developer</h2>
        </div>
        <section id="about-me" class="section sectionStyle">
          <img src={profilePic} alt="profile pic"></img>
          <p class="box">
            Hello everyone, my name is Tyler Zeman. I am 23 years old and aspire
            becoming a Full Stack Developer. Before I have taken a 1-month web
            development Bootcamp with Nucamp in Decemeber 2020. I hope to gain
            lots of valuable information from the Full Stack Bootcamp I am
            attending this summer through the University of Minnesota.
          </p>
        </section>
        <section id="resume" class="resumeStyling">
          <h1>Education</h1>
          <div class="eduWork">
            <h2>Full Stack Flex Web development</h2>
            <p class="divider">June 2022 - September 2022</p>
            <h2>South High School</h2>
            <p class="divider">graduated in 2017</p>
          </div>
        </section>
        <section id="resume" class="resumeStyling">
          <h1>Work</h1>
          <div class="eduWork">
            <h2>Full-Time Student</h2>
            <p class="divider">June 2022 - Present</p>
            <h2>Corrugated Medium Paper Tester</h2>
            <p class="divider">March 2018 - May 2022</p>
          </div>
        </section>
        <section id="projects" class="section projects">
          <h1>Projects</h1>
          <div>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
          {/* <p class="box">
            For my 1st Bootcamp project we designed a webpage appication that
            allows the user to store website links to local storage. So if you
            have a favorite site you like to visit such as a social media site,
            streaming site, as lonk as the link is reachable it can be stored
            here. As another feature of the app we added a Weather API that
            allows the user to check the weather for today is going to be.
            Another member in my group was an artist and created a garfield gif
            that we decided to add for our motivational quote API for the bottom
            of the app. There is also a few themes to choose from in the
            dropdown menu such as dark mode, and space mode to include the
            amazing James Webb telescope images that were released.
          </p> */}
          </div>
        </section>
        <section class="section">
          {/* <p class="box">
            My 2nd Bootcamp porject titled FitSpace, was designed to be a
            fitness app that allows the user to register/login with our backend
            SQL DB. The user is then able to search for a workout that can be
            searched for by equipment, body part, or even muscle group. Once the
            user decides on what to search the Dashboard will then be populated
            with various workouts with gifs on how to perform said workout with
            a title and various properties including a save feature. This save
            feature will allow the user to save the workout to their account in
            the database and be able to view them whenever they log back into
            FitSpace.
          </p> */}
        </section>
        <section class="section">
          {/* <p class="box">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            quasi minima fugiat delectus error, reiciendis fugit, sit totam iste
            placeat architecto? Eius atque optio dolore similique quo, molestiae
            laboriosam magnam.
          </p> */}
        </section>
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
