import React, { Component} from "react"
import {connect} from "react-redux"
import {bindActionCreators}  from "redux"
import moment from "moment"
import {addReminder,deleteReminder,deleteAllReminders} from "../actions"

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : '',
            dueDate : ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text,this.state.dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }
  deleteAllReminders() {
        this.props.deleteAllReminders();
    }

    renderReminders(){
          const {reminders} = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div className="list-item delete-button"
                                     onClick={() => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render(){
        return(
            <div className="App">
                <div className="App-title">Reminder Pro</div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="i have to.."
                               onChange={event => this.setState({text : event.target.value})}
                        />
                        <input className="form-control"
                               type="datetime-local"
                               onChange={event => {
                                   this.setState({dueDate : event.target.value})}}
                        />
                    </div>
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                    <button type="button"
                            className="btn btn-danger"
                            onClick={() => this.deleteAllReminders()}
                    >
                        Delete Reminder
                    </button>
                </div>
                {this.renderReminders()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder,deleteReminder,deleteAllReminders},dispatch)
}

function mapStateToProps(state) {
    return {
        reminders  : state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)