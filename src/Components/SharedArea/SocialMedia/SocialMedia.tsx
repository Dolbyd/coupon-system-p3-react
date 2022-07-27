import "./SocialMedia.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/dolev.hirsch.3"> <BsFacebook size={70} /> </a>
            <a href="https://www.facebook.com/dolev.hirsch.3"> <BsTwitter size={70} /> </a>
            <a href="https://www.facebook.com/dolev.hirsch.3"> <BsLinkedin size={70} /> </a>
            <a href="https://www.facebook.com/dolev.hirsch.3">  <BsGithub size={70} /> </a>
            <a href="https://www.facebook.com/dolev.hirsch.3"> <BsInstagram size={70} /> </a>
        </div>
    );
}

export default SocialMedia;
