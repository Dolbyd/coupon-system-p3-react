import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [isLogIn, setIsLogIn] = useState(store.getState().authReducer.user?.jwtToken?.length > 0);
    const [email, setEmail] = useState(store.getState().authReducer.user?.email)

    useEffect(() => {
        return store.subscribe(() => {
            setIsLogIn(store.getState().authReducer.user?.jwtToken?.length > 0);
            setEmail(store.getState().authReducer.user?.email);
            
        });
        
    }, [])

    return (
        <div className="AuthMenu">
            {
                isLogIn
                    ?
                    <>Hello {email}  <Link to="logout">Logout</Link></>
                    :
                    <>Hello Guest  <Link to="login">Login</Link></>
            }
        </div>
    );
}

export default AuthMenu;
