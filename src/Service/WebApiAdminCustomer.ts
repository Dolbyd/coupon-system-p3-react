import axios from "axios";
import { CustomerPayloadModel,CustomerModel } from "../Models/Customer";
import globals from "./Globals";

class WebApiAdminCustomer {


    // need to change this
    private adminCustomerApi = globals.urls.adminCustomer;
    private welcomeApi = globals.urls.welcome;
    


    // public async addTask(task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.post<TodoModel>(this.taskApi, task);
    // }

    public async addCustomer(customer: CustomerPayloadModel): Promise<any> {
        return await axios.post<CustomerModel>(this.adminCustomerApi, customer);
    }

    // public async updateTask(id: number, task: TodoPayLoadModel): Promise<any> {
    //     return await tokenAxios.put<any>(this.taskApi + id, task);
    // }

    public async updateCustomer(id: number, customer: CustomerPayloadModel): Promise<any> {
        return await axios.put<any>(this.adminCustomerApi + id, customer);
    }

    // public async deleteTask(id: number): Promise<any> {
    //     return await tokenAxios.delete<any>(this.taskApi + id);
    // }

    public async deleteCustomer(id: number): Promise<any> {
        return await axios.delete<any>(this.adminCustomerApi + id);
    }

    // public async getAllTasks(): Promise<any> {
    //     return await tokenAxios.get<TodoModel[]>(this.taskApi);
    // }

    public async getAllCustomers(): Promise<any> {
        return await axios.get<CustomerModel[]>(this.adminCustomerApi);
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

const web = new WebApiAdminCustomer();
export default web;