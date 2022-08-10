import { CouponModel } from "../Models/Coupon";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class CustomerAppState {
    public coupons: CouponModel[] = [];
}

// Step 2 - Define ActionType using enum for all required operations
export enum CustomersActionType {

    CouponsDownloaded = "CouponsDownloaded",
    purchaseCoupon = "purchaseCoupon"

}

// Step 3 - Define Action Interface to describe actionAction & payload if needed
export interface CustomersAction {
    type: CustomersActionType;
    payload?: any;
}

// Step 4 - Export Action Creators functions that gets payload and return relevant Action


export function CouponDownloadedAction(coupons: CouponModel[]): CustomersAction {
    return { type: CustomersActionType.CouponsDownloaded, payload: coupons };
}

export function PurchaseCouponAction(coupon: CouponModel): CustomersAction {
    return { type: CustomersActionType.purchaseCoupon, payload: coupon };
}

// Step 5 - Reducer function perform the required action
export function customerReducer(currentState: CustomerAppState = new CustomerAppState(),
    action: CustomersAction): CustomerAppState {

    const newState = { ...currentState } //Spread Operator
    switch (action.type) {
        case CustomersActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CustomersActionType.purchaseCoupon:
            newState.coupons = newState.coupons.filter(t => t.id !== action.payload);
            break;

    }
    return newState;
}

