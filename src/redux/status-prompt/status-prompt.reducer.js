const INNITIAL_STATE={
    msg:"",
    display:false
}

const statusPromptReducer = (state = INNITIAL_STATE,action) => {
    switch (action.type) {
        case 'PROMPT_MSG':
          return{
              ...state,
              msg: action.payload,
              display: action.payload?true:false
          }  
          
    
        default:
            return state;
    }
}

export default statusPromptReducer;