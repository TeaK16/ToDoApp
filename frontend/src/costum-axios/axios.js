import axios from "axios";

const instance = axios.create({
    baseURL: 'http://todo-backend-service.todo-namespace/api', 
});

export default instance;
