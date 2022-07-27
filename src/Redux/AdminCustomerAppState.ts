import { CustomerPayloadModel } from "../Models/Customer";
import {  CustomerModel } from "../Models/Customer";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class AdminCustomerAppState {
    public customers: CustomerModel[] = [];
}

// Step 2 - Define ActionType using enum for all required operations
export enum AdminCustomersActionType {

    CustomersDownloaded = "CustomersDownloaded",
    CustomerAdded = "CustomerAdded",
    CustomerUpdated = "CustomerUpdated",
    CustomerDeleted = "CustomerDeleted",
    
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface AdminCustomersAction {
    type: AdminCustomersActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action

export function CustomersDownloadedAction(customer: CustomerModel[]): AdminCustomersAction {
    return { type: AdminCustomersActionType.CustomersDownloaded, payload: customer };
}

export function CustomerAddAction(customer: CustomerPayloadModel): AdminCustomersAction {
    return { type: AdminCustomersActionType.CustomerAdded, payload: customer };
}

export function CustomerUpdatedAction(customer: CustomerModel): AdminCustomersAction {
    return { type: AdminCustomersActionType.CustomerUpdated, payload: customer };
}

export function CustomerDeletedAction(id: number): AdminCustomersAction {
    return { type: AdminCustomersActionType.CustomerDeleted, payload: id };
}



// Step 5 - Reducer function perform the required action
export function adminCustomerReducer(currentState: AdminCustomerAppState = new AdminCustomerAppState(),
    action: AdminCustomersAction): AdminCustomerAppState {

    const newState = { ...currentState } //Spread Operator
    switch (action.type) {
        case AdminCustomersActionType.CustomersDownloaded:
            newState.customers = action.payload;
            break;
        case AdminCustomersActionType.CustomerAdded:
            newState.customers.push(action.payload);
            break;
        case AdminCustomersActionType.CustomerUpdated:
            const idx = newState.customers.findIndex(t => t.id === action.payload.id);
            newState.customers[idx] = action.payload;
            break;
        case AdminCustomersActionType.CustomerDeleted:
            newState.customers = newState.customers.filter(t => t.id !== action.payload);
            break

    }
    return newState;

}