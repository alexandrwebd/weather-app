import React, { Component } from 'react'
import classes from './Weather.module.css'
import WeatherData from '../../components/WeatherData/WeatherData'
import Search from '../../components/UI/Search/Search'
import Button from '../../components/UI/Button/Button'

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      cityOptions: {
        apiKey: '3973ec5b6aabb9ef7cef4218ddfc3c41',
        cityId: '703448',
        cityName: 'Чернигов',
      },
      inputVal: false,
      temp: '20',
      weatherList: [
        {
          time: 9,
          icons: '', // присваиваем setState
          temperature: 2,
          id: 1,
        },
        { time: 12, icons: '', temperature: 5, id: 2 },
        { time: 15, icons: '', temperature: 7, id: 3 },
        { time: 18, icons: '', temperature: 10, id: 4 },
      ],
    }
  }

  render() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state['cityOptions']['cityName']}&appid=${this.state['cityOptions']['apiKey']}`
    )
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data)
        this.setState({
          temp: Math.round(data.main.temp - 273),
          // weatherList: `http://openweathermap.org/img/w/${data.weather.icons}.png`,
        })
      })
    return (
      <div className={classes.Weather}>
        <div className={classes.WeatherSearch}>
          <Search />
          <Button />
        </div>
        <WeatherData
          temperature={this.state.temp}
          city={this.state['cityOptions'].cityName}
          weather={this.state.weatherList}
        />
      </div>
    )
  }
}

export default Weather
