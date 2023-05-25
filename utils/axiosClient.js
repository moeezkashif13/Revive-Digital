
import axios from 'axios';

const axiosClient = axios.create();

// const URL = process.env.NODE_ENV == 'development' ? 'http://localhost/revivedigitalbackend/wp-json/wp/v2' : 'https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2' 


const URL = 'https://workingrevivedigital.000webhostapp.com/wp-json/wp/v2'




axiosClient.defaults.baseURL = URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};


axiosClient.defaults.withCredentials = true;


export default axiosClient;