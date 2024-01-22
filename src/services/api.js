import axios from 'axios';
 
const api = axios.create({
    baseURL: '127.0.0.1:3400',
    timeout: 1000
})


export default api