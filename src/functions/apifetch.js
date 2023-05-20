import axios from "axios";

async function fetchRequests() {
    try {
        const response = await axios.get('http://192.168.0.192:8420/api/requests');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching requests:', error);
        throw error;
    }
}

export default fetchRequests;
