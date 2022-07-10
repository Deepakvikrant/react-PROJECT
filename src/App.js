import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TEST_TITLE" home = "Home"/>
      
      <div className='container my-3'>
        <TextForm heading ="Enter the Text to Anyalyze"/> 
      </div>
      
    </>
  );
}

export default App;
