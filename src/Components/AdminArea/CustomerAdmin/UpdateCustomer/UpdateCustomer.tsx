import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { CustomerPayloadModel } from "../../../../Models/Customer";
import { CustomerModel } from "../../../../Models/Customer";
import store from "../../../../Redux/Store";
import "./UpdateCustomer.css";
import web from "../../../../Service/WebApiAdminCustomer";
import notify from "../../../../Service/Notyfication";
import { CustomerUpdatedAction } from "../../../../Redux/AdminCustomerAppState";


function UpdateCustomer(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const customerId = +(params.id || 0);

    const [id, setId] = useState<number>(customerId);
    const [customer, setCustomer] = useState<CustomerModel>(store.getState().adminCustomerReducer.customers.filter(t => t.id === id)[0]);
    const [origin, setOrigin] = useState<CustomerPayloadModel>({ 'firstName': customer.firstName, 'lastName': customer.lastName, 'email': customer.email, 'password': customer.password });

    // step 6 - manage the schema
    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("must be change"),
        lastName:
            yup.string()
                .required("must be change"),
        email:
            yup.string().email("invalid email pattern")
                .required("email is required"),
        password:
            yup.string()
                .min(3, "at list 3 characters required")
                .max(8, "at most 8 characters required")
                .required("password is required"),
    });

    // step 7 - preaper the hook

    // let defaultValuesObj = { id: 0, title: "", description: "", group: "", when: new Date() };
    let defaultValuesObj = { ...origin };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<CustomerPayloadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({ control });

    // step 8 - send to remote as post request
    const yalla = async (customer: CustomerPayloadModel) => {

        web.updateCustomer(id, customer)
            .then(res => {
                notify.success('Yay new tasks updated');
                navigate('/customer')
                // update App state (Globals state)
                store.dispatch(CustomerUpdatedAction(res.data))
            })
            .catch(err => { notify.error('Oppsy : ' + err.message) })
    }

    return (
        <div className="UpdateCustomer">
            <h1>update Customer</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)} >
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName')} type="text" placeholder="firstName" id="firstName" />
                <span>{errors.firstName?.message}</span>
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName')} type="text" placeholder="lastName" id="lastName" />
                <span>{errors.lastName?.message}</span>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" placeholder="email" id="email" />
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" placeholder="password" id="password" />
                <span>{errors.password?.message}</span>
                <button disabled={!isDirty}>✔️</button>
            </form>

        </div>
    );
}

export default UpdateCustomer;
