import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addReminder, deleteReminder, clearReminders } from '../actions';
import PropTypes from 'prop-types';
import moment from 'moment';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }
  addRemind() {
    this.props.addReminder(this.state.text, this.state.dueDate);
    this.setState({
      text: '',
      dueDate: ''
    })
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  clearReminders() {
    this.props.clearReminders()
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
                  <div><em>{moment(new Date(reminder.time)).fromNow()}</em></div>
                </div>
                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>&#x2715;</div>
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
              className="form-control mr-2"
              placeholder="I have to..."
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}
            />
            <input
              type="datetime-local"
              className="form-control"
              value={this.state.dueDate}
              onChange={event => this.setState({ dueDate: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addRemind()}
          > Add Reminder</button>
        </div>
        {this.renderReminders()}
        <div className="btn btn-danger mt-3" onClick={() => this.clearReminders()}>Clear Reminders</div>
      </div>
    );
  }
}

App.propTypes = {
  remidners: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  clearReminders: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
  // console.log(state);
  // 把state给this.props的remidners
  //如果不知道是什么值,就先打印一遍
  return {
    remidners: state
  }
}
// 一定要传,不传不生效
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
