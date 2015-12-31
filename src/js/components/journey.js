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
                  Nicholas Glover a lover of video games, computers, maps, and now Front-End Engineering.
                  Is now continuing his journey into the realm of the unknown. Never accepting what has been told to him to be the absolute truth in the pursuit of knowledge!
                  You may ask, “Why is this?” When Mr. Glover was younger he was diagnosed with having Severe Dyslexia.
                  It was said that it could have caused him not to be able to get the education that everyone was getting,
                  but that statement would be far from the truth. Through hard work, and great teachers Mr. Glover was able to obtain the education he needed.
            </p>

            <p>
              When he was a teenager he was able to learn how to work on and build PCs through the help of an older gentlemen who owned a computer store.
              In college he learned the importance of programming while obtaining his degree to become a GIS professional.
              He would continue to learn it’s great benifits as he work for the City of Cookeville, and Over the next few years would learn more about it’s use.
            <p>

            <p>
              As seasons change so do people. A time of great change had befallen upon Mr. Glover.
              One that would change many aspects of his life.
              It was during this time that he decided it was time to learn how to program and set him on this great journey that he is taking now!
              What adventures await him now? You may be the one to guide him to the next level!
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
        setTimeout(type, 40);
    }());
  }

  render () {
    return(
      <main>
        <section className='mainArea'>
          <div className ="contentArea">
            <h1>The Journey</h1>
            <section id='journeyArea'></section>

          </div>
        </section>

        <nav className='menuArea'>
          <ul id="menuSound">
            <Link to='/'><li>Home</li></Link>
            <Link to='skills'><li>Skills</li></Link>
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

export default Journey;
