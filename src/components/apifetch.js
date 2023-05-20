import axios from "axios"

async function fetchRequests() {
    const { data } = await axios.get('localhost:8000/api/requests')
    return data
}

export default fetchRequests