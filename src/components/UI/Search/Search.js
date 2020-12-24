import React from 'react'
import classes from './Search.module.css'

const Search = (props) => {
  return (
    <input
      className={classes.Search}
      placeholder={'Введите город'}
      onChange={props.searchChanget}
      value={props.value}
    />
  )
}

export default Search
