import React from 'react'
import { UserContext ,ChannelContext} from '../App'


const ComponentF = () => {
  return (
    <div>
       <UserContext.Consumer>
        {
            user=>{
                return (
                    <ChannelContext.Consumer>
                        {channel =>{
                          return(
                            <div>
                                User Context value {user}, ChannelContext Value {channel}
                            </div>
                          )
                        }
                        }
                    </ChannelContext.Consumer>
                   
                )
               
            }
        }
       </UserContext.Consumer>
    </div>
  )
}

export default ComponentF

//Step1 : Created a context using CreateContext method
//Step2 : Provided a context value at high level in the component tree
//Step3 : Consume the context value using render props pattern.