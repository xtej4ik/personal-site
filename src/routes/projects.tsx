import commonStyles from "../common/common.module.css";
import "./projects.css";

export default function Projects() {
  return (
    <div className={commonStyles["page-common"]}>
          <br />
      <h2>Projects</h2>
      <div className="projects-container">
        <section className="project-card">
          <h3>Backend News API</h3>
          <div>
            <a
              href="https://newsbackend.inna.codes/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <br />
            <a
              href="https://github.com/xtej4ik/BE-NC-NEWS-PROJECT"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </section>

        <section className="project-card">
          <h3>Frontend News Website</h3>
          <div>
            <a
              href="https://newsfrontend.inna.codes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <br />
            <a
              href="https://github.com/xtej4ik/nc-news"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </section>

        <section className="project-card">
          <h3>Motive</h3>
          <div>
            <a
              href="https://github.com/xtej4ik/motive-northcoders"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
