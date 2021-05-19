/// reduce multiple reducers into single reducer

import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer'

const initState={
    name:'',
    isLogged:false,
}
const userReducer =(state=initState,action )=>{
           switch(action.type){
                default:
                    return {...state}
           } 
}





const rootReducer =combineReducers({
    games:gamesReducer,  //can give any name
    user:userReducer
})

export default rootReducer