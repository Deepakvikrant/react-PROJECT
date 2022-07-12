import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title = "TexT_ConvertoR" home = "Home" aboutText='About Text_ConvertoR' mode={mode} toggleMode={toggleMode} />
      
      <TextForm heading ="Enter the Text to Anyalyze"/> 

      <About/>
      
    </>
  );
}

export default App;
