import "./CouponsItem.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CouponModel } from "../../../Models/Coupon";
import moment from "moment";
import { Link } from "react-router-dom";

interface CouponsItemProps {
    coupon: CouponModel;
}

function CouponsItem(props: CouponsItemProps): JSX.Element {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.coupon.image} />
            <Card.Body>
                <Card.Title>{props.coupon.description}</Card.Title>
                <Card.Text>
                    {props.coupon.title}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Category : {props.coupon.category}</ListGroup.Item>
                <ListGroup.Item>Price: {props.coupon.price}</ListGroup.Item>
                <ListGroup.Item>Amount : {props.coupon.amount}</ListGroup.Item>
                <ListGroup.Item>End Date : {moment(props.coupon.endDate).format("DD/MM/yyyy")}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <td><Link to={`/customer/purchase/${props.coupon.id}`}>🛒</Link></td>
            </Card.Body>
        </Card>

    );
}

export default CouponsItem;
