import axios from "axios";

const postUrl = "http://192.168.0.32:8420/api/";
const endpoint = [
  "requests",
  "upvote",
  "submit-request",
  "delete-request",
  "update-request",
];

async function fetchRequests() {
  try {
    const response = await axios.get(postUrl + endpoint[0]);
    const data = response.data.data;
    data.sort(
      (firstElement, secondElement) =>
        secondElement.upvotes - firstElement.upvotes
    );
    return data;
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error;
  }
}

async function postNewUpvotes(id, upvotes) {
  try {
    const response = await axios.post(postUrl + endpoint[1], { id, upvotes });
    return response.data.data;
  } catch (error) {
    console.error("Error posting new upvotes:", error);
    throw error;
  }
}

async function postNewRequest(
  request,
  description,
  requestor,
  email,
  office,
  daterequested,
  requestStatus
) {
  try {
    let today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    const daterequested = today;
    const requestStatus = "Awaiting Response";

    const response = await axios.post(postUrl + endpoint[2], {
      request,
      description,
      requestor,
      email,
      office,
      daterequested,
      requestStatus,
    });

    return response.data.data;
  } catch (error) {
    console.error("Error posting new request: ", error);
  }
}

async function postDeleteRequest(id) {
  try {
    const response = await axios.post(postUrl + endpoint[3], { uid: id });
    return response.data.data;
  } catch (error) {
    console.error("Error deleting request:", error);
    throw error;
  }
}
async function postUpdateRequest(id, selectValue) {
  try {
    const response = await axios.post(postUrl + endpoint[4], {
      uid: id,
      selectValue: selectValue,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error deleting request:", error);
    throw error;
  }
}
export {
  fetchRequests,
  postNewUpvotes,
  postNewRequest,
  postDeleteRequest,
  postUpdateRequest,
};
