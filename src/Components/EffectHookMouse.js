//Run effects only once //componentDidmount 

import React, { useEffect, useState } from 'react'

function EffectHookMouse() {

    const[x,setX] = useState(0);
    const[y,setY] = useState(0);

    const logMousePosition = e =>{
      console.log('Mouse event')
      setX(e.clientX)
      setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mouseover',logMousePosition)

        return () =>{
          console.log('component unmounting code')
          window.removeEventListener('mousemove',logMousePosition)
        }
},[])

  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default EffectHookMouse