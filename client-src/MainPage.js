import React from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './selectors/mainPage'
import { login, changeTeamName } from './actions'

const MainPage = React.createClass({
  render: function () {
    var {dispatch} = this.props

    if(!this.props.token)
      return (
        <div className='form'>
          <div className='form-group'>
            <label className='control-label col-sm-3'>Team Name</label>
            <div className='col-sm-9'>
              <input type='text' placeholder='Enter your team name here' name='username' className='form-control' value={this.props.teamName} onChange={e => dispatch(changeTeamName(e.target.value))} />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-3 col-sm-9'>
              <input className='btn' type='submit' value='Login' isActive={this.props.pending} onClick={() => dispatch(login(this.props.teamName))} />
            </div>
          </div>
        </div>
      )

    return (
      <div>Hello {this.props.teamName}</div>
    )
  }
})

export default connect(mapStateToProps)(MainPage)
