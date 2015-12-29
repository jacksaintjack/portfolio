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
          <div>
            <section className="charOne">
              <section className='spriteImageOne'></section>
            </section>
            <section className="charTwo">
              <section className='spriteImageTwo'></section>
            </section>
            <section className="charThree">
              <section className='spriteImageThree'></section>
            </section>
          </div>
        </section>
        <section id='sideArea' className='sideArea'>
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
