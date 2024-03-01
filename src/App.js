import './App.css';
import React from 'react';
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

import CounterOne from './UseReducerComponents/CounterOne';
import CounterTwo from './UseReducerComponents/CounterTwo';
import CounterThree from './UseReducerComponents/CounterThree';
import DataFetchingOne from './UseReducerComponents/DataFetchingOne';
import DataFetchingTwo from './UseReducerComponents/DataFetchingTwo';


//import ComponentC from './ComponentTree/ComponentC';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

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
    <EffectIntervalHookCounter/> 
    <EffectDataFetching/> */}

    
  {/* <UserContext.Provider value={'Tejasri'}>
      <ChannelContext.Provider value={'Context Learning'}>
        <ComponentC/>
        </ChannelContext.Provider> 
      </UserContext.Provider>
   */}  
    
    {/* <CounterOne/> */}
    {/* <CounterTwo/> */}
    {/* <CounterThree/> */}

    {/* <DataFetchingOne/> */}

    <DataFetchingTwo/>

    </div>
  );
}

export default App;
