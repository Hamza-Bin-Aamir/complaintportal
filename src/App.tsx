import './App.css';
import './env';
import AppContext from './env';
import angy from './images/angy.png';


function App() {
  return (
    <div className="App">
      <header>
        <div className="Header-Item">
            <img src={angy} alt="Angy" id='AngyImage' /> <AppContext /> Complaint Portal
        </div>
      </header>
      <div className="Form">
        Yooo! 
      </div>
    </div>
  );
}

export default App;