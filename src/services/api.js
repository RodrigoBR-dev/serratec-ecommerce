import axios from 'axios';

import storage from '../utils/storage';

const api = axios.create({baseURL: "https://serratec.herokuapp.com"});

api.interceptors.request.use(async config => {
    const token = storage.obterToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api