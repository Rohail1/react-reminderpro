import {ADD_REMINDER,DELETE_REMINDER,DELETE_ALL} from  "../constants"
import {bake_cookie, read_cookie } from 'sfcookies'
const reminder = (action) => {
  const {text,dueDate} = action;
  return {
    text,
    dueDate,
    id : Math.random()
  }

};

const removeReminder = (state = [], id) => {
  return state.filter(reminder => reminder.id !== id)
};


const reminders = (state = [], action) => {

  let reminders = null;
  state = read_cookie('reminders');
  let cookieExpiry = new Date();
  cookieExpiry = new Date(cookieExpiry.setDate(cookieExpiry.getDate() + 7));
  switch (action.type){
    case ADD_REMINDER:
      reminders = [...state,reminder(action)];
      bake_cookie('reminders',reminders,cookieExpiry);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeReminder(state,action.id);
      bake_cookie('reminders',reminders,cookieExpiry);
      return reminders;
    case DELETE_ALL:
      reminders = [];
      bake_cookie('reminders',reminders,cookieExpiry);
      return reminders;
    default:
      return state;
  }

};


export default reminders;