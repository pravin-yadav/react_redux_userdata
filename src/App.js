import React, { Component } from 'react'
import Userlist from './containers/user-list'
import UserDetail from './containers/user-detail'
import './styles/style.scss'

class App extends Component {
  render () {
    return (
      <div>
        <Userlist />

        <UserDetail />
      </div>
    )
  }
}

export default App
