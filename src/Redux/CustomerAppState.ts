export class AuthAppState {}

// // Step 1 - Create AppState and manage the collection once and in a centralize place
// import {CustomerModel} from "../Models/Welcome";

// import store from "./Store";

// export class AuthAppState {
//     public customer: CustomerModel = new CustomerModel();
//     token: any;
//     public constructor() {
//         try {
//             const storedCustomer = JSON.parse(localStorage.getItem('customer') || "");
//             if (storedCustomer) {
//                 this.customer = storedCustomer;
//             }
//         }
//         catch (err) {
//             this.customer = null;
//         }
//     }
// }

// // Step 2 - Define ActionType using enum for all required operations
// export enum AuthActionType {
//     Register = "Register",
//     Login = "Login",
//     Logout = "Logout"
// }

// // Step 3 - Define Action Interface to describe actionAction & payload if needed
// export interface AuthAction {
//     type: AuthActionType;
//     payload?: any; // ? for logout
// }

// // Step 4 - Export Action Creators functions that gets payload and return relevant Action
// export function registerAction(): AuthAction {
//     return { type: AuthActionType.Register };
// }

// export function loginAction(customer: CustomerModel): AuthAction {
//     return { type: AuthActionType.Login, payload: customer };
// }

// export function logoutAction(): AuthAction {
//     return { type: AuthActionType.Logout };
// }

// // Step 5 - Reducer function perform the required action
// export function authCustomerReducer(currentState: AuthAppState = new AuthAppState(),
//     action: AuthAction): AuthAppState {
//     // const newState = new CatsAppState();
//     // newState.cats = currentState.cats;

//     const newState = { ...currentState } //Spread Operator
//     switch (action.type) {
//         case AuthActionType.Register: //Payload is registered user from backend
//             break;
//         case AuthActionType.Login://Payload is logged i user from backend
//             newState.customer = action.payload;
//             localStorage.setItem("customer", JSON.stringify(newState.customer)); // Saving in the session storage (won't be deleted)
//             break;
//         case AuthActionType.Logout: // No payload
//             newState.customer = null;
//             localStorage.removeItem("customer");

//             break;

//     }
//     return newState;

// }