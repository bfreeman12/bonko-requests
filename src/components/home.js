import { React, useState } from "react";
import Footer from "../functional-components/footer";
import { QueryClient, QueryClientProvider } from "react-query";
import Modal from 'react-modal';
import "../css/style.css";
import "../css/home.css";
import "../css/modal.css"
import BonkoImg from "../media/bonko.png";
import FormattedRows from "./rows";

const queryclient = new QueryClient()
Modal.setAppElement('#root')

const Home = () => {

  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="page-container">
      <div className="body-container">
        <div className="content-container">
          <div className="header-wrapper">
            <div className="logo-wrapper">
              <img src={BonkoImg} alt=''></img>
              <h1>
                Bonko <br></br>Requests
              </h1>
            </div>
            <div className="tabs-wrapper">
              <div className="tab">
                <button onClick={openModal}>Submit Request</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="test modal" className='modal' overlayClassName="overlay">
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
                      </form>
                    </div>
                  </div>

                </Modal>
              </div>
            </div>
          </div>
          <div className="table-body-container">
            <div className="table-body-content-container">
              <div className="table-task-list">
                <row className="header row">
                  <div className="col">
                    <h3>Request</h3>
                  </div>
                  <div className="col">
                    <h3>Requested By</h3>
                  </div>
                  <div className="col">
                    <h3>Status</h3>
                  </div>
                  <div className="col">
                    <h3>Days Since Request</h3>
                  </div>
                </row>
                <QueryClientProvider client={queryclient}>
                  <FormattedRows />
                </QueryClientProvider>
              </div>
            </div>
          </div>
          <div className="body-footer">
            <p>
              The intent of this webapp is to provide web solutions for all
              shops in 89CS. If you have any ideas on how the squadron could
              be improved from any web applications, submit an idea and Bonko
              will determine feasability. Please do not put any CUI, Secret,
              or TS information on this website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Home;
