import './App.css';
import ConditionalRendering from './Components/ConditionalRendering/ConditionRendering';
import LoginForm from './Components/FormHandling/LoginForm';
import HttpRequests from './Components/HttpRequests/HttpRequests';
import LifeCycleComponent from './Components/LifeCycles/LifeCycleComponent';
import ListRendering from './Components/ListRendering/ListRendering';
import ListRenderingFunctionalComponent from './Components/ListRendering/ListRenderingFunctionalComponent';
import ParentFunctionalComponent from './Components/Memo/ParentFunctionalComponent';
// import EventsInClassComponent from './Components/Events/EventsInClassComponent';
// import EventsInFunctionalComp from './Components/Events/EventsInFunctionalComp';
import MethodAsPropsParent from './Components/MethodAsProps/MethodAsPropsParent';
import ParentComponent from './Components/PureComponent/ParentComponent';
import RefClassComponent from './Components/Refs/RefClassComponent';
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

      {/* <LoginForm/> */}
      {/* <LifeCycleComponent/> */}

      {/* Pure component */}
      {/* <ParentComponent/> */}

      {/* {Memo Component} */}
      {/* <ParentFunctionalComponent/> */}
      {/* Ref */}
      {/* <RefClassComponent/> */}

      {/* Http Request */}
      <HttpRequests />
    </div>
  );
}

export default App;
