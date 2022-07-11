import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TexT_ConvertoR" home = "Home" aboutText='About Text_ConvertoR'/>
      
      <TextForm heading ="Enter the Text to Anyalyze"/> 

      <About/>
      
    </>
  );
}

export default App;
