import { React, useState } from "react";
import Modal from 'react-modal';
import ReactDOM from "react-dom";


const BonkoModal = (props) => {




  < Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="test modal" className='modal' overlayClassName="overlay" >
    <div className="modal-content-container">
      <div className="modal-info-input-container">
        <div className="submit-ticket-header">
          <h1>Submit a Ticket</h1>
          <button onClick={closeModal}>Close Modal</button>
        </div>
        <form>
          <label>Request</label>
          <input></input>
          <label>Description</label>
          <textarea></textarea>
          <label>Name</label>
          <input></input>
          <label>Email</label>
          <input></input>
          <label>Office</label>
          <input></input>
          <button type="submit">Submit Ticket</button>
        </form>
      </div>
      <div className="modal-info-output-container">
        <h2>Request</h2>
        <div>
          <p>Description</p>
          <div className="row space-between">
            <p>Requester Name</p>
            <p>Requester Email</p>
            <p>Requester Office</p>
          </div>
        </div>
      </div>
    </div>
  </Modal >
}

export default BonkoModal