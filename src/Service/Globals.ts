class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        adminCompany: "http://localhost:8080/api/cs/admin/company/",
        adminCustomer: "http://localhost:8080/api/cs/admin/customer/",
        company: "http://localhost:8080/api/cs/company/",
        coupon: "http://localhost:8080/api/cs/coupon/",
        customer:"http://localhost:8080/api/cs/customer/",
        welcome: "http://localhost:8080/api/cs/auth/"
        
        
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        adminCompany: "www.aws.com/dolbydWebSite/admin/",
        adminCustomer: "www.aws.com/dolbydWebSite/admin/",
        company: "www.aws.com/dolbydWebSite/company/",
        coupon: "www.aws.com/dolbydWebSite/coupons",
        customer: "www.aws.com/dolbydWebSite/customer",
        welcome: "www.aws.com/dolbydWebSite/welcome/",
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;