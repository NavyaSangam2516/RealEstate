import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residency from "./components/Residency/Residency"; 
import Contact from "./components/Contact/Contact";

function App() {
  return (
   <div className="App">
    <div>
    <div className="blue-gradient"/>
    <Header/>
    <Hero/>
    </div>
   <Companies/>
   <Residency/>
   <Contact/>
   </div>
  );
}

export default App;
