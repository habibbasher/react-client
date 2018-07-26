import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-client-41fb7.firebaseio.com/'
});

export default instance;
