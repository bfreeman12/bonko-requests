import { React, useState } from "react";
import Modal from 'react-modal';
import "../css/style.css";
import "../css/home.css";
import "../css/modal.css"

Modal.setAppElement('#root')


const BonkoModal = () => {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [ticketRequestTitle, setTicketRequestTitle] = useState('')
  const [ticketDescription, setTicketDescription] = useState('')
  const [ticketName, setTicketName] = useState('')
  const [ticketEmail, setTicketEmail] = useState('')
  const [ticketOffice, setTicketOffice] = useState('')

  function openModal() {
    setIsOpen(true);
    console.log(modalIsOpen)
  }
  function closeModal() {
    setIsOpen(false)
    console.log(modalIsOpen)
  }

  <div className="tab">
    <button onClick={openModal} id="open-modal-button">Submit Request</button>
    < Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="test modal" className='modal' overlayClassName="overlay" >
      <div className="modal-content-container">
        <div className="modal-info-input-container">
          <div className="submit-ticket-header">
            <h1>Submit a Ticket</h1>
            <button onClick={closeModal}>Close Modal</button>
          </div>
          <form>
            <label>Request</label>
            <input onChange={(event) => setTicketRequestTitle(event.target.value)}></input>
            <label>Description</label>
            <textarea onChange={(event) => setTicketDescription(event.target.value)} ></textarea>
            <label>Name</label>
            <input onChange={(event) => setTicketName(event.target.value)}></input>
            <label>Email</label>
            <input onChange={(event) => setTicketEmail(event.target.value)}></input>
            <label>Office</label>
            <input onChange={(event) => setTicketOffice(event.target.value)}></input>
            <button type="submit">Submit Ticket</button>
          </form>
        </div>
        <div className="modal-info-output-container">
          <h2>{ticketRequestTitle}</h2>
          <div>
            <p>{ticketDescription}</p>
            <div className="row space-between">
              <p>{ticketName}</p>
              <p>{ticketEmail}</p>
              <p>{ticketOffice}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal >
  </div>
}

export default BonkoModal