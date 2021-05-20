/// reduce multiple reducers into single reducer

import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer'
import detailReducer from './detailReducer'

  



const rootReducer =combineReducers({
    games:gamesReducer,  //can give any name
     detail:detailReducer,
})

export default rootReducer

//const initState={
    //     name:'',
    //     isLogged:false,
    // }
    // const userReducer =(state=initState,action )=>{
    //            switch(action.type){
    //                 default:
    //                     return {...state}
    //            } 
    // }
    
    