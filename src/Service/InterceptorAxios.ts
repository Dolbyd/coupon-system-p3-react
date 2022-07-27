import axios from 'axios';
import store from '../Redux/Store';

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {

    // request.headers = {
    //     "authorizationCustomer": store.getState().authCustomerReducer.customer?.token,
    //     "authorizationCompany": store.getState().authCompanyReducer.company?.token,
    //     "authorizationAdmin": store.getState().authAdminCompanyReducer.admin?.token

    // };

    return request;
});

export default tokenAxios;