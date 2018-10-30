import { ADD_REMINDER } from '../constants.js';

const reminder = (action) => {
  const { text, dueDate } = action;
  return {
    text: text,
    id: Math.random(),
    time: dueDate
  }
}
// 这里要用数组 因为使用的数组遍历
const reminders = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        reminder(action)
      ]
    default:
      return state;
  }
};
export default reminders;
