import { Link } from "react-router-dom";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header p-2 d-flex justify-content-between">
            {/* <Logo/> */}
            <span>⚽️ 🏀 🏈 ⚾</span>
			<h1 >Sports Coupon System</h1>
           
            <AuthMenu/>
        </div>
    );
}

export default Header;
