import ParticlesBg from 'particles-bg';
import './App.css';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
       <Home/>
      </header>
    </div>
  );
}

export default App;
