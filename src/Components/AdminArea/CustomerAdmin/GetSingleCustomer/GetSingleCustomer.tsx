import { Link } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Customer";
import "./GetSingleCustomer.css";

interface GetSingleCustomerProps {
    customer: CustomerModel;
}

function GetSingleCustomer(props: GetSingleCustomerProps): JSX.Element {
    return (
        <tr>
            <td>{props.customer.firstName}</td>
            <td>{props.customer.lastName}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.password}</td>
            <td><Link to={`update/${props.customer.id}`}>✏️</Link></td>
            <td><Link to={`delete/${props.customer.id}`}>🗑️</Link></td>
        </tr>
    );
}

export default GetSingleCustomer;
