import axios from "axios";
import { CouponModel } from "../Models/Coupon";
import globals from "./Globals";
import tokenAxios from "./InterceptorAxios";


class WebApiCustomer{

    private customerApi = globals.urls.customer;

    public async getAllCustomerCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.customerApi);
    }

    public async purchaseCoupon(coupon: CouponModel): Promise<any> {
        return await tokenAxios.put<CouponModel>(this.customerApi+ 'purchase' , coupon);
    }


}

const web = new WebApiCustomer();
export default web;