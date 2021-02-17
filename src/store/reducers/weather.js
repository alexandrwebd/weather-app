import {
  CHENG_INPUT_VALUE, FETCH_WEATHER_ERROR, SET_STATE_FETCH_DATA,
  SET_STATE_INPUT_VALUE, SET_STATE_WEATHER_LIST,
} from '../actions/actionTypes'

const initialState = {
  apiKey: '3973ec5b6aabb9ef7cef4218ddfc3c41',
  cityId: '703448',
  // нужно изменить на автоматическое получение города
  cityName: 'Чернигов',
  data: [],
  isLoaded: false,
  error: null,
  inputVal: '',
  temp: '',
  description: '',
  icons: null,
  weatherList: [],
}

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE_INPUT_VALUE:
      return {
        ...state,
        cityName: action.inputVal,
        isLoaded: false,
      }
    case CHENG_INPUT_VALUE:
      return {
        ...state,
        inputVal: action.inputVal,
      }
    case SET_STATE_FETCH_DATA:
      return {
        ...state,
        temp: action.temp,
        description: action.description,
        isLoaded: true,
        inputVal: ''
      }
    case SET_STATE_WEATHER_LIST:
      return {
        ...state,
        weatherList: action.weatherList
      }
    case FETCH_WEATHER_ERROR:
      return {
        ...state, isLoaded: false, error: action.error
      }

    default:
      return state
  }
}
