import { useContext } from "react"
import WeatherContext from "../../AppContext"
import './Forecast.css'

function Forecast({list}){
    const ShowForeCast=useContext(WeatherContext)
    return(
        <section className="Forecast-sec">
            {list.map((item,index) =>(
            <div className="Forecast-sec-item" onClick={()=>ShowForeCast.ShowForecast(index)} key={Math.random()*10}>
                {index < (ShowForeCast.indexList + 8)?
                <div>
                    <h3>
                        {new Date(item.dt_txt).getHours()+':'+ 
                        ('0' + new Date(item.dt_txt).getMinutes()).slice(-2) 
                        +':'+('0' + new Date(item.dt_txt).getSeconds()).slice(-2)
                        }
                    </h3>
                    <img 
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                    alt="Weather Status img"/>
                    <p>{Math.round(item.main.temp)}</p>
                </div>:null}
            </div>
            ))}
    </section>
    )
}
export default Forecast

