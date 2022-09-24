import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";
import {AiFillInstagram} from "react-icons/ai"

export default function Footer() {
  return (
    <footer>
      <div className="red-footer" />

      <ul className="footer-links">
        <li>
          <a
            href="https://www.linkedin.com/in/eduardovlemes/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin size="23" className="logo-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://pt-br.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoFacebook size="23" className="logo-icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram size="23" className="logo-icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <IoLogoYoutube size="23" className="logo-icon"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}
