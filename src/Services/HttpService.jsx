import axios from "axios";

axios.defaults.baseURL = "https://db-json-delta.vercel.app/db.json";


const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post,
};

export default http;