class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        adminCompany: "http://localhost:8080/api/cs/admin/company/",
        adminCustomer: "http://localhost:8080/api/cs/admin/customer/",
        coupons: "http://localhost:8080/api/cs/",
        welcome: "http://localhost:8080/api/cs/auth/"
        
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        adminCompany: "www.aws.com/dolbydWebSite/admin/",
        adminCustomer: "www.aws.com/dolbydWebSite/admin/",
        coupons: "www.aws.com/dolbydWebSite/coupons",
        welcome: "www.aws.com/dolbydWebSite/welcome/",
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;