import { createContext, useReducer, useState } from "react";
import { FeedbackReducer } from "./FeedbackReducer";

 const FeedbackContext=createContext()

 export const FeedbackProvider=({children})=>{
    
    const initialState={
    feedback:[],
        edit:{feedback:{},isedit:false}
    }

    const [state,dispatch]=useReducer(FeedbackReducer,initialState)



   return(
    <FeedbackContext.Provider value={{...state,dispatch}}>
        {children}
        </FeedbackContext.Provider>
   )
  
   

 }
 export default FeedbackContext