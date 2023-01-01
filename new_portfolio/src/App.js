import ParticlesBg from 'particles-bg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About' ;
import Resume from './Components/Resume/Resume';
function App() {
  var cursor = document.querySelector(".cursor");
  var cursor2 = document.querySelector(".cursor2");
  document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX 
    + "px; top: " + e.clientY + "px;";
  });
  return (
    <div className="App">
      <header className="App-header">
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
       <Home/>
       <About className="About"/>
       <Resume/>
       <div className="cursor"></div>
       <div className="cursor2"></div>
      </header>
    </div>
  );
}

export default App;
