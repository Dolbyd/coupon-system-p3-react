import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyDeletedAction } from "../../../../Redux/AdminCompanyAppState";
import store from "../../../../Redux/Store";
import notify from "../../../../Service/Notyfication";
import web from "../../../../Service/WebApiAdminCompany";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const companyId = +(params.id || 0);

    const [id, setId] = useState<number>(companyId);

    const no = () => {
        navigate('/adminCompany')
    }

    const yes = () => {
        web.deleteCompany(id)
            .then(res => {
                notify.success('yayyy deleted successfully');
                navigate('/adminCompany')
                /// update App state (Globals state)
                store.dispatch(CompanyDeletedAction(id))
            })
            .catch(err => {
                notify.error(err.manage);
                navigate('/adminCompany');
            })
    }

    return (
        <div className="DeleteCompany">
            <h1>Delete Company</h1>
            <h3>Are you sure you wont to delete company #{id}?</h3>
            <div>
                <button onClick={yes}>YES</button>
                <button onClick={no}>NO</button>
            </div>
        </div>
    );
}

export default DeleteCompany;
