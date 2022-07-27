export class AuthAppState {}

// // Step 1 - Create AppState and manage the collection once and in a centralize place
// import {CompanyModel} from "../Models/Welcome";

// import store from "./Store";

// export class AuthAppState {
//     public company: CompanyModel = new CompanyModel();
//     token: any;
//     public constructor() {
//         try {
//             const storedCompany = JSON.parse(localStorage.getItem('company') || "");
//             if (storedCompany) {
//                 this.company = storedCompany;
//             }
//         }
//         catch (err) {
//             this.company = null;
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

// export function loginAction(company: CompanyModel): AuthAction {
//     return { type: AuthActionType.Login, payload: company };
// }

// export function logoutAction(): AuthAction {
//     return { type: AuthActionType.Logout };
// }

// // Step 5 - Reducer function perform the required action
// export function authCompanyReducer(currentState: AuthAppState = new AuthAppState(),
//     action: AuthAction): AuthAppState {
//     // const newState = new CatsAppState();
//     // newState.cats = currentState.cats;

//     const newState = { ...currentState } //Spread Operator
//     switch (action.type) {
//         case AuthActionType.Register: //Payload is registered user from backend
//             break;
//         case AuthActionType.Login://Payload is logged i user from backend
//             newState.company = action.payload;
//             localStorage.setItem("company", JSON.stringify(newState.company)); // Saving in the session storage (won't be deleted)
//             break;
//         case AuthActionType.Logout: // No payload
//             newState.company = null;
//             localStorage.removeItem("customer");

//             break;

//     }
//     return newState;

// }