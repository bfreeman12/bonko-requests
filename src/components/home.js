import React from "react";
import Footer from "../functional-components/footer";
import { Query, QueryClient, QueryClientProvider, useQuery } from "react-query";

// import BonkoImage from "../media/bonko.png";

import "../css/style.css";
import "../css/home.css";
import BonkoImg from "../media/bonko.png";
import RowTemplate from "./rows";

const queryclient = new QueryClient()
const Home = () => {

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
                <button>Submit Request</button>
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
                  <RowTemplate />
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
