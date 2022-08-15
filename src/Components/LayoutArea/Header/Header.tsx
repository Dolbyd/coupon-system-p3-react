
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header p-2 d-flex justify-content-between">
            <span>⚽️ 🏀 🏈 ⚾</span>
            <AuthMenu/>
        </div>
    );
}

export default Header;
