import React from 'react';
import {Link} from 'react-router';
import $ from 'jQuery';

class JobHistory extends React.Component {

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
            <section className="timelineText display">
              <div></div>
            </section>


            <section className="timeline">
              <section className='timelineArea'>
                <div className="spriteOne"></div>
                <div className="spriteTwo"></div>
                <div className='spriteThree'></div>
                <div className='spriteFour'></div>
                <div className="mainLine">
                  <div className="ticklineOne"></div>
                  <div className="ticklineTwo"></div>
                  <div className='ticklineThree'></div>
                  <div className='ticklineFour'></div>
                </div>
                <p className="unv">University</p>
                <p className='ta'>Teacher Assistant</p>
                <p className="coc">City Of Cookeville</p>
                <p className='iy'>Iron Yard</p>
              </section>
            </section>
          </div>
        </section>

        <nav className='menuArea'>
          <ul id="menuSound">
            <Link to='/'><li>Home</li></Link>
            <Link to='journey'><li>The Journey</li></Link>
            <Link to='skills'><li>Skills</li></Link>
            <Link to='projects>'><li>Projects/Quests Completed</li></Link>
            <a href='../../assets/pdf/Resume-NicholasGlover.pdf'><li>Resume</li></a>
            <a href="https://github.com/jacksaintjack"><li>GitHub Profile</li></a>
          </ul>
          <audio id="soundEffect" src="../../assets/Sounds/CursorMove.mp3"/>
        </nav>

      </main>
    )
  }
}

export default JobHistory;
