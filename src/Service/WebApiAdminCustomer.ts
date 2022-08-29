import axios from "axios";
import { CustomerPayloadModel,CustomerModel } from "../Models/Customer";
import globals from "./Globals";
import tokenAxios from "./InterceptorAxios";

class WebApiAdminCustomer {


    // need to change this
    private adminCustomerApi = globals.urls.adminCustomer;
    private welcomeApi = globals.urls.welcome;
    


    public async addCustomer(customer: CustomerPayloadModel): Promise<any> {
        return await tokenAxios.post<CustomerModel>(this.adminCustomerApi, customer);
    }


    public async updateCustomer(id: number, customer: CustomerPayloadModel): Promise<any> {
        return await tokenAxios.put<any>(this.adminCustomerApi + id, customer);
    }


    public async deleteCustomer(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.adminCustomerApi + id);
    }


    public async getAllCustomers(): Promise<any> {
        return await tokenAxios.get<CustomerModel[]>(this.adminCustomerApi);
    }

}

const web = new WebApiAdminCustomer();
export default web;