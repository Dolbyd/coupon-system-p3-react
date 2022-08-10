import { Link } from "react-router-dom";
import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header p-2 d-flex justify-content-between">
            <Logo/>
			<h1>this is header</h1>
            <Link to="login" className="btn btn-primary navbar-form " >LOGIN</Link>
        </div>
    );
}

export default Header;
