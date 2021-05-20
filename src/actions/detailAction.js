import axios from 'axios'
import {gamesDetailsURL,gamesScreenshotURL} from '../api'
 export const loadDetail =(id)=>async (dispatch)=>{
  
      const detailData=await axios.get(gamesDetailsURL(id))
      const screenshotData=await axios.get(gamesScreenshotURL(id))  
      //console.log('detailData.dataU',gamesDetailsURL(id))
      //console.log('screenshotData.data',screenshotData.data)
      dispatch({
        type:'GET_DETAIL',
        payload:{
            game:detailData.data,
              screen:screenshotData.data,
        }
    })
}

