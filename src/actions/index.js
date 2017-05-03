  /**
 * Created by rohail on 4/19/17.
 */

import {ADD_REMINDER,DELETE_REMINDER,DELETE_ALL} from '../constants'

export const addReminder = (text,dueDate) => {
    const action = {
        type : ADD_REMINDER,
        dueDate,
        text
    }
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type : DELETE_REMINDER,
        id
    }
    return action;
}

export const deleteAllReminders = () => {
  const action = {
    type : DELETE_ALL
  }
  return action;
}