import { combineReducers, createStore } from "redux";
import { couponsReducer } from "./CouponsAppState";
// import { authCustomerReducer } from "./CustomerAppState";
import { companyReducer } from "./CompanyAppState";
import { adminCompanyReducer } from "./AdminCompanyAppState";
import { adminCustomerReducer } from "./AdminCustomerAppState";
import { customerReducer } from "./CustomerAppState";
import { authReducer } from "./WelcomeAppState";



//Multiple catsReducer
const reducers = combineReducers({
    couponsReducer: couponsReducer, 
    companyReducer: companyReducer,
    adminCompanyReducer: adminCompanyReducer,
    adminCustomerReducer: adminCustomerReducer,
    customerReducer: customerReducer,
    authReducer: authReducer
});
const store = createStore(reducers)



export default store;