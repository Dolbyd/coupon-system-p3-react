import { CouponModel } from "../Models/Coupon";

// Step 1 - Create AppState and manage the collection once and in a centralize place
export class CouponsAppState {
    public coupons: CouponModel[] = [];
}

export enum CouponsActionType {
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDeleted = "CouponDeleted",
    CouponClear = "CouponClear"
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

export function CouponAddedAction(Coupon: CouponModel): CouponAction {
    return { type: CouponsActionType.CouponAdded, payload: Coupon };
}

export function CouponUpdatedAction(Coupon: CouponModel): CouponAction {
    return { type: CouponsActionType.CouponUpdated, payload: Coupon };
}

export function CouponDeletedAction(id: number): CouponAction {
    return { type: CouponsActionType.CouponDeleted, payload: id };
}

export function CouponClear(): CouponAction {
    return { type: CouponsActionType.CouponDeleted };
}

// Step 5 - Reducer function perform the required action
export function couponsReducer(currentState: CouponsAppState = new CouponsAppState(), action: CouponAction): CouponsAppState {


    const newState = { ...currentState } //Spread Operator

    switch (action.type) {
        case CouponsActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CouponsActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CouponsActionType.CouponUpdated:
            const idx = newState.coupons.findIndex(t => t.id === action.payload.id);
            newState.coupons[idx] = action.payload;
            break
        case CouponsActionType.CouponDeleted:
            newState.coupons = newState.coupons.filter(t => t.id !== action.payload);
            break
        case CouponsActionType.CouponClear:
            newState.coupons = [];
            break
    }
    return newState;

}