import React, { useContext } from "react"
import WeatherContext from "../../AppContext"
import './Details.css'


function Details({item,index})
{
  const Details=useContext(WeatherContext)
    return(
      <React.Fragment>
        {index === Details.indexList?
          <div className="Details-sec">
            <div className="Details-sec-img">
              <img
              src={`https://source.unsplash.com/1600x900/?${item.weather[0].main}`}
              alt=""/>
            </div>
            <div className="Details-sec1">
              <h3>{Details.city}</h3>
              <h4>{Details.week[new Date(item.dt_txt).getDay()]}</h4>
              <h4>
                {
                  ('0' + (new Date(item.dt_txt).getDay()+1)).slice(-2)+'/'+ ('0' + new Date(item.dt_txt).getMonth()).slice(-2) +'/'+new Date(item.dt_txt).getFullYear()
                }
              </h4>
              <h4>{`wind ${item.wind.speed} km/h`}</h4>
            </div>
            <div className="Details-sec2">
              <img width='100px' height='80px' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Status img"/>
              <p>{item.weather[0].description}</p>
            </div>
            <div className="Details-sec3">
              <p>
                <span className="temp-min">
                  {Math.round(item.main.temp_min)}
                  <i className="fas fa-arrow-up"></i>
                </span>
                <span>
                  {Math.round(item.main.temp_min)}
                  <i className="fas fa-arrow-down"></i>
                </span>
              </p>  
              <p>{Math.round(item.main.temp)}</p>
            </div>
          </div>
        :null}
      </React.Fragment>
    )
}
export default Details