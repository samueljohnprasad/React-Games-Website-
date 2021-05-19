import axios from 'axios'
import {popularGamesURL,upcomingGamesURL,newGamesURL} from '../api'


//action creator

export const loadGames=()=> async (dispatch)=>{
    //fetch axios
    const popularData=await axios.get(popularGamesURL())
    const newGamesData=await axios.get(newGamesURL())
    const upcomingData=await axios.get(upcomingGamesURL())
    //console.log(popularData.data.results)
    dispatch ({
        type:'FETCH_GAMES',
        payload:{
            popular:popularData.data.results,
            upcoming:upcomingData.data.results,
            newGames:newGamesData.data.results,
        }
    })
}
