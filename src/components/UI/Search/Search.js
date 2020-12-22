import React from 'react'
import classes from './Search.module.css'

const Search = (props) => {
  return (
    <input
      className={classes.Search}
      type="text"
      placeholder={'Введите город'}
    />
  )
}

export default Search
