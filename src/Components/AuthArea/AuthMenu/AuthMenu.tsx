import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../../Redux/Store";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    // const [isLogIn, setIsLogIn] = useState(store.getState().authReducer.user?.jwtToken?.length > 0);
    const [user, setUser] = useState(store.getState().authReducer.user)

    useEffect(() => {
        return store.subscribe(() => {
            // setIsLogIn(store.getState().authReducer.user?.jwtToken?.length > 0);
            setUser(store.getState().authReducer.user);

        });

    }, [])


    return (
        <div className="AuthMenu">

            {user?.jwtToken && user.clientType === "Administrator"
                ?
                (
                    <div>
                        Hello {user?.email}
                        <Link to="logout">Logout</Link>
                        <Link to="adminCompany" className="btn btn-primary navbar-form ">AdminCompanies</Link>
                        <Link to="adminCustomer" className="btn btn-primary navbar-form ">AdminCustomers</Link>
                        <Link to="coupon" className="btn btn-primary navbar-form " >Home page</Link>
                    </div>
                )
                :
                user?.jwtToken && user.clientType === "Company"
                    ?
                    (
                        <div>
                            Hello {user?.email}
                            <Link to="logout">Logout</Link>
                            <Link to="company" className="btn btn-primary navbar-form ">Company</Link>
                            <Link to="coupon" className="btn btn-primary navbar-form " >Home page</Link>
                        </div>
                    )
                    :
                    user?.jwtToken && user.clientType === "Customer"
                        ?
                        (
                            <div>
                                Hello {user?.email} ]
                                <Link to="logout">Logout</Link>
                                <Link to="customer" className="btn btn-primary navbar-form " >Customer</Link>
                                <Link to="coupon" className="btn btn-primary navbar-form " >Home page</Link>
                            </div>
                        )
                        :
                        (
                            <div>
                                Hello Guest
                                <Link to="login">Login</Link>
                                <Link to="coupon" className="btn btn-primary navbar-form " >Home page</Link>
                            </div>

                        )

            }


        </div >
    );
}

export default AuthMenu;
