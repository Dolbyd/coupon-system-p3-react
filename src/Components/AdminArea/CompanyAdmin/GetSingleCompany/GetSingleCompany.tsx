import { CompanyModel } from "../../../../Models/Company";
import "./GetSingleCompany.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

interface GetSingleCompanyProps {
    company: CompanyModel;
}
function GetSingleCompany(props: GetSingleCompanyProps): JSX.Element {
    return (
        // <div className="GetSingleCompany">
        <tr>
            <td>{props.company.name}</td>
            <td>{props.company.email}</td>
            <td>{props.company.password}</td>
            <td><Link to={`update/${props.company.id}`}>✏️</Link></td>
            <td><Link to={`delete/${props.company.id}`}>🗑️</Link></td>
        </tr>

        // </div>
    );
}

export default GetSingleCompany;
