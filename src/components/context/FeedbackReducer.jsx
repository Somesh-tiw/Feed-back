export const FeedbackReducer=(state,action)=>{
    switch(action.type){
        case "ADD_FEEDBACK":
            return{
                ...state,
                feedback:[action.payload,...state.feedback]
            }
        case "REMOVE_FEEDBACK":
            return{
             ...state,
             feedback:state.feedback.filter((item)=>item.id!==action.payload)

            }    
            case "EDIT_FEEDBACK":
                return{
                 ...state,
                 edit:{feedback:action.payload,isedit:true}
    
                } 
                case "UPDATE_FEEDBACK":
                    return{
                     ...state,
                     feedback:state.feedback.map((item)=>item.id===action.payload.id?action.payload:item),
                     edit:{feedback:{},isedit:false}
        
                    }          
    

        default:
            return state
    }
}