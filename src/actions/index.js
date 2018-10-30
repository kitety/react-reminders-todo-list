import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants.js';
export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
    dueDate
  }
}
export const deleteReminder = (id) => {
  return {
    type: DELETE_REMINDER,
    id
  }
}
export const clearReminders = (id) => {
  return {
    type: CLEAR_REMINDER
  }
}


