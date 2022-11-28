import ParticlesBg from 'particles-bg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About' ;
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
       <Home/>
       <About className="About"/>
      </header>
    </div>
  );
}

export default App;
