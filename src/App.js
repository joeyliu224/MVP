import React,{useState,useEffect} from 'react';
import './App.css';
import {Draggable,Droppable} from 'react-drag-and-drop';
import axios from 'axios';
import PlannerModal from './components/Modal.js';

const App = () => {
  const [click,setClick] = useState(false)
  const [todos,setTodos] = useState([])
  const [mon,setmon] = useState({})
  const [tue,settue] = useState({})
  const [wed,setwed] = useState({})
  const [thur,setthur] = useState({})
  const [fri,setfri] = useState({})
  const [temp,clearTemp] = useState({})
  


  // useEffect(() => {
     
  // }, []);
  let days = [mon,tue,wed,thur,fri];
  let taskTodo = (day) => (<div className='todos'>
    {day.list !== undefined? <div>Todos:</div>:null}
    {day.list !==undefined? day.list.map(l=> {
      return (
        <label className='container'>
          <input type="checkbox"/>
          <span className='checkmark'></span>
          {l}
        </label>
    )
    }):null}
  </div>)
  let taskLaundry = (day) => (
    <div className='laundry'>
      {day.laundry !== undefined ? 
        <div>
          <img src=''/>
          <div>@{day.laundry}</div>
        </div>
        :null
      }
    </div>
  )    

  const handleDelete = (e) => {
    console.log(e.target.name)
    
  }
  

    return (
      <div className="App">
        <h1>Weekly Planner</h1>
        <button 
          onClick={ e => {
            e.preventDefault();
            setClick(true);
          }
        }>+ Add +</button>
        {click? 
          <PlannerModal 
            setClick={setClick}
            todos={todos}
            setTodos={setTodos}
            setmon={setmon} mon={mon}
            settue={settue} tue={tue}
            setwed={setwed} wed={wed}
            setthur={setthur} thur={thur}
            setfri={setfri} fri={fri}
          />
        :null}
        <div>
          <table>
            <tr>
              <th>Mon<span name='mon'className='delete'>delete</span></th>
              <th>Tue<span name='tue'className='delete'>delete</span></th>
              <th>Wed<span name='wed'className='delete'>delete</span></th>
              <th>Thur<span name='thur'className='delete'>delete</span></th>
              <th>Fri<span name='fri'className='delete'>delete</span></th>
            </tr>
            <tr>
              <td>
                {taskTodo(days[0])}
                {taskLaundry(days[0])}
              </td>
              <td>
                {taskTodo(days[1])}
                {taskLaundry(days[1])}
              </td>
              <td>
                {taskTodo(days[2])}
                {taskLaundry(days[2])}
              </td>
              <td>
                {taskTodo(days[3])}
                {taskLaundry(days[3])}
              </td>
              <td>
                {taskTodo(days[4])}
              </td>
            </tr>
          </table>  
        </div>
      </div>
    );
    
  
  
  
}

export default App;
