import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Login.css";
import { CredentialsModel} from "../../../Models/Welcome";
import web from "../../../Service/WebApiWelcome";
import notify from "../../../Service/Notyfication";
import store from "../../../Redux/Store";
import { loginAction } from "../../../Redux/WelcomeAppState";

function Login(): JSX.Element {

    const navigate = useNavigate();
    

    const schema = yup.object().shape({
        email:
            yup.string().email("invalid email pattern")
                .required("email is required"),
        password:
            yup.string()
                .min(3, "at list 3 characters required")
                .max(8, "at most 8 characters required")
                .required("password is required"),
        clientType:
            yup.string()
            .required("client type is required")
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CredentialsModel>({ mode: "all", resolver: yupResolver(schema) });

    const loginUser = async (model: CredentialsModel) => {
        const credentials = new CredentialsModel();
        credentials.email = model.email;
        credentials.password = model.password;
        credentials.clientType = model.clientType;

        console.log('going to send to remote server...' + credentials);

        web.login(credentials)
            .then((res) => {
                notify.success("login successfully")
                store.dispatch(loginAction(res.data));
                navigate('/coupon') // should be client type
            })
            .catch(err => {
                console.log(err);
                notify.error("email , password or client type are incorrect...plz try again");
            })
    }


    return (
        <div className="Login  ">

            <h1 >Login</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(loginUser)} >
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" placeholder="email" id="email" />
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" placeholder="password" id="password" />
                <span>{errors.password?.message}</span>
                <select {...register('clientType')} placeholder="clientType" id="clientType">
                    <option value="Administrator">Admin</option>
                    <option value="Company">Company</option>
                    <option value="Customer">Customer</option>
                </select>
                <button disabled={!isValid}>Login</button>
            </form>
        </div>
    );
}

export default Login;
