import globals from "./Globals";
import { CouponPayloadModel , CouponModel } from "../Models/Coupon";
import axios from "axios";
import tokenAxios from "./InterceptorAxios";


class WebApiCompany {


    // need to change this
    private companyApi = globals.urls.company;
    private welcomeApi = globals.urls.welcome;
    



    public async addCoupon(coupon: CouponPayloadModel): Promise<any> {
        return await tokenAxios.post<CouponModel>(this.companyApi, coupon);
    }


    public async updateCoupon(id: number, coupon: CouponPayloadModel): Promise<any> {
        return await tokenAxios.put<any>(this.companyApi + id, coupon);
    }



    public async deleteCoupon(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.companyApi + id);
    }



    public async getAllCompanyCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.companyApi);
    }

}

const web = new WebApiCompany();
export default web;