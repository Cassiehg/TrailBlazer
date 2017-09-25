import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FontIcon from 'material-ui/FontIcon'
import './basics.css'

class SearchBar extends Component {
  render() {
    return (
      <div style={styles.container}>
        <FontIcon className="material-icons" style={styles.icon}>
          search
        </FontIcon>
        <input style={styles.input} type="text" placeholder="Enter an adress" />
        <FontIcon className="material-icons" style={styles.icon}>
          more_vert
        </FontIcon>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400
  },
  input: {
    border: 'none',
    color: 'black',
    opacity: 0.87,
    marginLeft: 5,
    marginRight: 5,
    width: '100%'
  },
  icon: {
    color: 'black',
    opacity: 0.54
  }
}

export { SearchBar }
