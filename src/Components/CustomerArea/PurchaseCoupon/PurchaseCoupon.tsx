import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupon";
import { PurchaseCouponAction } from "../../../Redux/CustomerAppState";
import store from "../../../Redux/Store";
import { useToken } from "../../../Service/LoginHook";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCustomer";
import "./PurchaseCoupon.css";


function PurchaseCoupon(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);
    useToken();
    
    const [id, setId] = useState<number>(couponId);
    const [coupon, setCoupon] = useState<CouponModel>(store.getState().couponsReducer.coupons.filter(c => c.id === couponId)[0]);

    const no = () => {
        navigate('/customer')
    }

    const yes = () => {
        web.purchaseCoupon(coupon)
        .then((res)=>{
            notify.success('yayyy purchase coupon successfully');
            navigate('/customer');
            store.dispatch(PurchaseCouponAction(coupon))
        })
        .catch(err => {
            notify.error(err.manage);
            navigate('/customer');
        })
    }


    
    return (
        <div className="PurchaseCoupon">

            <h1>purchase Coupon</h1>
            <h3>Are you sure you wont to Purchase coupon #{id}?</h3>
            <div>
                <button onClick={yes}>YES</button>
                <button onClick={no}>NO</button>
            </div>

        </div>
    );
}

export default PurchaseCoupon;
