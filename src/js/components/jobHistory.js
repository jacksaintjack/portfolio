import React from 'react';
import {Link} from 'react-router';
import $ from 'jQuery';
import ToggleDisplay from 'react-toggle-display';

class JobHistory extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isAuthorized: true,
      isAuthorizedOne: false,
      isAuthorizedTwo: false,
      isAuthorizedThree: false,
      isAuthorizedFour: false
    }
    this.toggleTimeLineOne = this.toggleTimeLineOne.bind(this),
    this.toggleTimeLineTwo = this.toggleTimeLineTwo.bind(this),
    this.toggleTimeLineThree = this.toggleTimeLineThree.bind(this),
    this.toggleTimeLineFour = this.toggleTimeLineFour.bind(this)
  }
  //Below is used to hide and display the job text
  toggleTimeLineOne(event){
    event.preventDefault()
    this.setState({
      isAuthorized: false,
      isAuthorizedOne: true,
      isAuthorizedTwo: false,
      isAuthorizedThree: false,
      isAuthorizedFour: false
    });
  }

  toggleTimeLineTwo(event){
    event.preventDefault()
      this.setState({
        isAuthorized: false,
        isAuthorizedOne: false,
        isAuthorizedTwo: true,
        isAuthorizedThree: false,
        isAuthorizedFour: false
      });
  }

  toggleTimeLineThree(event){
    event.preventDefault()
      this.setState({
        isAuthorized: false,
        isAuthorizedOne: false,
        isAuthorizedTwo: false,
        isAuthorizedThree: true,
        isAuthorizedFour: false
      });
  }

  toggleTimeLineFour(event){
    event.preventDefault()
      this.setState({
        isAuthorized: false,
        isAuthorizedOne: false,
        isAuthorizedTwo: false,
        isAuthorizedThree: false,
        isAuthorizedFour: true
      });
  }

  componentDidMount(){
    //Section for sound efects when you hover over the menu buttons
    let audio = $('#soundEffect')
    let audioReady = audio[0]

    $('#menuSound a').mouseenter(function() {
        audioReady.play();
    }), function(){
        auioReady.pause();
    }

    $('#spriteArea div').click(function() {
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
            <section className="timelineText">
              <div>
                <ToggleDisplay show={this.state.isAuthorized}>
                  <h1>Click On The Characters Below for Job/Adventure History </h1>
                  <section className="arrowDown"></section>
                </ToggleDisplay>

                <ToggleDisplay show={this.state.isAuthorizedOne}>
                  <h2>Graduated Tennessee Technological University</h2>
                  <h2 className="degreeTitle">Degree: Geosciences</h2>
                  <h2>Concentration: Geographic Information Systems (GIS)</h2>
                  <p>
                    The first step on Mr. Glover’s journey was to obtain a degree.
                    It took time for him to figure out what he wanted to do, but soon he would learn the joy’s of making maps with GIS.
                    It was one of the biggest things that had happened to him at the University,
                    and he was excited to see what would come from going down this path.
                  </p>
                </ToggleDisplay>

                <ToggleDisplay show={this.state.isAuthorizedTwo}>
                  <h2>Teacher Assistant</h2>
                  <h2>Location: Tennessee Tech University</h2>
                  <p>
                    One of Mr. Glover’s first Journey’s in a more professional setting was helping his instructor.
                    He was responsible for helping the instructor whenever needed, as well as assist the students in class.
                    This could range from grading projects to solving ArcGIS errors that the students were having during class.
                    He quickley learned that there was always be ArcGIS errors.
                  </p>
                </ToggleDisplay>

                <ToggleDisplay show={this.state.isAuthorizedThree}>
                  <h2>GIS Specialist</h2>
                  <h2>Location: Cookeville Electric Department</h2>
                  <p>
                    This step in Mr. Glover’s Journey would be one of biggest so far.
                    He would gain a large amount of knowledge while work for the city.
                    They had placed him in a situation where he would have to correct and improve their GIS systems.
                    During his time there, he would be able to accomplish the implementation of ArcGIS server, SQL server, ArcGIS Web maps,
                    server automation through python scripts, improved data accuracy, and move towards mobile devices for mapping.
                  </p>
                </ToggleDisplay>

                <ToggleDisplay show={this.state.isAuthorizedFour}>
                    <h2>Student</h2>
                    <h2>Location: The Iron Yard</h2>
                    <p>
                      This latest Journey that Mr. Glover has taken has set him on a different path,
                      but a path that he has wanted to take since he was a child. Mr. Glover’s time at the Iron Yard would have a profound impact on him.
                      He would learn that he would be able to accomplish things that he had only dreamed about.
                      He has learned so much about javaScript, html/css, sass, git, github, react, and so much more.
                      While at time he had found it most difficult, he would in the end to find that it was well worth the work.
                      For he is now able to understand how to program. It would seem that it would be a first step in a great direction.
                    </p>
                </ToggleDisplay>
              </div>
            </section>


            <section className="timeline">
              <section className='timelineArea'>
                <div className="mainLine"></div>

                <section id="spriteArea" className='firstStop'>
                  <div className="spriteFirst" onClick={this.toggleTimeLineOne}></div>
                  <div className="ticklineOne"></div>
                  <p className="ta">Teacher <br /> Assistant</p>
                </section>

                <section id="spriteArea" className='secondStop'>
                  <div className="spriteSecond" onClick={this.toggleTimeLineTwo}></div>
                  <div className="ticklineTwo"></div>
                  <p className='unv'>Graduated<br /> University</p>
                </section>

                <section id="spriteArea" className='thirdstop'>
                  <div className="spriteThird" onClick={this.toggleTimeLineThree}></div>
                  <div className='ticklineThree'></div>
                  <p className="coc">City Of <br /> Cookeville</p>
                </section>

                <section id="spriteArea" className='fourthStop'>
                  <div className='spriteFourth' onClick={this.toggleTimeLineFour}></div>
                  <div className='ticklineFourth'></div>
                  <p className='iy'>Iron Yard</p>
                </section>
              </section>
            </section>
          </div>
        </section>

        <nav className='menuArea'>
          <ul id="menuSound">
            <Link to='/'><li>Home</li></Link>
            <Link to='journey'><li>The Journey</li></Link>
            <Link to='skills'><li>Skills</li></Link>
            <Link to='projects'><li>Projects/Quests Completed</li></Link>
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

export default JobHistory;
