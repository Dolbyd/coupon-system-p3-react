import { Link } from "react-router-dom";
import MenuLink from "../../RoutingArea/MenuLink/MenuLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu ">
            {/* <h1>this is menu</h1> */}
            {/* <MenuLink to="company">Get All Companies</MenuLink> */}
            <div className="d-flex justify-content-center ">
                <Link to="adminCompany" className="btn btn-primary navbar-form ">AdminCompanies</Link>
                <Link to="adminCustomer" className="btn btn-primary navbar-form ">AdminCustomers</Link>
                <Link to="company" className="btn btn-primary navbar-form ">Company</Link>
            </div>
            <p></p>

        </div>
    );
}

export default Menu;
