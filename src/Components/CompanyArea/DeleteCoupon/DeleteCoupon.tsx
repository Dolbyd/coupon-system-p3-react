import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  CouponDeletedAction } from "../../../Redux/CompanyAppState";

import store from "../../../Redux/Store";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCompany";
import "./DeleteCoupon.css";

function DeleteCoupon(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);

    const [id, setId] = useState<number>(couponId);

    const no = () => {
        navigate('/company')
    }

    const yes = () => {
        web.deleteCoupon(id)
            .then(res => {
                notify.success('yayyy deleted successfully');
                navigate('/company')
                /// update App state (Globals state)
                store.dispatch(CouponDeletedAction(id))
            })
            .catch(err => {
                notify.error(err.manage);
                navigate('/company');
            })
    }

    return (
        <div className="DeleteCoupon">
            <h1>Delete Coupon</h1>
            <h3>Are you sure you wont to delete coupon #{id}?</h3>
            <div>
                <button onClick={yes}>YES</button>
                <button onClick={no}>NO</button>
            </div>
        </div>
    );
}

export default DeleteCoupon;
