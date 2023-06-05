import styles from './Hero.module.css';

export default function Hero() {
    const text = `if (today.self > yesterday.self) {\n
        console.log("You are on the right path!")}`;
    return (
        <div className={styles.hero}>
            <div className={styles["hero-content"]}>
                <h1 className={styles["animation-flyout-right"]}>Inna</h1>
                <h2 className={styles["animation-flyout-left"]}>Web Developer</h2>
        <pre className={styles["animation-flyout-left"]}>{text}</pre>
            </div>
        </div>
    )
}