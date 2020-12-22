import React from 'react'
import classes from './WeatherData.module.css'
import WeatherList from '../WeatherList/WeatherList'

const WeatherData = (props) => {
  return (
    <div className={classes.WeatherData}>
      <h3 className={classes.WeatherCity}>{props.city}</h3>
      <div className={classes.WeatherGradusWrapper}>
        <p className={classes.WeatherGradus}>{props.temperature}</p>
        <p>холодно</p>
      </div>
      <WeatherList weather={props.weather} />
    </div>
  )
}

export default WeatherData
