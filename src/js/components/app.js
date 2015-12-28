import React, { PropTypes } from 'react'

class App extends React.Component {
  render () {
    return(
      <main>
        <section className='mainArea'>
          <div className='contentArea'>
            
          </div>
        </section>
        <section className='sideArea'>
          <nav>
            <ul>
              <li>The Journey</li>
              <li>Skills</li>
              <li>Job/Adventure History</li>
              <li>Projects/Quests Completed</li>
              <li>Resume</li>
              <li>GitHub Profile</li>
            </ul>
          </nav>
        </section>
      </main>
    )
  }
}

export default App;
