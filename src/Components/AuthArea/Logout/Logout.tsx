import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../Redux/Store";
import { logoutAction } from "../../../Redux/WelcomeAppState";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();
    useEffect(() => {
        const res = window.confirm('Are you sure you want to logout?');
        if (res) {
            store.dispatch(logoutAction());
            // store.dispatch(???());
            navigate("/login");
        } else {
            navigate("/coupon");
        }
    });


    return (
        <div className="Logout">
            <>
            </>
        </div>
    );
}

export default Logout;
