import { useNavigate } from "react-router-dom";
import "./AddCoupon.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CouponPayloadModel } from "../../../Models/Coupon";
import web from "../../../Service/WebApiCompany";
import notify from "../../../Service/Notyfication";
import store from "../../../Redux/Store";
import { CouponAddAction } from "../../../Redux/CompanyAppState";



function AddCoupon(): JSX.Element {

    const navigate = useNavigate();

    // step 6 - manage the schema
    const schema = yup.object().shape({
        category:
            yup.string()
                .required("category is required"),
        title:
            yup.string()
                .required("title is required"),
        description:
            yup.string()
                .required("description is required"),
        startDate:
            yup.date()
                .default(new Date())
                .typeError("You must specify a start date")
                .required("start date is required")
                .nullable().default(() => new Date()),
        endDate:
            yup.date()
                .min(new Date(), 'past end date 🤔')
                .default(new Date())
                .typeError("You must specify a end date")
                .required("end date is required")
                .nullable().default(() => new Date()),
        amount:
            yup.number()
                .min(0)
                .required("amount is required"),
        price:
            yup.number()
                .min(0)
                .required("price is required"),
        image:
            yup.string()
                .required("for now, write something "),
    });

    // step 7 - useForm for the rescue
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CouponPayloadModel>({ mode: "all", resolver: yupResolver(schema) });

    // step 8 - send to remote as post request
    const yalla = async (Coupon: CouponPayloadModel) => {

        web.addCoupon(Coupon)
            .then(res => {
                notify.success('Yay new Coupon created')

                navigate('/company')
                // update App state (Global State)
                store.dispatch(CouponAddAction(res.data))
            })
            .catch(err => {
                notify.error('Oppsy : ' + err.message);
                navigate('/company')
            })
    }

    const no = () => {
        navigate('/company')
    }


    return (
        <div className="AddCoupon">
            <h1>Add Coupon</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)}>
                <label htmlFor="category">Category</label>
                <select {...register('category')} placeholder="category" id="category">
                    <option value="FOOTBALL">FOOTBALL</option>
                    <option value="BASKETBALL">BASKETBALL</option>
                    <option value="BASEBALL">BASEBALL</option>
                </select>
                <span>{errors.category?.message}</span>
                <label htmlFor="title">Title</label>
                <input {...register('title')} type="text" placeholder="title" id="title" />
                <span>{errors.title?.message}</span>
                <label htmlFor="description">Description</label>
                <input {...register('description')} type="text" placeholder="description" id="description" />
                <span>{errors.category?.message}</span>
                <label htmlFor="startDate">Start Date</label>
                <input {...register('startDate')} type="date" placeholder="startDate" id="startDate" />
                <span>{errors.startDate?.message}</span>
                <label htmlFor="endDate">End Date</label>
                <input {...register('endDate')} type="date" placeholder="endDate" id="endDate" />
                <span>{errors.endDate?.message}</span>
                <label htmlFor="amount">Amount</label>
                <input {...register('amount')} type="number" placeholder="amount" id="amount" />
                <span>{errors.amount?.message}</span>
                <label htmlFor="price">Price</label>
                <input {...register('price')} type="number" placeholder="price" id="price" />
                <span>{errors.price?.message}</span>
                <label htmlFor="image">Image</label>
                <input {...register('image')} type="text" placeholder="image" id="image" />
                <span>{errors.image?.message}</span>
                <button disabled={!isValid}>Add</button>
                <button onClick={no}>❌</button>
            </form>

        </div>
    );
}

export default AddCoupon;
