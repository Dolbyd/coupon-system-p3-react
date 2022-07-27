import { CompanyPayloadModel } from "../Models/Company";
import { CompanyModel } from "../Models/Company";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class AdminCompanyAppState {
    public companies: CompanyModel[] = [];
}

// Step 2 - Define ActionType using enum for all required operations
export enum AdminCompaniesActionType {
    // TasksDownloaded = "TasksDownloaded",
    CompaniesDownloaded = "CompaniesDownloaded",
    CompanyAdded = "CompanyAdded",
    CompanyUpdated = "CompanyUpdated",
    CompanyDeleted = "CompanyDeleted",
    
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface AdminCompaniesAction {
    type: AdminCompaniesActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action

export function CompaniesDownloadedAction(companies: CompanyModel[]): AdminCompaniesAction {
    return { type: AdminCompaniesActionType.CompaniesDownloaded, payload: companies };
}

export function CompanyAddAction(company: CompanyPayloadModel): AdminCompaniesAction {
    return { type: AdminCompaniesActionType.CompanyAdded, payload: company };
}

export function CompanyUpdatedAction(Company: CompanyModel): AdminCompaniesAction {
    return { type: AdminCompaniesActionType.CompanyUpdated, payload: Company };
}

export function CompanyDeletedAction(id: number): AdminCompaniesAction {
    return { type: AdminCompaniesActionType.CompanyDeleted, payload: id };
}



// Step 5 - Reducer function perform the required action
export function adminCompanyReducer(currentState: AdminCompanyAppState = new AdminCompanyAppState(),
    action: AdminCompaniesAction): AdminCompanyAppState {
    // const newState = new CatsAppState();
    // newState.cats = currentState.cats;

    const newState = { ...currentState } //Spread Operator
    switch (action.type) {
        case AdminCompaniesActionType.CompaniesDownloaded:
            newState.companies = action.payload;
            break;
        case AdminCompaniesActionType.CompanyAdded:
            newState.companies.push(action.payload);
            break;
        case AdminCompaniesActionType.CompanyUpdated:
            const idx = newState.companies.findIndex(t => t.id === action.payload.id);
            newState.companies[idx] = action.payload;
            break;
        case AdminCompaniesActionType.CompanyDeleted:
            newState.companies = newState.companies.filter(t => t.id !== action.payload);
            break

    }
    return newState;

}