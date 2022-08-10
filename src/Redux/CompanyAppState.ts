import { CouponModel, CouponPayloadModel } from "../Models/Coupon";


// Step 1 - Create AppState and manage the collection once and in a centralize place
export class CompanyAppState {
    public coupons: CouponModel[] = [];
}

// Step 2 - Define ActionType using enum for all required operations
export enum CompaniesActionType {

    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted",

}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface CompaniesAction {
    type: CompaniesActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action

export function CouponDownloadedAction(coupons: CouponModel[]): CompaniesAction {
    return { type: CompaniesActionType.CouponsDownloaded, payload: coupons };
}


export function CouponAddAction(coupons: CouponPayloadModel): CompaniesAction {
    return { type: CompaniesActionType.CouponAdded, payload: coupons };
}

export function CouponUpdatedAction(coupons: CouponModel): CompaniesAction {
    return { type: CompaniesActionType.CouponUpdated, payload: coupons };
}

export function CouponDeletedAction(id: number): CompaniesAction {
    return { type: CompaniesActionType.CouponDeleted, payload: id };
}



// Step 5 - Reducer function perform the required action
export function companyReducer(currentState: CompanyAppState = new CompanyAppState(),
    action: CompaniesAction): CompanyAppState {
    // const newState = new CatsAppState();
    // newState.cats = currentState.cats;

    const newState = { ...currentState } //Spread Operator
    switch (action.type) {
        case CompaniesActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CompaniesActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CompaniesActionType.CouponUpdated:
            const idx = newState.coupons.findIndex(t => t.id === action.payload.id);
            newState.coupons[idx] = action.payload;
            break;
        case CompaniesActionType.CouponDeleted:
            newState.coupons = newState.coupons.filter(t => t.id !== action.payload);
            break;

    }
    return newState;

}