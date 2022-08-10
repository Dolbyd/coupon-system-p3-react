import axios from "axios";
import { CouponModel } from "../Models/Coupon";
import globals from "./Globals";

class WebApiCoupon {

    // need to change this
    private couponApi = globals.urls.coupon;

    public async getAllCoupons(): Promise<any> {
        return await axios.get<CouponModel[]>(this.couponApi);
    }

}

const web = new WebApiCoupon();
export default web;