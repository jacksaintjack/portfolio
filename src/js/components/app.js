import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import $ from 'jquery'

class App extends React.Component {

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
        <section className="mainSection">
          <section className='mainArea'>
            <div className ="contentArea">

              <section className="charOne">

                <section className='spriteImageOne'></section>
                <section className="charStatsOne">
                  <h2>JavaScript Assassin</h2>
                  <span>Level: 6</span>
                  <span>Stamina: 78/89 </span>
                  <div className="staminaBar">
                    <div className="curStamina"></div>
                  </div>
                  <span>Will: 85/92 </span>
                  <div className="willBar">
                    <div className="curWill"></div>
                  </div>
                </section>

                <section className="charStatsTwo">
                  <span>To Next Level</span>
                  <span>68/200 xp</span>
                  <div className="experienceBar">
                    <div className ="curExp"></div>
                  </div>
                </section>
              </section>

              <section className="charTwo">

                <section className='spriteImageTwo'></section>
                <section className="charStatsOne">
                  <h2>Sorcerer Of React</h2>
                  <span>Level: 4</span>
                  <span>Stamina: 68/72 </span>
                  <div className="staminaBar">
                    <div className="curStamina"></div>
                  </div>
                  <span>Will: 70/82 </span>
                  <div className="willBar">
                    <div className="curWill"></div>
                  </div>
                </section>

                <section className="charStatsTwo">
                  <span>To Next Level</span>
                  <span>123/150 xp</span>
                  <div className="experienceBar">
                    <div className='curExp'></div>
                  </div>
                </section>

            </section>

              <section className="charThree">
                <section className='spriteImageThree'></section>
                <section className="charStatsOne">
                  <h2>Baron of HTML/CSS</h2>
                  <span>Level: 8</span>
                  <span>Stamina: 95/110 </span>
                  <div className="staminaBar">
                    <div className="curStamina"></div>
                  </div>
                  <span>Will: 110/118 </span>
                  <div className="willBar">
                    <div className="curWill"></div>
                  </div>
                </section>

                <section className="charStatsTwo">
                  <span>To Next Level</span>
                  <span>203/345 xp</span>
                  <div className="experienceBar">
                    <div className ="curExp"></div>
                  </div>
                </section>
              </section>

            </div>
          </section>

          <nav id="movedMenu" className='menuArea'>
            <ul id="menuSound">
              <Link to='journey'><li><div className='listImage'></div>The Journey</li></Link>
              <Link to='skills'><li><div className='listImage'></div>Skills</li></Link>
              <Link to='jobs'><li><div className='listImage'></div>Job/Adventure History</li></Link>
              <Link to='projects'><li><div className='listImage'></div>Projects/Quests Completed</li></Link>
              <a href='../../assets/pdf/Resume-NicholasGlover.pdf'><li><div className='listImage'></div>Resume</li></a>
              <a href="https://github.com/jacksaintjack"><li><div className='listImage'></div>GitHub Profile</li></a>
              <a href="https://www.linkedin.com/in/nicholasdwglover"><li><div className='listImage'></div>Linkin Profile</li></a>
            </ul>
            <audio id="soundEffect" src="../../assets/Sounds/CursorMove.mp3"/>
          </nav>
        </section>

          <footer className="profileInfo">
            <section className="creator">
              <section>
                <h2>Front-End Engineer</h2>
                <h3>Nicholas Glover</h3>
                <h3>Email: nickglovdev@gmail.com</h3>
                <h3>Carrier Pigeon: Duku Tower</h3>
                <h3 className='location'>Location: The Electric Castle</h3>
              </section>
              <img src="../../assets/pictures/Profile Pic.jpg"/>
            </section>
          </footer>
      </main>
    )
  }
}

export default App;
