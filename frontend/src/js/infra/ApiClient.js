import axios from "axios";
import LocalDB from './LocalDB';

const baseDomain = (process.env.NODE_ENV=='development') ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PRODUCTION;
const baseURL = `${baseDomain}`;

let Authorization = '';
if(LocalDB.data && LocalDB.data.token){
  Authorization = 'Bearer '+LocalDB.data.token;
}

let apiConnection = axios.create({
  baseURL,
  headers: {
    'Authorization': Authorization
  }
});

export default apiConnection;