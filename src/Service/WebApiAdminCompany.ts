import globals from "./Globals";
import { CompanyPayloadModel , CompanyModel } from "../Models/Company";
import axios from "axios";
import tokenAxios from "./InterceptorAxios";




class WebApiAdminCompany {


    // need to change this
    private adminCompanyApi = globals.urls.adminCompany;
    private welcomeApi = globals.urls.welcome;
    




    public async addCompany(company: CompanyPayloadModel): Promise<any> {
        return await tokenAxios.post<CompanyModel>(this.adminCompanyApi, company);
    }



    public async updateCompany(id: number, company: CompanyPayloadModel): Promise<any> {
        return await tokenAxios.put<any>(this.adminCompanyApi + id, company);
    }



    public async deleteCompany(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.adminCompanyApi + id);
    }



    public async getAllCompanies(): Promise<any> {
        return await tokenAxios.get<CompanyModel[]>(this.adminCompanyApi);
    }


}

const web = new WebApiAdminCompany();
export default web;