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
      cityName: 'Чернигов',
      data: [],
      isLoaded: false,
      error: null,
      inputVal: '',
      temp: '',
      description: '',
      icons: null,
      weatherList: [
        { time: 9, icons: '', temperature: 2, id: 1 },
        { time: 12, icons: '', temperature: 5, id: 2 },
        { time: 15, icons: '', temperature: 7, id: 3 },
        { time: 18, icons: '', temperature: 10, id: 4 },
      ],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  getWeatherList(data) {
    // список иконок погоды
    const weathers = [...this.state.weatherList]
    weathers.push({
      time: 9,
      icons: `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png" alt="weather" />`,
      id: 1,
    })
    this.setState((state) => ({
      weathers,
    }))
  }

  fetchData() {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=${this.state.apiKey}`
    )
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data)
        this.setState({
          data: data,
          temp: Math.round(data.main.temp - 273),
          description: data.weather[0]['description'],
          isLoadet: true,
        })

        this.getWeatherList()
        // this.state.weatherList.map((item, index) => {
        //   this.setState({
        //     time: 9,
        //     icons: `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png" alt="weather" />`,
        //     temperature: this.state.temp,
        //     id: index,
        //   })
        // })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isLoader: true,
          error,
        })
      })
  }

  searchHahdler = () => {
    if (this.state.inputVal !== '') {
      this.setState({ cityName: this.state.inputVal })
    }
    this.render()
  }
  searchChang = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    const { error, isLoaded, data } = this.state
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
