//fetching all data with useEffect
//fetching data based on Id
//fetching data through button click


import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EffectDataFetching() {

//   const[posts,setPosts] = useState([])
  const[post,setPost] = useState({})
  const [id ,setId] = useState(1)
  const [idFromButtonClick,setIdFromButtonClick] = useState(1)

  const handleClick = () =>{
    setIdFromButtonClick(id)
  }

  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
        console.log(res)
       setPost(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
    
  },[idFromButtonClick])

  return (
    <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value) }/> 
        <button type= 'button' onClick={handleClick}>Fetch Post</button>
      {/* <ul>  
        {posts.map(post =>( <li key={post.id}>{post.title}</li> )) }
      </ul>  */}
     <div>{post.title}</div> 
    </div>
  )
}

export default EffectDataFetching