import axios from "axios";

const instance = axios.create({
    baseURL: 'http://todo-service/api',
});

export default instance;
