import globals from "./Globals";
import { CouponPayloadModel , CouponModel } from "../Models/Coupon";
import axios from "axios";
import tokenAxios from "./InterceptorAxios";


class WebApiCompany {


    // need to change this
    private companyApi = globals.urls.company;
    private welcomeApi = globals.urls.welcome;
    


    // public async addTask(task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.post<TodoModel>(this.taskApi, task);
    // }

    public async addCoupon(coupon: CouponPayloadModel): Promise<any> {
        return await tokenAxios.post<CouponModel>(this.companyApi, coupon);
    }

    // public async updateTask(id: number, task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.put<any>(this.taskApi + id, task);
    // }

    public async updateCoupon(id: number, coupon: CouponPayloadModel): Promise<any> {
        return await tokenAxios.put<any>(this.companyApi + id, coupon);
    }

    // public async deleteTask(id: number): Promise<any> {
    //     return await tokenAxios.delete<any>(this.taskApi + id);
    // }

    public async deleteCoupon(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.companyApi + id);
    }

    // public async getAllTasks(): Promise<any> {
    //     return await tokenAxios.get<TodoModel[]>(this.taskApi);
    // }

    public async getAllCompanyCoupons(): Promise<any> {
        return await tokenAxios.get<CouponModel[]>(this.companyApi);
    }

    // public async getSingleTask(id: number): Promise<any> {
    //     return await tokenAxios.get<TodoModel>(this.taskApi + id);
    // }

    // public async countTasks(): Promise<any> {
    //     return await tokenAxios.get<number>(this.taskApi + 'count');
    // }

    // public async register(credentials: CredentialsModel): Promise<any> {
    //     return await axios.post<any>(this.welcomeApi + 'register', credentials);
    // }

    // public async login(credentials: CredentialsModel): Promise<any> {
    //     return await axios.post<UserModel>(this.welcomeApi + 'login', credentials);
    // }
}

const web = new WebApiCompany();
export default web;