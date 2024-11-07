import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import './App.css';
import CronGenerator from './components/CronGenerator';


function App() {
  return (
    <div>
      <div className='header'>
        <h3>cron-editor</h3>
      </div>
      <div className='container'>
        <div className='buttons'>
          <CronGenerator />
        </div>
      </div>
    </div>

  )
}

export default App;
