import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import AddCompany from "../../AdminArea/CompanyAdmin/AddCompany/AddCompany";
import DeleteCompany from "../../AdminArea/CompanyAdmin/DeleteCompany/DeleteCompany";
import GetAllCompanies from "../../AdminArea/CompanyAdmin/GetAllCompanies/GetAllCompanies";
import GetSingleCompany from "../../AdminArea/CompanyAdmin/GetSingleCompany/GetSingleCompany";
import UpdateCompany from "../../AdminArea/CompanyAdmin/UpdateCompany/UpdateCompany";
import AddCustomer from "../../AdminArea/CustomerAdmin/AddCustomer/AddCustomer";
import DeleteCustomer from "../../AdminArea/CustomerAdmin/DeleteCustomer/DeleteCustomer";
import GetAllCustomers from "../../AdminArea/CustomerAdmin/GetAllCustomers/GetAllCustomers";
import UpdateCustomer from "../../AdminArea/CustomerAdmin/UpdateCustomer/UpdateCustomer";
import AddCoupon from "../../CompanyArea/AddCoupon/AddCoupon";
import DeleteCoupon from "../../CompanyArea/DeleteCoupon/DeleteCoupon";
import GetAllCoupons from "../../CouponsArea/GetAllCoupons/GetAllCoupons";
import UpdateCoupon from "../../CompanyArea/UpdateCoupon/UpdateCoupon";
import Home from "../../PageArea/Home/Home";
import "./Routing.css";
import GetAllCompanyCoupons from "../../CompanyArea/GetAllCompanyCoupons/GetAllCompanyCoupons";
import GetAllCustomerCoupons from "../../CustomerArea/GetAllCustomerCoupons/GetAllCustomerCoupons";
import PurchaseCoupon from "../../CustomerArea/PurchaseCoupon/PurchaseCoupon";
import Login from "../../AuthArea/Login/Login";
import Page404 from "../Page404/Page404";
import Logout from "../../AuthArea/Logout/Logout";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/coupon" element={<GetAllCoupons />} />
                <Route path="/adminCompany" element={<GetAllCompanies />} />
                <Route path="/adminCompany/add" element={<AddCompany />} />
                <Route path="/adminCompany/update/:id" element={<UpdateCompany />} />
                <Route path="/adminCompany/delete/:id" element={<DeleteCompany />} />
                <Route path="/adminCustomer" element={<GetAllCustomers />} />
                <Route path="/adminCustomer/add" element={<AddCustomer />} />
                <Route path="/adminCustomer/update/:id" element={<UpdateCustomer />} />
                <Route path="/adminCustomer/delete/:id" element={<DeleteCustomer />} />
                <Route path="/company" element={<GetAllCompanyCoupons />} />
                <Route path="/company/add" element={<AddCoupon />} />
                <Route path="/company/update/:id" element={<UpdateCoupon />} />
                <Route path="/company/delete/:id" element={<DeleteCoupon />} />
                <Route path="/customer" element={<GetAllCustomerCoupons />} />
                <Route path="/customer/purchase/:id" element={<PurchaseCoupon />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
