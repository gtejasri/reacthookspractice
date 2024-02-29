import './App.css';
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import EffectHookCounterOne from './Components/EffectHookCounterOne';
import EffectHookMouse from './Components/EffectHookMouse';
import EffectMouseContainer from './Components/EffectMouseContainer';
import EffectIntervalHookCounter from './Components/EffectIntervalHookCounter';
import EffectDataFetching from './Components/EffectDataFetching';

function App() {
  return (
    <div className="App">
    {/* <ClassCounter/>
    <HookCounter/>
    <HookCounterTwo/>
    <HookCounterThree/>
    <HookCounterFour/>
    <EffectHookCounterOne/> 
    <EffectHookMouse/>    
    <EffectMouseContainer/>
    <EffectIntervalHookCounter/> */}

    <EffectDataFetching/>

    
    </div>
  );
}

export default App;
