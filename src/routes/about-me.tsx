import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import commonStyles from "../common/common.module.css";
export default function AboutMe() {
  return (
    <div className={commonStyles["page-common"]}>
      <div className={commonStyles["parallax"]}>Hi, I'm Inna!</div>

      <div className={commonStyles["parallax-second-image"]}>
        <section>
          <h2>Welcome to My Portfolio!</h2>
          <p>
            I'm thrilled to share my journey with you as I transition from the
            world of accounting to pursue a career in a more creatively
            fulfilling field. As a recent bootcamp graduate, I am eager to
            showcase my unique skill set and passion for this exciting new path.
          </p>
        </section>
      </div>

      <div className={commonStyles["parallax-third-image"]}>
        <section>
          <h2>From Accounting to Web Development</h2>
          <p>
            In my previous role as an accountant, I honed my analytical and
            problem-solving abilities, becoming proficient in financial
            management, data analysis, and budgeting. I found value in precision
            and attention to detail, ensuring accuracy in all my tasks. While my
            time in accounting was invaluable, I felt a longing for a more
            innovative and dynamic environment that would allow me to express my
            creativity fully.
          </p>
        </section>
      </div>
      <div className={commonStyles["parallax-fourth-image"]}>
        <section>
          <h2>My Web Development Skills</h2>
          <p>
            During my bootcamp experience, I immersed myself in various aspects
            of web development and design. I developed a strong foundation in
            front-end technologies, including HTML, CSS, and JavaScript,
            enabling me to bring captivating and user-friendly interfaces to
            life. Additionally, I dived into back-end technologies such as
            Node.js and databases, which empowered me to build robust and
            interactive web applications.
          </p>
          <p>
            What truly drives me is the opportunity to create meaningful
            experiences for users through intuitive and visually appealing
            designs. I have a keen eye for aesthetics and strive to strike the
            perfect balance between functionality and beauty in every project.
            My time in accounting has instilled in me a profound understanding
            of the importance of user experience and how it impacts the success
            of a business or product.
          </p>
        </section>
      </div>
      <div className={commonStyles["parallax-fifth-image"]}>
        <section>
          <h2>Motivation and Growth</h2>
          <p>
            Beyond technical skills, I am a proactive learner and enjoy staying
            updated with the latest trends and best practices in web
            development. I am constantly seeking new challenges and projects
            that push me to grow as a developer and designer. My ability to
            adapt quickly and think critically allows me to overcome obstacles
            and deliver high-quality solutions efficiently.
          </p>
          <p>
            Motivated by a desire to make a positive impact, I am excited to
            embark on this new journey and contribute my unique perspective to
            the world of web development and design. I am eager to collaborate
            with like-minded individuals and teams to create innovative
            solutions that leave a lasting impression. As I grow and evolve in
            this ever-changing industry, I remain committed to continuous
            improvement and the pursuit of excellence.
          </p>
        </section>
      </div>
      <div className={commonStyles["parallax-sixth-image"]}>
        <section>
          <h2>Thank You for Visiting!</h2>
          <p>
            Thank you for visiting my portfolio website, and I look forward to
            connecting with you to explore potential opportunities for
            collaboration and growth. Let's bring creativity and functionality
            together to build the digital experiences of tomorrow!
          </p>
        </section>
      </div>
    </div>
  );
}
