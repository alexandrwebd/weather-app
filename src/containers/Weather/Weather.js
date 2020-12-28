import React, { Component } from 'react'
import classes from './Weather.module.css'
import WeatherData from '../../components/WeatherData/WeatherData'
import Search from '../../components/UI/Search/Search'
import Button from '../../components/UI/Button/Button'

class Weather extends Component {
  constructor() {
    super()
    this.state = {
      apiKey: '3973ec5b6aabb9ef7cef4218ddfc3c41',
      cityId: '703448',
      cityName: '',
      data: [],
      isLoaded: false,
      error: null,
      inputVal: '',
      temp: '',
      description: '',
      icons: null,
      weatherList: [],
    }
  }

  searchHahdler = () => {
    if (this.state.inputVal !== '') {
      this.setState({
        cityName: this.state.inputVal,
        isLoaded: false,
      })
    }
    this.render()
  }
  searchChang = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate() {
    if (this.state.cityName !== '' && !this.state.isLoaded) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${this.state.apiKey}`
      )
        .then((respons) => respons.json())
        .then((data) => {
          if (data) {
            this.setState({
              temp: Math.round(data.main.temp - 273),
              description: data.weather[0]['description'],
              isLoaded: true,
              inputVal: '',
            })

            this.getWeatherList(data)
          }
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error,
          })
        })
    }
  }

  // правильное обновление сложного стейта
  getWeatherList(data) {
    // список иконок погоды

    this.setState((state) => {
      return {
        weatherList: [
          {
            time: 9,
            icons: `http://openweathermap.org/img/w/${data.weather[0]['icon']}.png`,
            temperature: Math.round(data.main.temp - 273),
            id: 1,
          },
          {
            time: 12,
            icons: `http://openweathermap.org/img/w/${data.weather[0]['icon']}.png`,
            temperature: Math.round(data.main.temp - 273),
            id: 2,
          },
          {
            time: 18,
            icons: `http://openweathermap.org/img/w/${data.weather[0]['icon']}.png`,
            temperature: Math.round(data.main.temp - 273),
            id: 3,
          },
        ],
      }
    })
  }

  fetchData() {
    if (this.state.cityName !== '') {
      return fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${this.state.apiKey}`
      )
        .then((respons) => respons.json())
        .then((data) => {
          this.setState({
            data: data,
            temp: Math.round(data.main.temp - 273),
            description: data.weather[0]['description'],
            isLoaded: true,
          })

          this.getWeatherList(data)
        })
        .catch((error) => {
          console.log(error)
          this.setState({
            isLoaded: true,
            error,
          })
        })
    } else {
      return null
    }
  }

  render() {
    return (
      <div className={classes.Weather}>
        <div className={classes.WeatherSearch}>
          <Search
            searchChanget={this.searchChang}
            value={this.state.inputVal}
          />
          <Button onClick={this.searchHahdler.bind(this)} />
        </div>
        <WeatherData
          temperature={this.state.temp}
          city={this.state.cityName}
          description={this.state.description}
          weather={this.state.weatherList}
        />
      </div>
    )
  }
}

export default Weather
