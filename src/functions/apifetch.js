import axios from "axios";


const postUrl = 'http://10.0.0.248:8000/api/'
const endpoint = ['requests', 'upvote', 'submit-request']

async function fetchRequests() {
    try {
        const response = await axios.get(postUrl + endpoint[0]);
        const data = response.data.data;
        data.sort((firstElement, secondElement) => secondElement.upvotes - firstElement.upvotes);
        return data
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw error;
    }
}

async function postNewUpvotes(id, upvotes) {
    try {
        const response = await axios.post(postUrl + endpoint[1], { id, upvotes });
        return response.data.data;
    } catch (error) {
        console.error('Error posting new upvotes:', error);
        throw error;
    }
}


async function postNewRequest(request, description, requestor, email, office, daterequested, requestStatus) {
    try {
        let today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        const daterequested = today
        const requestStatus = 'Awaiting Response'

        const response = await axios.post(postUrl + endpoint[2], { request, description, requestor, email, office, daterequested, requestStatus });

        return response.data.data
    } catch (error) {
        console.error('Error posting new request: ', error)
    }
}
export { fetchRequests, postNewUpvotes, postNewRequest }