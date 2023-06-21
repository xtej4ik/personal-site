import styles from './Footer.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <p>© {new Date().getFullYear()}, All rights reserved.</p>
      <div className={styles["body"]}>
        <ul className={styles["socialIcons"]}>
          <li>
            <a
              href="https://github.com/xtej4ik"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/inna-chtej/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
              <a
                href="https://www.facebook.com/inna.savka"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li>
        </ul>
      </div>
    </footer>
  );
}
