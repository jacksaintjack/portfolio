import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Skills extends React.Component {

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
          <section className ="contentArea">

            <section className="charPic">
              <div></div>
            </section>

            <section className="charEquippedSkills">
              <div>
                <h2>Equip Skills</h2>
              </div>
            </section>

            <section className="charStats">
              <div>
                <h2>Stats</h2>
              </div>
            </section>

            <section className="charMisc">
              <div className='charOtherSkills'>
                <h2>Skills Unequipped</h2>
              </div>
            </section>


            <section className="charEquip">
              <div>
                <h2>Items Equipped</h2>
              </div>
            </section>

          </section>
        </section>

        <nav className='menuArea'>
          <ul id="menuSound">
            <Link to='/'><li>Home</li></Link>
            <Link to='journey'><li>The Journey</li></Link>
            <Link to='jobs'><li>Job/Adventure History</li></Link>
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
export default Skills ;
