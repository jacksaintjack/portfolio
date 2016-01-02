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
  }

  render () {
    return(
      <main>
        <section className='mainArea'>
          <div className ="contentArea">

            <section className='firstProject'>
              <section>
                <div></div>
              </section>
              <h2>Name of Project</h2>
              <h3>Description</h3>
            </section>

            <section className='secondProject'>
              <section>
                <div></div>
              </section>
              <h2>Name of Project</h2>
              <h3>Description</h3>
            </section>

            <section className='thirdProject'>
              <section>
                <div></div>
              </section>
              <h2>Name of Project</h2>
              <h3>Description</h3>
            </section>

            <section className='fourthProject'>
              <section>
                <div></div>
              </section>
              <h2>Name of Project</h2>
              <h3>Description</h3>
            </section>

          </div>
        </section>

        <nav className='menuArea'>
          <ul id="menuSound">
            <Link to='/'><li>Home</li></Link>
            <Link to='journey'><li>The Journey</li></Link>
            <Link to='skills'><li>Skills</li></Link>
            <Link to='jobs'><li>Job/Adventure History</li></Link>
            <a href='../../assets/pdf/Resume-NicholasGlover.pdf'><li>Resume</li></a>
            <a href="https://github.com/jacksaintjack"><li>GitHub Profile</li></a>
            <a href="https://www.linkedin.com/in/nicholasdwglover"><li>Linkin Profile</li></a>
          </ul>
          <audio id="soundEffect" src="../../assets/Sounds/CursorMove.mp3"/>
        </nav>

      </main>
    )
  }
}

export default Projects;
