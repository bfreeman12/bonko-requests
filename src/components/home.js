import { React, useState } from "react";
import Footer from "../functional-components/footer";
import { QueryClient, QueryClientProvider } from "react-query";
import "../css/style.css";
import "../css/home.css";
import BonkoImg from "../media/bonko.png";
import FormattedRows from "./rows";
import CompletedFormattedRows from "./completed-rows";
import DeniedFormattedRows from "./denied-rows";
import AdminModal from "./admin-modal";
import SubmitModal from "./submit-modal";
// import CompletedModal from './completed-modal'
import { postNewRequest } from "../functions/apifetch";

const queryclient = new QueryClient();

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [ticketRequestTitle, setTicketRequestTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketName, setTicketName] = useState("");
  const [ticketEmail, setTicketEmail] = useState("");
  const [ticketOffice, setTicketOffice] = useState("");

  const [adminModalStatus, setAdminModalStatus] = useState(false);
  const [selectedObject, setSelectedObject] = useState({});
  const [modalClosed, setModalClosed] = useState(false);


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setModalClosed(true);
  }

  function openAdminModal() {
    setAdminModalStatus(true);
  }
  function closeAdminModal() {
    setAdminModalStatus(false);
    return adminModalStatus;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      closeModal();
      await postNewRequest(
        ticketRequestTitle,
        ticketDescription,
        ticketName,
        ticketEmail,
        ticketOffice
      );
    } catch (error) {
      closeModal();
      console.error("Error posting new request:", error);
    }
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <QueryClientProvider client={queryclient}>
          <div className="content-container">
            <div className="header-wrapper">
              <div></div>
              <div className="logo-wrapper">
                <img src={BonkoImg} alt=""></img>
                <h1>
                  Bonko <br></br>Requests
                </h1>
              </div>
              <div className="tabs-wrapper">
                <div className="tab">
                  <button onClick={openModal} id="open-modal-button">
                    Submit Request
                  </button>
                </div>

                {/* not elegant */}
                <SubmitModal
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                  handleSubmit={handleSubmit}
                  setTicketRequestTitle={setTicketRequestTitle}
                  setTicketDescription={setTicketDescription}
                  setTicketName={setTicketName}
                  setTicketEmail={setTicketEmail}
                  setTicketOffice={setTicketOffice}
                  ticketRequestTitle={ticketRequestTitle}
                  ticketDescription={ticketDescription}
                  ticketName={ticketName}
                  ticketEmail={ticketEmail}
                  ticketOffice={ticketOffice}
                />

                {/* elegant */}
                <AdminModal
                  closeAdminModal={closeAdminModal}
                  adminModalStatus={adminModalStatus}
                  selectedObject={selectedObject}
                />

              </div>
            </div>
            <div className="table-body-container">
              <div className="table-body-content-container">
                <div className="table-task-list">
                <h2>Awaiting Response/In Progress</h2>
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
                      <h3>Date Requested</h3>
                    </div>
                  </row>
                  <FormattedRows
                    setSelectedObject={setSelectedObject}
                    openAdminModal={openAdminModal}
                    modalClosed={modalClosed}
                  />
                </div>
              </div>
            </div>
            <div className="table-body-container">
              <div className="table-body-content-container">
                <div className="table-task-list">
                <h2>Completed Requests</h2>
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
                      <h3>Date Requested</h3>
                    </div>
                  </row>
                  <CompletedFormattedRows
                    setSelectedObject={setSelectedObject}
                    openAdminModal={openAdminModal}
                    modalClosed={modalClosed}
                  />
                </div>
              </div>
            </div>
            <div className="table-body-container">
              <div className="table-body-content-container">
                <div className="table-task-list">
                <h2>Denied Requests</h2>
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
                      <h3>Date Requested</h3>
                    </div>
                  </row>
                  <DeniedFormattedRows
                    setSelectedObject={setSelectedObject}
                    openAdminModal={openAdminModal}
                    modalClosed={modalClosed}
                  />
                </div>
              </div>
            </div>
            <div className="body-footer">
              <p>
                The intent of this webapp is to provide web solutions for all
                shops in 89CS. If you have any ideas on how the squadron could
                be improved from any web applications, submit an idea and Bonko
                will determine feasibility. Please do not put any CUI, Secret,
                or TS information on this website.
              </p>
            </div>
          </div>
        </QueryClientProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
