import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants.js';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

const reminder = (action) => {
  const { text, dueDate } = action;
  return {
    text: text,
    id: Math.random(),
    time: dueDate
  }
}
// 这里要用数组 因为使用的数组遍历
const reminders = (state = read_cookie('reminders')||[], action = {}) => {
  let reminders = null
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [
        ...state,
        reminder(action)
      ]
      bake_cookie('reminders', reminders)
      return reminders
    case DELETE_REMINDER:
      reminders = state.filter(ele => ele.id !== action.id)
      bake_cookie('reminders', reminders)

      return reminders
    case CLEAR_REMINDER:
      reminders = []
      bake_cookie('reminders', reminders)
      return reminders
    default:
      return state;
  }
};
export default reminders;
