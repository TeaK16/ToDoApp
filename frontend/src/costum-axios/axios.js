import axios from "axios";

const baseURLs = {
  backend: 'http://todo-backend-service.todo-namespace/api',
  frontend: 'http://todo-app-service.todo-namespace/api',
};

const instance = axios.create({
  baseURL: baseURLs.backend,
});

// You can dynamically switch baseURL for specific requests
instance.interceptors.request.use((config) => {
  // Example: set baseURL to frontend for requests to /frontend/*
  if (config.url.startsWith('/frontend/')) {
    config.baseURL = baseURLs.frontend;
  }

  return config;
});

export default instance;
