import { ALL } from "dns";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupon";
import { CouponDownloadedAction } from "../../../Redux/CompanyAppState";
import store from "../../../Redux/Store";
import { useToken } from "../../../Service/LoginHook";
import notify from "../../../Service/Notyfication";
import web from "../../../Service/WebApiCompany"
import GetSingleCoupon from "../GetSingleCoupon/GetSingleCoupon";
import "./GetAllCompanyCoupons.css";

function GetAllCompanyCoupons(): JSX.Element {


    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().companyReducer.coupons);
    const [category, setCategory] = useState<string>("ALL");
    const [filter, setFilter] = useState<CouponModel[]>(coupons);
    const [price, setPrice] = useState<number>(0);

    useToken();

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

            <Link to="add" className="btn btn-primary d-flex justify-content-center .d-sm-inline-flex">Add New Coupon</Link>

            <span className="display-6">Category 👉 </span>
            <select onChange={handleSelect} placeholder="category" id="category">
                <option value="ALL">ALL</option>
                <option value="FOOTBALL">FOOTBALL</option>
                <option value="BASKETBALL">BASKETBALL</option>
                <option value="BASEBALL">BASEBALL</option>

            </select>
            
            <span className="display-6"> Max price 👉 </span>
            <input onInput={handleInput} type="range" max={1000} /> <span className="display-6">{price}</span>


            <br />
            <div>
                {
                    (coupons.length > 0)
                        ?
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-light">
                                    <th >Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Amount</th>
                                    <th>Price</th>
                                    {/* <th>image</th> */}
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(category === "ALL" ? coupons : filter).filter((c) => {
                                    return c.price! > price;
                                }).map(t => <GetSingleCoupon key={t.id} coupon={t} />)}
                                
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
