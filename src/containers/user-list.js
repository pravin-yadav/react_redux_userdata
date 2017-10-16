import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'

class Userlist extends Component {
  createItemList () {
    return this.props.users.map(user => {
      return (
        <div
          key={user.id}
          className='username'
          onClick={() => this.props.selectUser(user)}
        >
          {' '}{user.first} {user.last}
        </div>
      )
    })
  }
  render () {
    return (
      <div>
        <span className='userlist'>
          {this.createItemList()}
        </span>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Userlist)
