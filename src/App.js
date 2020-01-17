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
  //const [del,rec] = useState(false)
  


  useEffect(() => {
    setTimeout(function(){
      if(del) {
        clearTemp({});
      }    
    },4000)
  },[]);
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
              <th>Mon
                <span className='delete' onClick={()=>{clearTemp(mon);setmon({})}}>❌</span>
                <span className='delete' onClick={()=>{setmon(temp);clearTemp({})}}>R</span>
              </th>
              <th>Tue
                <span className='delete' onClick={()=>{clearTemp(tue);settue({})}}>❌</span>
                <span className='delete' onClick={()=>{settue(temp);clearTemp({})}}>R</span>
              </th>
              <th>Wed
                <span className='delete' onClick={()=>{clearTemp(wed);setwed({})}}>❌</span>
                <span className='delete' onClick={()=>{setwed(temp);clearTemp({})}}>R</span>
              </th>
              <th>Thur
                <span className='delete' onClick={()=>{clearTemp(thur);setthur({})}}>❌</span>
                <span className='delete' onClick={()=>{setthur(temp);clearTemp({})}}>R</span>
              </th>
              <th>Fri
                <span className='delete' onClick={(e)=>{clearTemp(fri);setfri({})}}>❌</span>
                <span className='delete' onClick={()=>{setfri(temp);clearTemp({})}}>R</span>
              </th>
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
