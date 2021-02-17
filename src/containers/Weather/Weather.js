import React, { Component } from 'react'
import classes from './Weather.module.css'
import WeatherData from '../../components/WeatherData/WeatherData'
import Search from '../../components/UI/Search/Search'
import Button from '../../components/UI/Button/Button'
import { connect } from 'react-redux'
import {searchHahdler, searchChang, fetchData} from '../../store/actions/weather'

class Weather extends Component {



  componentDidMount() {
    this.props.fetchData()
  }
  componentDidUpdate() {
    this.props.fetchData()
  }



  render() {
    const {inputVal,temp, cityName,description, weatherList} = this.props
    return (
      <div className={classes.Weather}>
        <div className={classes.WeatherSearch}>
          <Search
            searchChanget={this.props.searchChang}
            value={inputVal}
          />
          <Button onClick={this.props.searchHahdler} />
        </div>
        <WeatherData
          temperature={temp}
          city={cityName}
          description={description}
          weather={weatherList}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apiKey: state.weather.apiKey,
    cityId: state.weather.cityId,
    cityName: state.weather.cityName,
    data: state.weather.data,
    isLoaded: state.weather.isLoaded,
    error: state.weather.error,
    inputVal: state.weather.inputVal,
    temp: state.weather.temp,
    description: state.weather.description,
    icons: state.weather.icons,
    weatherList: state.weather.weatherList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchHahdler: () => dispatch(searchHahdler()),
    searchChang: (e) => dispatch(searchChang(e)),
    fetchData: () => dispatch(fetchData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather)
