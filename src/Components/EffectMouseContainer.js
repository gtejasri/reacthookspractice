//use effect with cleanup / componentwillmount

import React, { useState } from 'react'
import EffectHookMouse from './EffectHookMouse'

function EffectMouseContainer() {

  const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
        {display && <EffectHookMouse/>}

    </div>
  )
}

export default EffectMouseContainer