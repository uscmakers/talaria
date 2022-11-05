import logo from './logo.svg';
import './App.css';
import BatteryGauge from 'react-battery-gauge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BatteryGauge value={147} />
      </header>
    </div>
  );
}

export default App;
