
export class CredentialsModel {
    public email?: string;
    public password?: string;
    public clientType?: string;

    public constructor(email?: string, password?: string, clientType?: string) {
        this.email = email;
        this.password = password;
        this.clientType = clientType;
    }
}

export class UserModel {
    public jwtToken: string;
    public email: string;
    public clientType: string;

    public constructor(jwtToken?: string, email?: string, clientType?: string) {
        this.jwtToken = jwtToken || "";
        this.email = email || "";
        this.clientType = clientType || "";

    }

}