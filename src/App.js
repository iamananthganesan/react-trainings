import './App.css';
import ConditionalRendering from './Components/ConditionalRendering/ConditionRendering';
import LoginForm from './Components/FormHandling/LoginForm';
import ListRendering from './Components/ListRendering/ListRendering';
import ListRenderingFunctionalComponent from './Components/ListRendering/ListRenderingFunctionalComponent';
// import EventsInClassComponent from './Components/Events/EventsInClassComponent';
// import EventsInFunctionalComp from './Components/Events/EventsInFunctionalComp';
import MethodAsPropsParent from './Components/MethodAsProps/MethodAsPropsParent';
// import ParentClassComponent from './Components/ParentClassComponent'
// import ParentFunctionalComponent from './Components/ParentFunctionalComponent';

function App() {
  return (
    <div className="App">
      {/* <ClassComponent/> */}
      {/* 01/07/2024 */}
      {/* <ParentClassComponent greetingMessage="Welcome"/>
      <ParentFunctionalComponent/> */}
      {/* 01/09/2024 */}
      {/* <EventsInClassComponent/> */}
      {/* <EventsInFunctionalComp/> */}

      {/* <MethodAsPropsParent/> */}

      {/* <ConditionalRendering/> */}

      {/* <ListRendering/> */}
      {/* <ListRenderingFunctionalComponent/> */}

      <LoginForm/>
    </div>
  );
}

export default App;
