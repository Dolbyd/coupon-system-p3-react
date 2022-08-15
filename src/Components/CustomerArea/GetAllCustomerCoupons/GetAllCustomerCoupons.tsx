import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupon";
import { CouponDownloadedAction } from "../../../Redux/CustomerAppState";
import store from "../../../Redux/Store";
import { useToken } from "../../../Service/LoginHook";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCustomer";
import GetSingleCoupon from "../GetSingleCoupon/GetSingleCoupon";

import "./GetAllCustomerCoupons.css";

function GetAllCustomerCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    const [category, setCategory] = useState<string>("ALL");
    const [filter, setFilter] = useState<CouponModel[]>(coupons);

    useToken();

    useEffect(() => {
        // if (store.getState().customerReducer.coupons.length === 0) 
        web.getAllCustomerCoupons()
            .then((res) => {
                notify.success("yay got my coupons")

                setCoupons(res.data);
                store.dispatch(CouponDownloadedAction(res.data));
            })
            .catch((err) => {
                notify.error(err.message);
            })

    }, [])

    const handleSelect = (e: any) => {
        let filter = coupons;
        if (e !== "ALL") {
            filter = coupons.filter((c) => {
                return c.category === e.target.value;
            })
        }
        setCategory(e.target.value);
        setFilter(filter);
        console.log(filter);
    }

    return (
        <div className="GetAllCustomerCoupons">
            <h2>coupons list</h2>

            <select onChange={handleSelect} placeholder="category" id="category">
                <option value="ALL">ALL</option>
                <option value="FOOD">FOOD</option>
                <option value="ELECTRICITY">ELECTRICITY</option>
                <option value="RESTAURANT">RESTAURANT</option>
                <option value="VACATION">VACATION</option>
                <option value="FOOTBALL">FOOTBALL</option>
                <option value="BASKETBALL">BASKETBALL</option>
                <option value="BASEBALL">BASEBALL</option>
            </select>

            <div>
                {
                    (coupons.length > 0)
                        ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th >Category</th>
                                    <th>title</th>
                                    <th>description</th>
                                    <th>endDate</th>
                                    <th>price</th>
                                    {/* <th>image</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {(category === "ALL" ? coupons : filter).map(t => <GetSingleCoupon key={t.id} coupon={t} />)}
                            </tbody>
                        </Table>
                        :
                        <h1>no coupons</h1>
                }
            </div>
        </div>
    );
}

export default GetAllCustomerCoupons;
