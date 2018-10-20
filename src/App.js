// import the library
import React, {Component} from 'react';

import Employee from './component/employee/employee';
import Login from './component/login/login';
import axios from 'axios';

// create the component
class App extends Component {

    state = {employees: [], user: '', password: '', loggedin: false, error: ''};

    componentWillMount() { //<---lifehook method
        axios.get('http://localhost:3004/employees').then((employees) => {
            console.log("Employees", employees);
            this.setState({employees: employees.data})
        });
    }

    changeNameHandler = (event, index) => {

        //console.log("Event111--->"+event.target.value,index);

        //copy the element
        const employees = [...this.state.employees];

        // change the value
        employees[index].name = event.target.value;
        //console.log(JSON.stringify(employees));

        // setting the changed state
        this.setState({employees: employees});
        //console.log(JSON.stringify(this.state));

    }

    changePositionHandler = (event, index) => {

        //console.log("Event111--->"+event.target.value,index);

        //copy the element
        const employees = [...this.state.employees];

        // change the value
        employees[index].position_held = event.target.value;
        //console.log(JSON.stringify(employees));

        // setting the changed state
        this.setState({employees: employees});
        //console.log(JSON.stringify(this.state));

    }

    deleteHandler = (index) => {
        //copy the element
        const employees = [...this.state.employees];

        // delete the element by index
        employees.splice(index, 1);

        // setting the changed state
        this.setState({employees: employees});
    }


    render() {

        const employees_jsx = (<div>
                {this.state.employees.map(
                    (employee, index) => <Employee name={employee.name}
                                                   deleteHandler={() => {
                                                       this.deleteHandler(index);
                                                   }}
                                                   date_of_birth={employee.date_of_birth}
                                                   position={employee.position_held}
                                                   changeNameHandler={(event) => {
                                                       this.changeNameHandler(event, index);
                                                   }}
                                                   changePositionHandler={(event) => {
                                                       this.changePositionHandler(event, index);
                                                   }}/>
                )}
            </div>
        );

        const style = {
            padding: '30px'
        };
        const logout_style = {
            display: 'block',
            margin: 'auto',
            marginRight: '0px'
        };

        if (this.state.loggedin) {
            return (<div style={style}>
                <button onClick={() => this.setState({loggedin: false})}
                        style={logout_style}>Logout
                </button>
                {employees_jsx}
            </div>)
        } else {
            return <div><Login username={this.state.user}
                               password={this.state.password}
                               error={this.state.error}
                               handleUsername={(event) => this.setState({user: event.target.value})}
                               handlePassword={(event) => this.setState({password: event.target.value})}
                               submit={() => {
                                   if (this.state.user === "user" &&
                                       this.state.password === "pass") {
                                       this.setState({loggedin: true});
                                   } else {
                                       this.setState({error: 'Not Valid User'});
                                   }
                               }
                               }
            /></div>;
        }


    }

}

// export the component
export default App;