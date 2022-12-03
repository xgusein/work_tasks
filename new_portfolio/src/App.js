import ParticlesBg from 'particles-bg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About' ;
import Resume from './Components/Resume/Resume';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
       <Home/>
       <About className="About"/>
       <Resume/>
      </header>
    </div>
  );
}

export default App;
