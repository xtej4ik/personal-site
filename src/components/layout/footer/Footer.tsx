
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles["footer-container"]}>
            <p>© {new Date().getFullYear()}, All rights reserved.</p>
        </footer>
    )
}