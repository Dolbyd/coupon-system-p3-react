import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyPayloadModel } from "../../../../Models/Company";
import { CompanyModel } from "../../../../Models/Company";
import store from "../../../../Redux/Store";
import "./UpdateCompany.css";
import web from "../../../../Service/WebApiAdminCompany";
import notify from "../../../../Service/Notyfication";
import { CompanyUpdatedAction } from "../../../../Redux/AdminCompanyAppState";

function UpdateCompany(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const companyId = +(params.id || 0);

    const [id, setId] = useState<number>(companyId);
    const [company, setCompany] = useState<CompanyModel>(store.getState().adminCompanyReducer.companies.filter(comp => comp.id === id)[0]);
    const [origin, setOrigin] = useState<CompanyPayloadModel>({ 'name': company.name, 'email': company.email, 'password': company.password });

    // step 6 - manage the schema
    const schema = yup.object().shape({
        name:
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
        = useForm<CompanyPayloadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({ control });

    // step 8 - send to remote as post request
    const yalla = async (company: CompanyPayloadModel) => {

        web.updateCompany(id, company)
            .then(res => {
                notify.success('Yay new tasks updated');
                navigate('/company')
                // update App state (Globals state)
                store.dispatch(CompanyUpdatedAction(res.data))
            })
            .catch(err => { notify.error('Oppsy : ' + err.message) })
    }

    return (
        <div className="UpdateCompany">
            <h1>update Company</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)} >
            <label htmlFor="name">Name</label>
                <input {...register('name')} type="text" placeholder="name" id="name" />
                <span>{errors.name?.message}</span>
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

export default UpdateCompany;
