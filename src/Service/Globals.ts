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

// class Globals{

// }

// class DevelopmentGlobals extends Globals{
//     public urls = {
//         cats: "http://localhost:8080/api/cats/", //This is public for all
//         images: "http://localhost:8080/api/cats/images/",
//         client: "http://localhost:8080/api/client/",
//         customers: "http://localhost:8080/api/customers/cats/", // this is secured one
//     }
// }

// class ProductionGlobabls extends Globals{
//     public urls = {
//         cats: "/api/cats/",
//         images: "/api/cats/images/",
//         client: "/api/client/",
//         customers: "/api/customers/cats/", // this is secured one

//     }
// }


// const globals = process.env.NODE_ENV === "production" ? new ProductionGlobabls(): new DevelopmentGlobals();

// export default globals;