import React from 'react'
import classes from './WeatherData.module.css'
import WeatherList from '../WeatherList/WeatherList'

const WeatherData = (props) => {
  const cls = []

  if (props.temperature !== '') {
    cls.push('WeatherGradus')
  }

  return (
    <div className={classes.WeatherData}>
      <h3 className={classes.WeatherCity}>{props.city}</h3>
      <div className={classes.WeatherGradusWrapper}>
        <p className={classes.WeatherGradus}>{props.temperature}</p>
        <p>{props.description}</p>
      </div>
      <WeatherList weather={props.weather} />
    </div>
  )
}

export default WeatherData
