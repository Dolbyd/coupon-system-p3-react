import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";
import { CouponModel, CouponPayloadModel } from "../../../Models/Coupon";
import store from "../../../Redux/Store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./UpdateCoupon.css";
import web from "../../../Service/WebApiCompany";
import notify from "../../../Service/Notyfication";
import { CouponUpdatedAction } from "../../../Redux/CompanyAppState";


function UpdateCoupon(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);

    const [id, setId] = useState<number>(couponId);
    const [coupon, setCoupon] = useState<CouponModel>(store.getState().companyReducer.coupons.filter(t => t.id === id)[0]);

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
                // .min(new Date(), 'past start date 🤔')

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
                .required("amount is required"),
        image:
            yup.string()
                .required("for now, write something "),
    });


    // step 7 - preaper the hook
    let defaultValuesObj = { ...coupon };

    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<CouponPayloadModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({ control });

    // step 8 - send to remote as post request
    const yalla = async (coupon: CouponModel) => {

        web.updateCoupon(id, coupon)
            .then(res => {
                notify.success('Yay  coupon updated');
                
                // update App state (Globals state)
                store.dispatch(CouponUpdatedAction(coupon))
                navigate('/company')
            })
            .catch(err => { notify.error('Oppsy : ' + err.message) })
    }

    return (
        <div className="UpdateCoupon">

            <h1>Update Coupon</h1>
            {/* step 9 - handelSubmit */}
            <form onSubmit={handleSubmit(yalla)}>
                <label htmlFor="category">Category</label>
                <select {...register('category')} placeholder="category" id="category">
                    <option value="FOOD">FOOD</option>
                    <option value="ELECTRICITY">ELECTRICITY</option>
                    <option value="RESTAURANT">RESTAURANT</option>
                    <option value="VACATION">VACATION</option>
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
                <button disabled={!isDirty}>✔️</button>
            </form>
        </div>
    );
}

export default UpdateCoupon;
