import React, {useState} from 'react';
import Modal from 'react-modal';
import '../App.css';
import axios from 'axios';

const PlannerModal = (props) => {
  const [type, setType] = useState('');
  const [day, setDay] = useState('')
  const [list, setList] = useState([]);
  const [content,setContent] = useState('');
  const [modalIsOpen, toggleModal] = useState(true);
  const [time,setTime] = useState('');
  const [name,setName] = useState('');
  const [reminder,setReminder] = useState('');

  const customStyles = {
    content: {
      top: '20%',
      left: '30%',
      right: '30%',
      bottom: '20%',
      // marginRight: '-50%',
      //transform: 'translate(-50%, -50%)'
    }
  };

  const closeModal = (e) => {
    toggleModal(false);
    props.setClick(false);
  }
  const map = {
    mon:'setmon',
    tue:'settue',
    wed:'setwed',
    thur:'setthur',
    fri:'setfri'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(type === 'todo') {
      props[map[day]](Object.assign(props[day],{list:list}))
    } else if (type === 'laundry') {
      props[map[day]](Object.assign(props[day],{laundry:time}))
    } else if (type === 'dating') {
      props[map[day]](Object.assign(props[day],{dating:[name,time,reminder]}))
    }
    
    closeModal(e);
  }
 const addOne = () => {
  setList(list.concat(content))
 }

  let edit = null;
  if(type === 'todo' || type === 'shoppingList'){
    edit = <div>
            <input 
              placeholder={type === 'todo'?
                            'add your todo here:':
                            'things to buy:'
                          }
              onChange={e => setContent(e.target.value)}/>
            <span onClick={addOne}><button>✔️</button></span>
          </div>
  } else if(type === 'laundry') {
    edit = <div className='fix'>
           Time:
            @<input
              placeholder='eg: 2pm'
              onChange={e => setTime(e.target.value)}/>
           </div>
  } else if(type === 'dating') {
    edit = <div className='fix'>
           with:<br/>
           <input
              placeholder='eg: Stephanie'
              onChange={e => setName(e.target.value)}/>
           <br/>
           Time:<br/>
          <input
              placeholder='eg: 2pm'
              onChange={e => setTime(e.target.value)}/>
          <br/>
           Reminder:<br/>
           <input
              placeholder='eg: wash hair'
              onChange={e => setReminder(e.target.value)}/>
           </div>
  }

  return (
    <Modal
      isOpen = {modalIsOpen}
      onRequestClose = {closeModal}
      contentLabel = 'Add Event Modal'
      ariaHideApp = {false}
      style={customStyles}
    >
      <select onChange={e=>{setType(e.target.value)}}>
        <option>Select Tasks</option>
        <option value='todo'>Todo</option>
        <option value='shoppingList'>Shopping List</option>
        <option value='laundry'>Laundry</option>
        <option value='dating'>Dating</option>
      </select>
      <select onChange={e=>{setDay(e.target.value)}}>
        <option>Select A Day</option>
        <option value='mon'>Mon</option>
        <option value='tue'>Tue</option>
        <option value='wed'>Wed</option>
        <option value='thur'>Thur</option>
        <option value='fri'>Fri</option>
      </select>
      <ul>
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
      {edit}
      <button className='submit' onClick={(e)=>{
        // e.preventDefault();
        handleSubmit(e)}}>Submit</button>


    </Modal>
  )

}

export default PlannerModal;