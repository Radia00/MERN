import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialLink = (porps) => {
//   console.log(porps);
  return (
    <div>
      {porps.footer.map((item, index) => {
        console.log(item);
        return (
          <a href={item.link} key={index} className="text-white">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        );
      })}
      {/* <a href={porps.footer.link} className="text-white">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href={porps.footer.link} className="text-white">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={porps.footer.link} className="text-white">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href={porps.footer.link} className="text-white">
        <FontAwesomeIcon icon={faTwitter} />
      </a> */}
    </div>
  );
};

export default SocialLink;
