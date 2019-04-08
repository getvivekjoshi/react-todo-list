import React, { Component } from 'react';
import uuiid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



class App extends Component {
    render() {
        return (
            //test for netlifys
            <div className="App">
                <div className="container">
                    <div className="row">
                        <TodoInput />
                        <TodoList />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
