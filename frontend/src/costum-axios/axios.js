import axios from "axios";

const instance = axios.create({
    baseURL: 'http://todo-service:8080/api',
});

export default instance;
