import React from 'react'
import classes from './WeatherList.module.css'
import WeatherItem from './WeatherItem/WeatherItem'

const WeatherList = (props) => {
  return (
    <ul className={classes.WeatherIconsItems}>
      {props.weather.map((weather, index) => {
        return <WeatherItem key={index} weather={weather} />
      })}
    </ul>
  )
}

export default WeatherList
