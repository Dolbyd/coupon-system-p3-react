import { combineReducers, createStore } from "redux";
import { couponsReducer } from "./CouponsAppState";
// import { authCustomerReducer } from "./CustomerAppState";
// import { authCompanyReducer } from "./CompanyAppState";
import { adminCompanyReducer } from "./AdminCompanyAppState";
import { adminCustomerReducer } from "./AdminCustomerAppState";



//Multiple catsReducer
const reducers = combineReducers({ couponsReducer: couponsReducer,
                                    // authCustomerReducer: authCustomerReducer, 
                                    // authCompanyReducer: authCompanyReducer, 
                                    adminCompanyReducer: adminCompanyReducer,
                                    adminCustomerReducer: adminCustomerReducer });
const store = createStore(reducers)



export default store;