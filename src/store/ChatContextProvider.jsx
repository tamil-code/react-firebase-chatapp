import React from 'react'
import { useReducer } from 'react';
import {useSelector} from 'react-redux'
export const Chatcontext = React.createContext();
export const ChatContextProvider = ({children}) => {
  const currentUser = useSelector(state=>state.auth.currentUser);
    const INITIAL_STATE ={
       chatId:'null',
       user:{}
    }
    const chatReducer = (state,action)=>{
        switch (action.type) {
            case "CHANGE_USER":
                return{
                    user:action.payload,
                    chatId:currentUser.uid > action.payload.uid ? currentUser.uid+action.payload.uid :action.payload.uid +currentUser.uid
                }
        
            default:
               return state;
        }
    }
    const[state,dispatch] = useReducer(chatReducer,INITIAL_STATE);
    return (
        <Chatcontext.Provider value={{data:state,dispatch}}>{children}</Chatcontext.Provider>
        )
    }
    
export default ChatContextProvider 