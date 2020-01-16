import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
//import {Draggable,Droppable} from 'react-drag-and-drop';
import Todo from './components/Todo.js';
import PlannerModal from './components/Modal.js';

const App = () => {
  const [click,setClick] = useState(false);

    return (
      <div className="App">
        <h1>Weekly Planner</h1>
        <button 
          onClick={ e => {
            e.preventDefault();
            setClick(true);
          }
        }>+ Add +</button>
        {click? (
          <PlannerModal/>
        ):null}
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

export default App;
