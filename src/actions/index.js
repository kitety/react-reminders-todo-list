import { ADD_REMINDER } from '../constants.js';
export const addReminder = (text, dueDate) => {
  return {
    type: ADD_REMINDER,
    text,
     dueDate
  }
}
