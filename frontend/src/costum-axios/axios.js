import axios from "axios";

const instance = axios.create({
    baseURL: 'http://todo-app-service/api',
});

export default instance;
