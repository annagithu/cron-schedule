
import './App.css';
import CronGenerator from './components/CronGenerator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          cron-editor
        </h1>
        <CronGenerator />
      </header>
    </div>
  );
}

export default App;
