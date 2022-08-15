import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../Redux/Store";
import notify from "./Notyfication";

export function useToken():any{

    const navigate = useNavigate();

    useEffect ( () => {
        console.log(store.getState().authReducer.user.jwtToken);
        if(!store.getState().authReducer.user?.jwtToken){
            console.log("kishkush");
            notify.error("plz login");
            navigate ("/login");
        }
    },[])
}