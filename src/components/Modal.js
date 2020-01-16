import React, {useState} from 'react';
import Modal from 'react-modal';
import '../App.css';

const PlannerModal = (props) => {
  const [type, setType] = useState('');
  const [day, setDay] = useState('')
  const [list, setList] = useState([]);
  const [content,setContent] = useState('');
  const [modalIsOpen, toggleModal] = useState(true);

  const closeModal = (e) => {
    toggleModal(false);
    props.setClick(false);
  }

  // const handleInputChange = (e) => {

  // }
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
            <span onClick={addOne}>+</span>
          </div>
  } else if(type === 'laundry') {
    edit = <div></div>
  }

  return (
    <Modal
      isOpen = {modalIsOpen}
      onRequestClose = {closeModal}
      contentLabel = 'Add Event Modal'
    >
      <select onChange={e=>{setType(e.target.value)}}>
        <option>Select Tasks</option>
        <option value='todo'>Todo</option>
        <option value='shoppingList'>Shopping List</option>
        <option value='laundry'>Laundry</option>
      </select>
      <select onChange={e=>{setDay(e.target.value)}}>
        <option>Select A Day</option>
        <option value='mon'>Mon</option>
        <option value='tue'>Tue</option>
        <option value='wed'>Wed</option>
        <option value='mon'>Thur</option>
        <option value='tue'>Fri</option>
      </select>
      <ul>
        {list.map(item => {
          return <li>{item}</li>
        })}
      </ul>
      {edit}
      <button>Submit</button>


    </Modal>
  )

}

export default PlannerModal;