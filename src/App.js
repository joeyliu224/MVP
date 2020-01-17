import React,{useState,useEffect} from 'react';
import './App.css';
//import {Draggable,Droppable} from 'react-drag-and-drop';
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
      if(JSON.stringify(temp)!==JSON.stringify({})) {
        clearTemp({});
      }    
    },4000)
  },[temp]);

  const allowDrop = (e) => {
    e.preventDefault();
  }
  const drag = (e,mon) => {
    e.dataTransfer.setData('text', e.target.id);
  }
  const drop = (e,tue) => {
    e.preventDefault();
    var data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
    console.log(data)
    //settue(Object.assign(mon))
  }

  let days = [mon,tue,wed,thur,fri];
  let taskTodo = (day) => (
    <div className='todos' draggable='true' ondragstart={(e)=>drag(e,mon)} id='todo'>
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
    <div className='laundry' draggable='true'>
      {day.laundry !== undefined ? 
        <div>
          <div className='emoji'>🧺Laundry</div>
          <div className='subtext'>@{day.laundry}</div>
        </div>
        :null
      }
    </div>
  )    
  let taskDating = (day) => (
    <div className='dating' draggable='true'>
      {day.dating !== undefined ? 
        <div>
          <div className='emoji'>💘Dating💘</div>
          <div className='subtext'>with {day.dating[0]}</div>
          <div className='subtext'>@{day.dating[1]}</div>
          <div className='reminder'>Reminder:<mark>{day.dating[2]}</mark></div>
        </div>
        :null
      }
    </div>
  )    
  

    return (
      <div className="App">
        <h1>Weekly Planner</h1>
        <button 
          className='add'
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
            className='modal'
          />
        :null}
        <div>
          <table>
            <tr>
              <th>Mon
                <span className='delete' onClick={()=>{clearTemp(mon);setmon({})}}>🗑</span>
                <span className='delete' onClick={()=>{setmon(temp);clearTemp({})}}>R</span>
              </th>
              <th>Tue
                <span className='delete' onClick={()=>{clearTemp(tue);settue({})}}>🗑</span>
                <span className='delete' onClick={()=>{settue(temp);clearTemp({})}}>R</span>
              </th>
              <th>Wed
                <span className='delete' onClick={()=>{clearTemp(wed);setwed({})}}>🗑</span>
                <span className='delete' onClick={()=>{setwed(temp);clearTemp({})}}>R</span>
              </th>
              <th>Thur
                <span className='delete' onClick={()=>{clearTemp(thur);setthur({})}}>🗑</span>
                <span className='delete' onClick={()=>{setthur(temp);clearTemp({})}}>R</span>
              </th>
              <th>Fri
                <span className='delete' onClick={(e)=>{clearTemp(fri);setfri({})}}>🗑</span>
                <span className='delete' onClick={()=>{setfri(temp);clearTemp({})}}>R</span>
              </th>
            </tr>
            <tr>
              <td>
                {taskTodo(mon)}
                {taskLaundry(mon)}
                {taskDating(mon)}
              </td>
              <td id='tue' ondrop={(e)=>drop(e,tue)} ondargover={(e)=>allowDrop(e)}>
                {taskTodo(days[1])}
                {taskLaundry(days[1])}
                {taskDating(tue)}
              </td>
              <td>
                {taskTodo(days[2])}
                {taskLaundry(days[2])}
                {taskDating(wed)}
              </td>
              <td>
                {taskTodo(days[3])}
                {taskLaundry(days[3])}
                {taskDating(thur)}
              </td>
              <td>
                {taskTodo(days[4])}
                {taskLaundry(fri)}
                {taskDating(fri)}
              </td>
            </tr>
          </table>  
        </div>
      </div>
    );
    
  
  
  
}

export default App;
