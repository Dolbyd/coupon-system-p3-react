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
import Home from "../../PageArea/Home/Home";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/company" element={<GetAllCompanies />} />
                <Route path="/company/add" element={<AddCompany />} />
                <Route path="/company/update/:id" element={<UpdateCompany />} />
                <Route path="/company/delete/:id" element={<DeleteCompany />} />
                <Route path="/customer" element={<GetAllCustomers />} />
                <Route path="/customer/add" element={<AddCustomer />} />
                <Route path="/customer/update/:id" element={<UpdateCustomer />} />
                <Route path="/customer/delete/:id" element={<DeleteCustomer />} />
            </Routes>
        </div>
    );
}

export default Routing;
