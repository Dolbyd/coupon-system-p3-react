import globals from "./Globals";
import { CompanyPayloadModel , CompanyModel } from "../Models/Company";
import axios from "axios";
import tokenAxios from "./InterceptorAxios";

// import tokenAxios from "./InterceptorAxios";


class WebApiAdminCompany {


    // need to change this
    private adminCompanyApi = globals.urls.adminCompany;
    private welcomeApi = globals.urls.welcome;
    


    // public async addTask(task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.post<TodoModel>(this.taskApi, task);
    // }

    public async addCompany(company: CompanyPayloadModel): Promise<any> {
        return await tokenAxios.post<CompanyModel>(this.adminCompanyApi, company);
    }

    // public async updateTask(id: number, task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.put<any>(this.taskApi + id, task);
    // }

    public async updateCompany(id: number, company: CompanyPayloadModel): Promise<any> {
        return await tokenAxios.put<any>(this.adminCompanyApi + id, company);
    }

    // public async deleteTask(id: number): Promise<any> {
    //     return await tokenAxios.delete<any>(this.taskApi + id);
    // }

    public async deleteCompany(id: number): Promise<any> {
        return await tokenAxios.delete<any>(this.adminCompanyApi + id);
    }

    // public async getAllTasks(): Promise<any> {
    //     return await tokenAxios.get<TodoModel[]>(this.taskApi);
    // }

    public async getAllCompanies(): Promise<any> {
        return await tokenAxios.get<CompanyModel[]>(this.adminCompanyApi);
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

const web = new WebApiAdminCompany();
export default web;