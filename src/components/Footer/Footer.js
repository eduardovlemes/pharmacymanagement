import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="red-footer" />

      <ul className="footer-links">
        <p>SIGA-NOS NAS REDES</p>
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
            <IoLogoInstagram size="23" className="logo-icon"/>
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
