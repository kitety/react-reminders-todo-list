import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addReminder } from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addRemind() {
    this.props.addReminder(this.state.text);
  }
  renderReminders() {
    const { remidners } = this.props
    // console.log(this.props);
    return (
      <ul className="list-group col-sm-8 mt-2">
        {
          remidners.map(reminder => {
            return (
              <li className="list-group-item" key={reminder.id}>
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>time</em></div>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addRemind()}
          > Add Reminder</button>
        </div>
        {this.renderReminders()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  // 把state给this.props的remidners
  //如果不知道是什么值,就先打印一遍
  return {
    remidners: state
  }
}
export default connect(mapStateToProps, { addReminder })(App);
