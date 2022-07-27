import Rectangle from "../../SharedArea/Rectangle/Rectangle";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <span><SocialMedia /></span>
            
            <h2 className="d-flex justify-content-center">All right reserved &copy; to Dolbyd </h2> 
            <span className="d-flex justify-content-left"><Rectangle/></span>
            
        </div>
    );
}

export default Footer;
