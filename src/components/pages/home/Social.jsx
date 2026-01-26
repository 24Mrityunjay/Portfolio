import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";

const Social = () => {
  return (
    <div className="home-social">
          <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
          >
              <IoLogoGithub />
          </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
          >
              <IoLogoInstagram />
          </a>
            <a
              href="https://www.linkedin.com/in/mrityunjay-yadav/"
              target="_blank"
              rel="noopener noreferrer"
          >
              <IoLogoLinkedin />
          </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
          >
              <IoLogoFacebook />
          </a>
    </div>
  )
}

export default Social