import React from "react";
import Details from "../DetailsWeather/Details";
import Forecast from "../ForecastInfo/Forecast";
import './WeatherInfo.css';

function WeatherInfo({list,onClick,city})
{
    return(
      <section className="Weather-info" style={{'backgroundImage':"url('https://source.unsplash.com/1600x900/?" + city +"')"}}>  
        <section className="Weather-info-sec1">
          <h1>--Weather-ForeCast--</h1>
          {list.map((item,index) =>(
           <Details key={Math.random()*10} item={item} index={index}/>))}
        </section>
        <Forecast list={list}/>
        <button className="SearchAginbtn" onClick={onClick}>Search Again</button>
      </section>
    )
}
export default WeatherInfo