import React,{ useEffect, useRef, useState } from 'react'


function ClassTimer() {

const [timer,setTimer] = useState(0)
const intervalref = useRef()

useEffect(()=>{
    intervalref.current = setInterval(()=>{
        setTimer(prevTime => prevTime + 1)
    },1000)

     return() =>{
        clearInterval(intervalref.current)
     }
},[])

  return (
    <div>
   {timer}
   <button onClick={()=> clearInterval(intervalref.current)}>Clear Timer</button>

    </div>
  )
}

export default ClassTimer