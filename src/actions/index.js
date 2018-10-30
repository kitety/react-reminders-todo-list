import { ADD_REMINDER } from '../constants.js';
export const addReminder = (text) => {
  return {
    type: ADD_REMINDER,
    text
  }
}
