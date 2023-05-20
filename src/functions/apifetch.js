import axios from "axios";

async function fetchRequests() {
    try {
        const response = await axios.get('http://10.0.0.248:8000/api/requests');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw error;
    }
}

async function postNewUpvotes(id, upvotes) {
    try {
        const response = await axios.post('http://10.0.0.248:8000/api/upvote', { id, upvotes });
        return response.data.data;
    } catch (error) {
        console.error('Error posting new upvotes:', error);
        throw error;
    }
}

export { fetchRequests, postNewUpvotes }