import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  render () {
    if (!this.props.user) {
      return (
        <div className='hint'> Please, click the tab to select the user</div>
      )
    }
    return (
      <div className='userdetail'>
        <img src={this.props.user.thumbnail} width={200} height={200} />
        <h2>
          {this.props.user.first} {this.props.user.last}
        </h2>
        <h3>
          Age: {this.props.user.age}
        </h3>
        <h3>
          Description: {this.props.user.description}
        </h3>
      </div>
    )
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps (state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)
