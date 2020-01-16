import React from 'react';
import './App.css';
import axios from 'axios';
import {Draggable,Droppable} from 'react-drag-and-drop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
        <div>
          <table>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
            <tr>
              <td>
                <div>hi</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
                <div>yo</div>
              </td>
              <td>
                <div>a</div>
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
