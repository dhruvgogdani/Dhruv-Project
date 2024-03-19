// import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/navbar';
import Program from './Components/program';
import Reason from './Components/reason';
import Plans from './Components/plans';

function App() {
  return (
  <div className='App'>
    <Navigationbar/>
    <Program/>
    <Reason/>
    <Plans/>
  </div>
  );
}

export default App;
