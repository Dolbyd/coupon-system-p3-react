import "./SocialMedia.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function SocialMedia(): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/dolev.hirsch.3"> <BsFacebook size={70} /> </a>
            <a href="https://www.twitter.com/dolbydhta"> <BsTwitter size={70} /> </a>
            <a href="https://www.linkedin.com/in/dolev-hirsch-94a49422a/"> <BsLinkedin size={70} /> </a>
            <a href="https://www.github.com/Dolbyd">  <BsGithub size={70} /> </a>
        </div>
    );
}

export default SocialMedia;
