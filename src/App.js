import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import CronGenerator from './components/CronGenerator';


function App() {
  return (
    <div className='container'>
      <div className = 'jumbotron'>
        <h3 className='display-3' >cron-editor</h3>
      </div>
      <div className='input-group'>
        <div className='buttons'>
          <CronGenerator />
        </div>
      </div>
    </div>

  )
}

export default App;
