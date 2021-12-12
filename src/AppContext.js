import React from "react"
const WeatherContext=React.createContext({
    'indexList':0,
    'ShowForecast':()=>{},
    'city':'', 'week':''
})
const WeatherProvider=WeatherContext.Provider
const WeatherConsumer=WeatherContext.Consumer

export default WeatherContext
export {WeatherProvider,WeatherConsumer}