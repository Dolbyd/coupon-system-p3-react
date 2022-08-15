import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerDeletedAction } from "../../../../Redux/AdminCustomerAppState";
import store from "../../../../Redux/Store";
import notify from "../../../../Service/Notyfication";
import web from "../../../../Service/WebApiAdminCustomer";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const customerId = +(params.id || 0);

    const [id, setId] = useState<number>(customerId);

    const no = () => {
        navigate('/adminCustomer')
    }

    const yes = () => {
        web.deleteCustomer(id)
            .then(res => {
                notify.success('yayyy deleted successfully');
                navigate('/adminCustomer')
                /// update App state (Globals state)
                store.dispatch(CustomerDeletedAction(id))
            })
            .catch(err => {
                notify.error(err.manage);
                navigate('/adminCustomer');
            })
    }



    return (
        <div className="DeleteCustomer">
            <h1>Delete Customer</h1>
            <h3>Are you sure you want to delete the customer #{id}?</h3>
            <div>
                <button onClick={yes}>YES</button>
                <button onClick={no}>NO</button>
            </div>

        </div>
    );
}

export default DeleteCustomer;
