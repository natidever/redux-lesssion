import { BUY_CAKE } from "./constant"
const initialState={
    numberOfCake:10
}

const cakeReducer =(state=initialState , action)=>{
    switch(action.type){
       case BUY_CAKE: return{
        ...state,
        numberOfCake:state.numberOfCake-1
       }
       default :state
    }
}

export default cakeReducer