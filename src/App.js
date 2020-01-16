import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
//import {Draggable,Droppable} from 'react-drag-and-drop';
import Todo from './components/Todo.js';
import Modal from './components/Modal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {
        todo: {},
        shoppingList: {},
        laundry:{},
        appointment:{}
      }
    };
  }


  componentDidMount(){
    console.log(this.state)
    console.log('hi')
  };

  render(){
    return (
      <div className="App">
        <h1>Weekly Planner</h1>
        <button onClick={}>+ Add +</button>
        <div>
          <table>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thur</th>
              <th>Fri</th>
            </tr>
            <tr>
              <td>
                <Todo/>
              </td>
              <td>

              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>  
        </div>
      </div>
    );

  }
  
  
}

export default App;
