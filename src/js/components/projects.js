import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import $ from 'jquery';


class Projects extends React.Component {

  componentDidMount(){
    //Section for sound efects when you hover over the menu buttons
    let audio = $('#soundEffect')
    let audioReady = audio[0]

    $('#menuSound a').mouseenter(function() {
      audioReady.play();
    }), function(){
      auioReady.pause();
    }
    //On Page load will go to top of the page
    scroll(0,0)
  }

  render () {
    return(
      <main className='projectMain'>
        <section className='mainArea projectArea'>
          <div className ="contentArea">

              <section className='firstProject'>
                <a target="_blank" href="http://jacksaintjack.github.io/homework_week3_friday/">
                  <section>
                    <div></div>
                  </section>
                </a>
                <a target="_blank" href="https://github.com/jacksaintjack/homework_week3_friday">
                  <h3>Github Repo Link</h3>
                </a>
                <h2>Calculator</h2>
                <h3>CSS/HTML, Bourbon, Neat, JavaScript, Responsive Design</h3>
              </section>

              <section className='secondProject'>
                <a target="_blank" href="http://jacksaintjack.github.io/silentAuction">
                  <section>
                    <div></div>
                  </section>
                </a>
                <a target="_blank" href="https://github.com/jacksaintjack/silentAuction">
                  <h3>Github Repo Link</h3>
                </a>
                <h2>Silent Auction</h2>
                <h3>AJAX, jQuery, Javascript, React.js, React-Router, HTML/CSS, Bourbon, Neat, Responsive Design</h3>
              </section>

              <section className='thirdProject'>
                <a target="_blank" href="http://jacksaintjack.github.io/homework_week4_tuesday/">
                  <section>
                    <div></div>
                  </section>
                </a>
                <a target="_blank" href="https://github.com/jacksaintjack/homework_week4_tuesday">
                  <h3>Github Repo Link</h3>
                </a>
                <h2>Remake of Github Repo</h2>
                <h3>HTML5/CSS, JavaScript, jQuery, AJAX, Templates, Bourbon, Neat</h3>
              </section>

              <section className='fourthProject'>
                <a target="_blank" href="http://jacksaintjack.github.io/homework_week2_thursday/">
                  <section>
                    <div></div>
                  </section>
                </a>
                <a target="_blank" href="https://github.com/jacksaintjack/homework_week2_thursday">
                  <h3>Github Repo Link</h3>
                </a>
                <h2>SK8 Website</h2>
                <h3>HTML5/CSS, Bourbon, Neat, Responsive Design</h3>
              </section>

              <section className='fifthProject'>
                <a target="_blank" href="http://jacksaintjack.github.io/">
                  <section>
                    <div></div>
                  </section>
                </a>
                <a target="_blank" href="https://github.com/jacksaintjack/portfolio">
                  <h3>Github Repo Link</h3>
                </a>
                <h2>This Site</h2>
                <h3>React.js, React-Router, JavaScript, HTML/CSS, Bourbon, Neat, Responsive Design</h3>
              </section>

          </div>
        </section>

        <nav className='menuArea nonHomeMenu'>
          <ul id="menuSound">
            <Link to='/'><li><div className='listImage'></div>Home</li></Link>
            <Link to='journey'><li><div className='listImage'></div>The Journey</li></Link>
            <Link to='skills'><li><div className='listImage'></div>Skills</li></Link>
            <Link to='jobs'><li><div className='listImage'></div>Job/Adventure History</li></Link>
            <a target="_blank" href='../../assets/pdf/Resume-NicholasGlover.pdf'><li><div className='listImage'></div>Resume</li></a>
            <a target="_blank" href="https://github.com/jacksaintjack"><li><div className='listImage'></div>GitHub Profile</li></a>
            <a target="_blank" href="https://www.linkedin.com/in/nicholasdwglover"><li><div className='listImage'></div>LinkedIn Profile</li></a>
          </ul>
          <audio id="soundEffect" src="../../assets/Sounds/CursorMove.mp3"/>
        </nav>

      </main>
    )
  }
}

export default Projects;
