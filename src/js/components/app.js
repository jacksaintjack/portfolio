import React, { PropTypes } from 'react'
import $ from 'jquery'


class App extends React.Component {

  componentDidMount(){
    let audio = $('#soundEffect')
    let audioReady = audio[0]

      $('#menuSound li').click(function() {
          audioReady.play();
      });
  }

  render () {

    return(
      <main>
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

        <section className='menuArea'>
          <nav>
            <ul id="menuSound">
              <li>The Journey</li>
              <li>Skills</li>
              <li>Job/Adventure History</li>
              <li>Projects/Quests Completed</li>
              <li>Resume</li>
              <li>GitHub Profile</li>
            </ul>
            <audio id="soundEffect" src="../../assets/Sounds/CursorMove.mp3"/>
          </nav>
        </section>

        <footer className="">
          <div></div>
        </footer>

      </main>
    )
  }
}

export default App;
