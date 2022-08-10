import axios from 'axios';
import store from '../Redux/Store';

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {

    request.headers = {
        "Authorization": `Bearer ${store.getState().authReducer.user.jwtToken}`
    };

    return request;
});

export default tokenAxios;