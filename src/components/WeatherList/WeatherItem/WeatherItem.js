import React from 'react'
import classes from './WeatherItem.module.css'

const WeatherItem = (props) => {
  return (
    <li className={classes.WeatherItem}>
      <p className={classes.WeatherTime}>{props.weather.time}</p>
      <div className={classes.WeatherImg}>
        <img src="" alt="weather" />
      </div>
      <p className={classes.WeatherGradus}>{props.weather.temperature}</p>
    </li>
  )
}
export default WeatherItem
