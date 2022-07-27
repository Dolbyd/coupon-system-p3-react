import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./AddCustomer.css";
import { useForm } from "react-hook-form";
import { CustomerPayloadModel } from "../../../../Models/Customer";
import web from "../../../../Service/WebApiAdminCustomer";
import notify from "../../../../Service/Notyfication";
import store from "../../../../Redux/Store";
import { CustomerAddAction } from "../../../../Redux/AdminCustomerAppState";

function AddCustomer(): JSX.Element {

    const navigate = useNavigate();

    // step 6 - manage the schema
    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("First Name is required"),
        lastName:
            yup.string()
                .required("Last Name is required"),
        email:
            yup.string().email("invalid email pattern")
                .required("email is required"),
        password:
            yup.string()
                .min(3, "at list 3 characters required")
                .max(8, "at most 8 characters required")
                .required("password is required"),
    });

    // step 7 - useForm for the rescue
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CustomerPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

    // step 8 - send to remote as post request
    const yalla = async (Customer: CustomerPayloadModel) => {

        web.addCustomer(Customer)
            .then(res => {
                notify.success('Yay new Customer created')

                navigate('/customer')
                // update App state (Global State)
                store.dispatch(CustomerAddAction(res.data))
            })
            .catch(err => {
                notify.error('Oppsy : ' + err.message);
                navigate('/customer')
            })
    }

    return (
        <div className="AddCustomer">
            <h1>Add Customer</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)}>
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName')} type="text" placeholder="firstName" id="firstName" />
                <span>{errors.firstName?.message}</span>
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName')} type="text" placeholder="lastName" id="lastName" />
                <span>{errors.firstName?.message}</span>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" placeholder="email" id="email" />
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" placeholder="password" id="password" />
                <span>{errors.password?.message}</span>
                <button disabled={!isValid}>Add</button>
            </form>

        </div>
    );
}

export default AddCustomer;
