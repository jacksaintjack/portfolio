import React from 'react'
import {Link} from 'react-router';
import $ from 'jquery';


class Journey extends React.Component {

  componentDidMount(){
    //Section for sound efects when you hover over the menu buttons
    let audio = $('#soundEffect')
    let audioReady = audio[0]

    $('#menuSound a').mouseenter(function() {
        audioReady.play();
    }), function(){
        auioReady.pause();
    }

    //This throws an error when I try to link it back to the app page.
    //This section is used for the text to display one letter at a time like a typewriter
    let str =
            `<p>
               Nicholas Glover, a lover of video games, computers, maps, and now Front-End Engineering,
               is now continuing his journey into the realm of the unknown. Never accepting what has been told to him to be the absolute truth in the pursuit of knowledge!
               You may ask, “Why is this?” When Mr. Glover was younger he was diagnosed with severe dyslexia.
               It was said dyslexia could have caused him not to be able to get the education everyone was getting,
               but that statement would be far from the truth. Through hard work, perseverance,
               and great teachers Mr. Glover was able to obtain the education he needed.
            </p>

            <p>
              When he was a teenager, he learned how to work on and build PCs through the help of Master Bob who owned a computer store.
              Mr. Glover learned the importance of programming while obtaining his degree to become a GIS professional.
              He would continue to learn programming’s great benefits as he worked for the City of Cookeville,
              and over the next few years would learn more about its uses.
            </p>

            <p>
              As seasons change so do people. A time of great change had befallen upon Mr. Glover.
              One which would change many aspects of his life. It was during this time he decided to learn how to program and this decision set him on this great journey he is now taking!
              What adventures await him? You may be the one to guide him to the next level!
            </p>

            <p>
            "The day you stop learning is the day you begin decaying."<br />
            -Isaac Asimov
            </p>`,
        i = 0,
        isTag,
        text;

    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById('journeyArea').innerHTML = text;

        let char = text.slice(-1); //-1 one being the ver end of the variable str
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;

        if (isTag) return type();
        setTimeout(type, 10);
    }());
    //On Page load will go to top of the page
    scroll(0,0)
  }

  render () {
    return(
      <main className='journeyArea'>
        <section className='mainArea journeySection'>
          <div className ="contentArea">
            <h1>The Journey</h1>
            <section id='journeyArea'></section>

          </div>
        </section>

        <nav className='menuArea nonHomeMenu'>
          <ul id="menuSound">
            <Link to='/'><li><div className='listImage'></div>Home</li></Link>
            <Link to='skills'><li><div className='listImage'></div>Skills</li></Link>
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

export default Journey;
