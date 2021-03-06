import './App.css';
import React,{ PureComponent } from 'react';
import axios from 'axios';
import WeatherInfo from './Weather/WeatherInfo/WeatherInfo';
import Search from './Weather/SearchCity/Search';
import  { WeatherProvider } from './AppContext';


class App extends PureComponent {
  constructor(props) 
  {
    super(props)
  
    this.state = 
    {
      enterCity:false ,
      city:'',
      list:[],
      indexList:0,
      errorMsg:''
    };
  }
  ShowForecast=(index)=>
  {
    this.setState({
      indexList:index
    })
  }
  handleSearchAgain =()=>
  {
    let enterCity=this.state.enterCity
    this.setState({
      enterCity:!enterCity
    })
  }
  handleSubmit=(e)=>
  {
    e.preventDefault();
    let enterCity=this.state.enterCity
    let city=e.target.city.value.trim()
    city===""? 
    enterCity=false 
    :this.setState({
      enterCity:!enterCity,
      city:city
    })
  }  
  componentDidUpdate()
  {
    const apiKey='c00cca645196f43959e6a78d0ae0bdaa'
    let {city} = this.state
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
    .then(res=>
      this.setState({
        list : res.data.list
      },console.log(this.state.list)))
    .catch(err=>
      this.setState({
        errorMsg:'please make sure of city and your connection to network'
      })) 
  }
  SeacrhCity()
  {
    return(
      <Search onSubmit={this.handleSubmit}/>
    )
  }
  WeatherInfo()
  {
    let {list,city,indexList,errorMsg}=this.state
    var week=['Monday','Tuesday','Wensday','Thursday','Friday','Saturday','Sunday']
    return(
      <WeatherProvider value={({'indexList':indexList,
       'ShowForecast':this.ShowForecast,
        'city':city, 'week':week})}>
        {errorMsg===''?
        <WeatherInfo 
        onClick={this.handleSearchAgain}
        list={list}
        indexList={indexList}
        city={city}
        />:<div className="error">{errorMsg}</div>}
      </WeatherProvider>
    )
  }
  render(){
    let enterCity=this.state.enterCity
    return (
      <div className="App">
        {enterCity? this.WeatherInfo() : this.SeacrhCity()}
      </div>
    );
  }
}

export default App;
