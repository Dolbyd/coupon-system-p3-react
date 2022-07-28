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
import GetAllCoupons from "../../CompanyArea/GetAllCoupons/GetAllCoupons";
import UpdateCoupon from "../../CompanyArea/UpdateCoupon/UpdateCoupon";
import Home from "../../PageArea/Home/Home";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/adminCompany" element={<GetAllCompanies />} />
                <Route path="/adminCompany/add" element={<AddCompany />} />
                <Route path="/adminCompany/update/:id" element={<UpdateCompany />} />
                <Route path="/adminCompany/delete/:id" element={<DeleteCompany />} />
                <Route path="/adminCustomer" element={<GetAllCustomers />} />
                <Route path="/adminCustomer/add" element={<AddCustomer />} />
                <Route path="/adminCustomer/update/:id" element={<UpdateCustomer />} />
                <Route path="/adminCustomer/delete/:id" element={<DeleteCustomer />} />
                <Route path="/company" element={<GetAllCoupons />} />
                <Route path="/company/add" element={<AddCoupon />} />
                <Route path="/company/update/:id" element={<UpdateCoupon />} />
                <Route path="/company/delete/:id" element={<DeleteCoupon />} />
            </Routes>
        </div>
    );
}

export default Routing;
