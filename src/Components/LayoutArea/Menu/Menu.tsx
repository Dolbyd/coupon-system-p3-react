import { Link } from "react-router-dom";
import MenuLink from "../../RoutingArea/MenuLink/MenuLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu ">
            {/* <h1>this is menu</h1> */}
            {/* <MenuLink to="company">Get All Companies</MenuLink> */}
            <div className="d-flex justify-content-center ">
                <Link to="company" className="btn btn-primary navbar-form ">Companies</Link>
                <Link to="customer" className="btn btn-primary navbar-form ">Customers</Link>
            </div>

        </div>
    );
}

export default Menu;
