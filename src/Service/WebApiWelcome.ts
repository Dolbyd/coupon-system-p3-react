import axios from "axios";
import { CredentialsModel, UserModel } from "../Models/Welcome";
import globals from "./Globals";


class WebApiWelcome{

    private welcomeApi = globals.urls.welcome;




    public async login(credentials: CredentialsModel): Promise<any> {
        return await axios.post<UserModel>(this.welcomeApi + 'login', credentials);
    }
}

const web = new WebApiWelcome();
export default web;