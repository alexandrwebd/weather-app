// action creators
import {
  SET_STATE_INPUT_VALUE,
  CHENG_INPUT_VALUE,
  SET_STATE_FETCH_DATA,
  SET_STATE_WEATHER_LIST, FETCH_WEATHER_ERROR
} from './actionTypes'


// сохраняет значение инпута
export function saveInputValue(inputVal) {
  return {
    type: SET_STATE_INPUT_VALUE,
    inputVal,
  }
}

// сохраняет введенное значение в инпут
export function searchChang(e) {
  return {
    type: CHENG_INPUT_VALUE,
    inputVal: e.target.value.trim(),
  }
}

// получает данные по API и отрисовывает
export function setStateFetchWeather(data) {
  return {
    type: SET_STATE_FETCH_DATA,
    temp: Math.round(data.main.temp - 273),
    description: data.weather[0]['description'],
  }
}

// возвращает список иконок с прогнозом
export function setStateWeatherList(weatherList) {
  return {
    type: SET_STATE_WEATHER_LIST,
    weatherList
  }
}

// обрабатывает ошибки
export function fetcWeatherError(e) {
  return {
    type: FETCH_WEATHER_ERROR,
    error: e
  }
}

// сохраняет значение инпута
export function searchHahdler() {
  return (dispatch, getState) => {
    const {inputVal} = getState().weather

    if (inputVal !== '') {
      dispatch(saveInputValue(inputVal))
    }
  }
}

// возвращает список иконок с прогнозом
export function getWeatherList(data) {
  return dispatch => {
   const weatherList = [
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
          ]
    dispatch(setStateWeatherList(weatherList))
  }
}


// получает данные по API и отрисовывает
export function fetchData() {
  return async (dispatch, getState) => {

    const {cityName, apiKey, isLoaded} = getState().weather
    if (cityName !== '' && !isLoaded) {
      try {
        return await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
        )
            .then((respons) => respons.json())
            .then((data) => {
              // диспатчим данные погоды
              dispatch(setStateFetchWeather(data))
              // диспатчим список иконок погоды
              dispatch(getWeatherList(data))
            })
      } catch (e) {
        dispatch(fetcWeatherError(e))
      }
    } else {
      return null
    }
  }
}


