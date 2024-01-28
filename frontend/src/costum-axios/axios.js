import axios from "axios";

const instance = axios.create({
    baseURL: 'http://todo-backend-service.todo-namespace/api', 
});

instance.interceptors.request.use((config) => {
  // Modify the headers to allow cross-origin requests
  config.headers['Access-Control-Allow-Origin'] = 'http://todo-app-service.todo-namespace';
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
  config.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';

  // Optionally, you can set additional headers or modify other request properties here

  return config;
});
export default instance;
