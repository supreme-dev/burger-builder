// vendor import
import axios from 'axios';

// create axios instance url
const instance = axios.create({
  baseURL: 'https://burger-builder-react-b0b56.firebaseio.com/',
});

// export
export default instance;
