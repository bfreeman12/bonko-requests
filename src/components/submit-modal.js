import React from "react";
import Modal from "react-modal";
import "../css/modal.css";

function SubmitModal(props) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="test modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content-container">
        <div className="modal-info-input-container">
          <div className="submit-ticket-header">
            <h1>Submit a Ticket</h1>
          </div>
          <form onSubmit={props.handleSubmit}>
            <label>Request</label>
            <input
              required={true}
              onChange={(event) =>
                props.setTicketRequestTitle(event.target.value)
              }
            ></input>
            <label>Description</label>
            <textarea
              required={true}
              onChange={(event) =>
                props.setTicketDescription(event.target.value)
              }
            ></textarea>
            <label>Name</label>
            <input
              required={true}
              onChange={(event) => props.setTicketName(event.target.value)}
            ></input>
            <label>Email</label>
            <input
              required={true}
              onChange={(event) => props.setTicketEmail(event.target.value)}
            ></input>
            <label>Office</label>
            <input
              required={true}
              onChange={(event) => props.setTicketOffice(event.target.value)}
            ></input>
            <button type="submit">Submit Ticket</button>
          </form>
        </div>
        <div className="modal-info-output-container">
          <div className="modal-output-wrapper">
            <div className="output-field-container ticket-title">
              <p>Request Title:</p>
              <h4>{props.ticketRequestTitle}</h4>
            </div>
            <div className="output-field-container">
              <p>Request Description:</p>
              <p>{props.ticketDescription}</p>
            </div>
            <div className="info-container">
              <div className="output-field-container">
                <p>Requester Name:</p>
                <h4>{props.ticketName}</h4>
              </div>
              <div className="output-field-container">
                <p>Requester Email:</p>
                <h4>{props.ticketEmail}</h4>
              </div>
              <div className="output-field-container">
                <p>Requester Office:</p>
                <h4>{props.ticketOffice}</h4>
              </div>
            </div>
          </div>
        </div>
        <button id="close-modal-button" onClick={props.closeModal}>
          Close Modal
        </button>
      </div>
    </Modal>
  );
}

export default SubmitModal;
