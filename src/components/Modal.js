import React, {useState} from 'react';
import Modal from 'react-modal';

const PlannerModal = (props) => {
  // const [addEvent, setEvent] = useState({
  //   day: '',
  //   type: '',
  //   content: '',
  // });
  const [modalIsOpen, toggleModal] = useState(true);

  const closeModal = (e) => {
    toggleModal(false);
    props.setClick(false);
  }

  // const handleInputChange = (e) => {

  // }

  return (
    <Modal
      isOpen = {modalIsOpen}
      onRequestClose = {closeModal}
      contentLabel = 'Add Event Modal'
    >
      <select>
        <option value='todo'>Todo</option>
        <option value='shoppingList'>Shopping List</option>
        <option value='landry'>Laundry</option>
      </select>

    </Modal>
  )

}

export default PlannerModal;