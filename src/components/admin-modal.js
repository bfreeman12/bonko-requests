import Modal from "react-modal";
import "../css/admin-modal.css";
import { postDeleteRequest, postUpdateRequest } from "../functions/apifetch";

function AdminModal(props) {
  Modal.setAppElement("#root");

  const selectedObject = props.selectedObject;

  const handleDeleteRequest = (id) => {
    postDeleteRequest(id);
    props.closeAdminModal();
  };
  const handleUpdateRequest = () => {
    const selectedValue = document.getElementById(
      "update-request-selector"
    ).value;
    postUpdateRequest(selectedObject.uid, selectedValue);
    props.closeAdminModal();
  };

  return (
    <Modal
      isOpen={props.adminModalStatus}
      onRequestClose={props.closeAdminModal}
      contentLabel="test admin modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content-container">
        <div className="admin-modal-info-output-container">
          <div className="modal-output-wrapper">
            <h2>Admin Panel</h2>
            <h3>Request</h3>
            <div className="info-container">
              <div className="output-field-container ticket-title">
                <p>Request Title:</p>
                <h4>{selectedObject.request}</h4>
              </div>
            </div>
            <div className="output-field-container ticket-title">
              <p>Request Description:</p>
              <p>{selectedObject.description}</p>
            </div>
            <h3>Requester Info</h3>
            <div className="info-container">
              <div className="output-field-container">
                <p>Requester Name:</p>
                <h4>{selectedObject.requestor}</h4>
              </div>
              <div className="output-field-container">
                <p>Requester Email:</p>
                <h4>{selectedObject.email}</h4>
              </div>
              <div className="output-field-container">
                <p>Requester Office:</p>
                <h4>{selectedObject.office}</h4>
              </div>
            </div>
            <h3>Metadata</h3>
            <div className="info-container">
              <div className="output-field-container">
                <p>UID:</p>
                <h4>{selectedObject.uid}</h4>
              </div>
              <div className="output-field-container">
                <p>Date Requested:</p>
                <h4>{selectedObject.dateopened}</h4>
              </div>
              <div className="output-field-container">
                <p>Status:</p>
                <select id="update-request-selector" select="Awaiting Response">
                  <option value="Awaiting Response">Awaiting Response</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="No">No</option>
                </select>
                {/* <h4>{selectedObject.status}</h4> */}
              </div>
            </div>
            <div className="button-wrapper">
              <button
                id="delete-submission-button"
                onClick={() => handleDeleteRequest(selectedObject.uid)}
              >
                Delete Request
              </button>
              <button
                id="update-submission-button"
                onClick={() => handleUpdateRequest(selectedObject.uid)}
              >
                Update Request
              </button>
            </div>
          </div>
        </div>
        <button id="close-modal-button" onClick={props.closeAdminModal}>
          Close Modal
        </button>
      </div>
    </Modal>
  );
}

export default AdminModal;
