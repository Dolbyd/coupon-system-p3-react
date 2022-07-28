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
import "./GetAllCoupons.css";

function GetAllCoupons(): JSX.Element {


    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().companyReducer.coupons);
    const [category, setCategory] = useState<string>("ALL");
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        if (store.getState().companyReducer.coupons.length === 0) {
            web.getAllCoupons()
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
        }
    }, []);



    return (
        <div className="GetAllCoupons">
            <h2>coupons list</h2>

            <Link to="add" className="btn btn-primary d-flex justify-content-center .d-sm-inline-flex">AddCoupon</Link>\

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
                                {coupons.map(t => <GetSingleCoupon key={t.id} coupon={t} />)}
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

export default GetAllCoupons;
