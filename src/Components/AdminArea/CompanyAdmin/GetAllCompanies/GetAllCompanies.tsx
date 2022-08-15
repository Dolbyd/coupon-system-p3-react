import { useEffect, useState } from "react";
import { CompanyModel } from "../../../../Models/Company";
import { CompaniesDownloadedAction } from "../../../../Redux/AdminCompanyAppState";
import store from "../../../../Redux/Store";
import notify from "../../../../Service/Notyfication";
import web from "../../../../Service/WebApiAdminCompany";
import GetSingleCompany from "../GetSingleCompany/GetSingleCompany";
import "./GetAllCompanies.css";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { useToken } from "../../../../Service/LoginHook";

function GetAllCompanies(): JSX.Element {

    const [companies, setCompanies] = useState<CompanyModel[]>(store.getState().adminCompanyReducer.companies);

    useToken();

    useEffect(() => {
        if (store.getState().adminCompanyReducer.companies.length === 0) {
            web.getAllCompanies()
                .then((res) => {
                    notify.success("yay got my companies")
                    // update component state
                    setCompanies(res.data);
                    // update App state (Global state)
                    store.dispatch(CompaniesDownloadedAction(res.data));
                })
                .catch((err) => {
                    notify.error(err.message);
                });
        }
    }, []);

    return (
        <div className="GetAllCompanies">
            <h2>Companies list</h2>
            <Link to="add" className="btn btn-primary d-flex justify-content-center .d-sm-inline-flex">Add New Company</Link> 
            <br />
            <div>
                {
                    (companies.length > 0)
                        ?
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-light">
                                    <th >Company Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map(t => <GetSingleCompany key={t.id} company={t} />)}
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

export default GetAllCompanies;
