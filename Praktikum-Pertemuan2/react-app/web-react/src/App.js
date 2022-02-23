import pic from './picture/opm.png';
import './App.css';

function App() {
  return (
    <div className="App">
       <div class="header">
          Hallo , Ini Website React Pertama
          </div>
      <header className="App-header">
        {/* <img src={pic} alt="logo" /> */}
        <h1>
          Reynaldi Ramadhani Eka Purnomo <br/> Absen 21/TI3D
        </h1>
        <a
          className="App-link"
          href="https://github.com/Reynaldi1912/React-JS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            My Github
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
