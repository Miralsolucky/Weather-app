import { useState } from "react"
import InfoBox from "./infobox"
import SearchBox from "./searchbox"
export default function WeatherApp(){
    const [weatherInfo, setweatherInfo]= useState({
        city:"Thane",
        feelslike: 26.58,
        humidity: 34,
        temp: 26.99,
        tempMax: 26.99,
        tempMin: 26.99,
        weather: "clear sky"
    });


    let updateInfo=(newinfo)=>{
        setweatherInfo(newinfo);
        }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Miral</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}