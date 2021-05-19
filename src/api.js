//base url
const base_url='https://api.rawg.io/api/'
const key='key=fd0e14baee5444dea0aecbe2dcaee475&'

//getting the date
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
    if(month<10){
        return `0${month}`
    }else{
        return month;
    }

}

const getCurrentDay=()=>{
    const date=new Date().getDate();
    if(date<10){
        return `0${date}`
    }else{
        return date;
    }

}

//curent day/month/year
const currentYear=new Date().getFullYear(); 
const currentDay=getCurrentDay();
const currentMonth=getCurrentMonth();
const currentDate= `${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`
//popular games
const popular_games =`games?${key}dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games=`games?${key}dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames= `games?${key}dates=${lastYear},${currentDate}&ordering=-released&page_size=10;`

 export const popularGamesURL=()=> `${base_url}${popular_games}`
 export const upcomingGamesURL =()=> `${base_url}${upcoming_games}`
 export const newGamesURL=()=> `${base_url}${newGames}`
 //console.log(upcoming_gamesURL())
//https://api.rawg.io/api/games?key=fd0e14baee5444dea0aecbe2dcaee475&dates=2019-09-01,2019-09-30&ordering=-rating&page_size=1
