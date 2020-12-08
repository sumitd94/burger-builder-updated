import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-7c88f.firebaseio.com/',
});

export default instance;
