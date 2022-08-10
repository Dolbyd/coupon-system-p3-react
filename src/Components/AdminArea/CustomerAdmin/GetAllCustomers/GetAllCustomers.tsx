import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Customer";
import { CustomersDownloadedAction } from "../../../../Redux/AdminCustomerAppState";
import store from "../../../../Redux/Store";
import { useToken } from "../../../../Service/LoginHook";
import notify from "../../../../Service/Notyfication";
import web from "../../../../Service/WebApiAdminCustomer";
import GetSingleCustomer from "../GetSingleCustomer/GetSingleCustomer";
import "./GetAllCustomers.css";

function GetAllCustomers(): JSX.Element {

    const [customers, setCustomers] = useState<CustomerModel[]>(store.getState().adminCustomerReducer.customers);

    useToken();
    
    useEffect(() => {
        if (store.getState().adminCustomerReducer.customers.length === 0) {
            web.getAllCustomers()
                .then((res) => {
                    notify.success("yay got my customers")
                    // update component state
                    setCustomers(res.data);
                    // update App state (Global state)
                    store.dispatch(CustomersDownloadedAction(res.data));
                })
                .catch((err) => {
                    notify.error(err.message);
                });
        }
    }, []);

    return (
        <div className="GetAllCustomers">
            <h2>Customers list</h2>
            <Link to="add" className="btn btn-primary">AddCustomer</Link>
            <br />
            <div>
                {
                    (customers.length > 0)
                        ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th >First Name</th>
                                    <th >Last Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map(t => <GetSingleCustomer key={t.id} customer={t} />)}
                            </tbody>
                        </Table>
                        :
                        <h1>no companies</h1>
                    // <EmptyView msg="No tasks for you" />
                }
            </div>

        </div>
    );
}

export default GetAllCustomers;
