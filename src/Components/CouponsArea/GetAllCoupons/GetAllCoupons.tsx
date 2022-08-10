import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { CouponModel } from "../../../Models/Coupon";
import { couponsDownloadedAction } from "../../../Redux/CouponsAppState";

import store from "../../../Redux/Store";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCoupon";
import CouponsItem from "../CouponsItem/CouponsItem";
import "./GetAllCoupons.css";

function GetAllCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponsReducer.coupons);
    const [category, setCategory] = useState<string>("ALL");
    const [filter, setFilter] = useState<CouponModel[]>(coupons);
    const [price, setPrice] = useState<number>(0);


    useEffect(() => {
        // if (store.getState().couponsReducer.coupons.length === 0) 
            web.getAllCoupons()
                .then((res) => {
                    notify.success("yay got my coupons")
                    // update component state
                    setCoupons(res.data);
                    // update App state (Global state)
                    store.dispatch(couponsDownloadedAction(res.data));
                    console.log(res.data);
                })
                .catch((err) => {
                    notify.error(err.message);
                });
        
    }, []);

    const handleSelect = (e: any) => {
        let filter = coupons;
        if (e !== "ALL") {
            filter = coupons.filter((c) => {
                return c.category === e.target.value;
            });
        }
        setCategory(e.target.value);
        setFilter(filter);
    }

    const handleInput = (e: any) => {

        setPrice(e.target.value);
    }

    return (
        <div className="GetAllCoupons ">

            <h1>All Coupons</h1>
            <select onChange={handleSelect} placeholder="category" id="category">
                <option value="ALL">ALL</option>
                <option value="FOOD">FOOD</option>
                <option value="ELECTRICITY">ELECTRICITY</option>
                <option value="RESTAURANT">RESTAURANT</option>
                <option value="VACATION">VACATION</option>
            </select>
            <h2>{price}</h2>
            <input onInput={handleInput} type="range" max={10000} />
            <div className="d-flex justify-content-center g-4">
                <Row xs={1} md={2} lg={4} className="g-4">
                    {(category === "ALL" ? coupons : filter).filter((c) => {
                        return c.price! > price;
                    }).map(t => <CouponsItem key={t.id} coupon={t} />)}
                </Row>
            </div>




        </div>
    );
}

export default GetAllCoupons;
