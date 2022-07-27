import "./AddCompany.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompanyPayloadModel } from "../../../../Models/Company";
import web from "../../../../Service/WebApiAdminCompany";
import notify from "../../../../Service/Notyfication";
import { useNavigate } from "react-router-dom";
import store from "../../../../Redux/Store";
import { CompanyAddAction } from "../../../../Redux/AdminCompanyAppState";

function AddCompany(): JSX.Element {

    const navigate = useNavigate();

    // step 6 - manage the schema
    const schema = yup.object().shape({
        name:
            yup.string()
                .required("name is required"),
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
        useForm<CompanyPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

    // step 8 - send to remote as post request
    const yalla = async (Company: CompanyPayloadModel) => {

        web.addCompany(Company)
            .then(res => {
                notify.success('Yay new Company created')
                
                navigate('/company')
                // update App state (Global State)
                store.dispatch(CompanyAddAction(res.data))
            })
            .catch(err => {
                notify.error('Oppsy : ' + err.message);
                navigate('/company')
            })
    }



    return (
        <div className="AddCompany">
            <h1>Add Company</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)}>
                <label htmlFor="name">Name</label>
                <input {...register('name')} type="text" placeholder="name" id="name" />
                <span>{errors.name?.message}</span>
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

export default AddCompany;
