import moment from "moment";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupon";
import "./GetSingleCoupon.css";


interface GetSingleCouponProps{
    coupon:CouponModel;
}
function GetSingleCoupon(props:GetSingleCouponProps): JSX.Element {
    return (
        <tr className="bg-light">
            <td>{props.coupon.category}</td>
            <td>{props.coupon.title}</td>
            <td>{props.coupon.description}</td>
            <td><span>{moment(props.coupon.endDate).format("DD/MM/yyyy")}</span></td>
            <td>{props.coupon.price}</td>
            {/* <td>{props.coupon.image}</td> */}
            

        </tr>
    );
}

export default GetSingleCoupon;
