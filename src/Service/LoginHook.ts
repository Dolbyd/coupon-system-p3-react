import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../Redux/Store";
import notify from "./Notyfication";

export function useToken():any{
    const navigate = useNavigate();

    useEffect ( () => {
        if(!store.getState().authReducer.user.jwtToken){
            notify.error("plz login");
            navigate ("/login");
        }
    },[])
}