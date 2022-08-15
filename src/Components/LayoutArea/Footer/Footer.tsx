
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer  p-2 d-flex justify-content-between ">
            <div ><SocialMedia /></div>
            <h2  >All right reserved &copy; to Dolev Hirsch </h2>
            
        </div>
    );
}

export default Footer;
