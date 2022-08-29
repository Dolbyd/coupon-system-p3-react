import { CouponModel } from "../Models/Coupon";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class CouponsAppState {
    public coupons: CouponModel[] = [];
}

export enum CouponsActionType {
    CouponsDownloaded = "CouponsDownloaded"
}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface CouponAction {
    type: CouponsActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action
export function couponsDownloadedAction(Coupons: CouponModel[]): CouponAction {
    return { type: CouponsActionType.CouponsDownloaded, payload: Coupons };
}


// Step 5 - Reducer function perform the required action
export function couponsReducer(currentState: CouponsAppState = new CouponsAppState(), action: CouponAction): CouponsAppState {


    const newState = { ...currentState } //Spread Operator

    switch (action.type) {
        case CouponsActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
    }
    return newState;

}