import ProjectList from '../../project-list/ProjectList'
import styles from './Content.module.css'

export default function Content() {
    return (
        <main className={styles["content-container"]}>
            <ProjectList />
        </main>
    )
}