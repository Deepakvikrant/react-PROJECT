import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';


 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
        msg:message,
        Type:type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      //showAlert("Dark mode has been enable", "success")
      // setInterval(()=> {
      //   document.title= 'TexT_ConvertoR is Amazing'},
      //   1200);
      // setInterval(()=> {
      //   document.title= ' install TexT_ConvertoR '},
      //   2200);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enable", "success")
    }
  }

  const toggleModeBlue = () => {
    setMode('blue');
    document.body.style.backgroundColor = 'blue';
    //showAlert("Dark mode has been enable", "success")
    document.title= 'TexT_ConvertoR blue mode'
  }
  const toggleModeDark = () => {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    //showAlert("Dark mode has been enable", "success")
    document.title= 'TexT_ConvertoR Dark mode'
  }

  const toggleModeLight = () =>{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    //showAlert("Light mode has been enable", "success")
  }



  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TexT_ConvertoR" mode={mode} toggleModeLight={toggleModeLight} toggleMode={toggleMode} toggleModeBlue={toggleModeBlue} toggleModeDark={toggleModeDark} />
    
    <Alert alert={alert}/>

    <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>

    <About/>

    </> 
  );
}

export default App;
