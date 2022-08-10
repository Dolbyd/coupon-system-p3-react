import { ALL } from "dns";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupon";
import { CouponDownloadedAction } from "../../../Redux/CompanyAppState";
import store from "../../../Redux/Store";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCompany"
import GetSingleCoupon from "../GetSingleCoupon/GetSingleCoupon";
import "./GetAllCompanyCoupons.css";

function GetAllCompanyCoupons(): JSX.Element {


    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().companyReducer.coupons);
    const [category, setCategory] = useState<string>("ALL");
    const [filter, setFilter] = useState<CouponModel[]>(coupons);
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        // if (store.getState().companyReducer.coupons.length === 0) 
            web.getAllCompanyCoupons()
                .then((res) => {
                    notify.success("yay got my coupons")
                    // update component state
                    setCoupons(res.data);
                    // update App state (Global state)
                    store.dispatch(CouponDownloadedAction(res.data));
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
        <div className="GetAllCoupons">
            <h2>coupons list</h2>

            <Link to="add" className="btn btn-primary d-flex justify-content-center .d-sm-inline-flex">AddCoupon</Link>

            <select onChange={handleSelect} placeholder="category" id="category">
                <option value="ALL">ALL</option>
                <option value="FOOD">FOOD</option>
                <option value="ELECTRICITY">ELECTRICITY</option>
                <option value="RESTAURANT">RESTAURANT</option>
                <option value="VACATION">VACATION</option>
            </select>
            <h2>{price}</h2>
            <input onInput={handleInput} type="range" max={10000} />


            <br />
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
                                    <th>startDate</th>
                                    <th>endDate</th>
                                    <th>amount</th>
                                    <th>price</th>
                                    <th>image</th>
                                    <th>update</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(category === "ALL" ? coupons : filter).filter((c) => {
                                    return c.price! > price;
                                }).map(t => <GetSingleCoupon key={t.id} coupon={t} />)}
                                {/* {coupons.map(t => <GetSingleCoupon key={t.id} coupon={t} />)} */}
                            </tbody>
                        </Table>
                        :
                        <h1>no coupons</h1>
                    // <EmptyView msg="No tasks for you" />
                }
            </div>

        </div>
    );
}

export default GetAllCompanyCoupons;
