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
      //On Page load will go to top of the page
      scroll(0,0)
  }

  render () {
    return(
      <main className='skillMain'>
        <section className='mainArea skillArea'>
          <section className ="contentArea">

            <section className="charPic">
              <div>
                <img src='../../assets/sprites/nickProfile.png'/>
              </div>
            </section>

            <section className="charEquippedSkills">
              <div>
                <h2>Equip Skills</h2>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconOne.png'/>javaScript</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>CSS</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>HTML 5</li>
                </ul>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconThree.png'/>React</li>
                  <li><img src='../../assets/sprites/SkillIconThree.png'/>Backbone</li>
                  <li><img src='../../assets/sprites/SkillIconOne.png'/>jQuery</li>
                </ul>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>SASS</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>Bourbon Neat</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>Bootstrap</li>
                </ul>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconFour.png'/>Git</li>
                  <li><img src='../../assets/sprites/SkillIconFour.png'/>GitHub</li>
                </ul>

              </div>
            </section>

            <section className="charStats">
              <div>
                <h2>Stats</h2>
                <p>Strength: 2</p>
                <p>Speed: 7</p>
                <p>Intelligence: 7</p>
                <p>Attitude: 8</p>
                <p>Typing: 8</p>
                <p>Groovy: 9</p>
                <p>Growly: 6</p>
                <p>Dancing: 1</p>
                <p>Singing: 4</p>
              </div>
            </section>

            <section className="charMisc">
              <div className='charOtherSkills'>
                <h2>Skills Unequipped</h2>
                <ul>
                  <li><img src='../../assets/sprites/SkillIconThree.png'/>ArcMap</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>Cartography</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>GIS</li>
                </ul>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconFour.png'/>Spatial Analysis</li>
                  <li><img src='../../assets/sprites/SkillIconOne.png'/>Web Mapping</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>Geocoding</li>
                </ul>

                <ul>
                  <li><img src='../../assets/sprites/SkillIconThree.png'/>Remote Sensing</li>
                  <li><img src='../../assets/sprites/SkillIconThree.png'/>ArcPad</li>
                  <li><img src='../../assets/sprites/SkillIconTwo.png'/>ArcSDE</li>
                </ul>

              </div>
            </section>


            <section className="charEquip">
              <div>
                <h2>Items Equipped</h2>
                  <ul>
                    <li><img src='../../assets/sprites/Hat.png'/>Trucker Cap</li>
                    <li><img src='../../assets/sprites/Shirt.png'/>Band T-Shirt</li>
                  </ul>

                  <ul>
                    <li><img src='../../assets/sprites/Shoes.png'/>Biker Boots</li>
                    <li><img src='../../assets/sprites/Brace.png'/>Slap Bracelet</li>
                  </ul>

                  <ul>
                    <li><img src='../../assets/sprites/Sword.png'/>Broom Stick</li>
                    <li><img src='../../assets/sprites/Shield.png'/>Trash Can Lid</li>
                  </ul>

              </div>
            </section>

          </section>
        </section>

        <nav className='menuArea nonHomeMenu'>
          <ul id="menuSound">
            <Link to='/'><li><div className='listImage'></div>Home</li></Link>
            <Link to='journey'><li><div className='listImage'></div>The Journey</li></Link>
            <Link to='jobs'><li><div className='listImage'></div>Job/Adventure History</li></Link>
            <Link to='projects'><li><div className='listImage'></div>Projects/Quests Completed</li></Link>
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
export default Skills ;
