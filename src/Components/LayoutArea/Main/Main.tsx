import { Outlet } from "react-router-dom";
import AddCompany from "../../AdminArea/CompanyAdmin/AddCompany/AddCompany";
import GetAllCompanies from "../../AdminArea/CompanyAdmin/GetAllCompanies/GetAllCompanies";
import GetSingleCompany from "../../AdminArea/CompanyAdmin/GetSingleCompany/GetSingleCompany";
import Routing from "../../RoutingArea/Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">

            <Routing />
            <Outlet />
            {/* <AddCompany/> */}
        </div>
    );
}

export default Main;
