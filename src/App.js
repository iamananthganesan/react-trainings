import './App.css';
import ParentClassComponent from './Components/ParentClassComponent'
import ParentFunctionalComponent from './Components/ParentFunctionalComponent';

function App() {
  return (
    <div className="App">       
      {/* <ClassComponent/> */}
      <ParentClassComponent greetingMessage="Welcome"/>
      <ParentFunctionalComponent/>
    </div>
  );
}

export default App;
