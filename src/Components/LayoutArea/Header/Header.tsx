import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo/>
			<h1>this is header</h1>
        </div>
    );
}

export default Header;
