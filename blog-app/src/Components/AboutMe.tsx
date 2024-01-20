import '../CSS/About.css'
const Blog = () => {
    return <div className="container">
        <div className="about-section">

            <h1>A Little About Myself</h1>
            <blockquote>
                “Growth and comfort do not coexist. Embrace the discomfort that comes with learning; it's a sign of improvement and personal development.” – Ginni Rometty
            </blockquote>

            <p>
                    Greetings! I'm a seasoned mobile application developer with a strong affinity for creating impactful
                    digital experiences. For years, I've honed my skills in the iOS, backend and frontend spheres.
                </p>
                <p>
                    My passion extends beyond just mobile apps. I am deeply fascinated by the vast spectrum of technology – from delving into the expansive world of cloud computing to understanding the complexities of emerging tech trends. My professional path is characterized by a relentless pursuit of knowledge, constantly seeking new challenges and eagerly immersing myself in solving complex problems.                </p>
            <p>
                My latest venture is exploring the expansive world of cloud computing and DevOps. While I am not yet an expert in CI/CD pipelines, my ongoing learning journey in this area has already begun to shape my understanding of efficient software delivery. Similarly, I have some foundational knowledge of cloud service architectures, particularly fascinated by their scalability and robustness.
            </p>
            <h2>Technical Skillset</h2>
            <ul className="list">
                <li>Mobile Development: Expertise in iOS application development.</li>
                <li>Frontend Development: Skilled in JavaScript, with experience in React and Redux for building dynamic
                    user interfaces.
                </li>
                <li>Cloud Computing: Building foundational knowledge in cloud service architectures.</li>
                <li>CI/CD: Actively learning and exploring continuous integration and deployment methodologies.</li>
                <li>Containerization: Gaining insights into Docker and Kubernetes.</li>
                <li>DevOps: Exploring DevOps practices to understand their impact on software development and
                    operations.
                </li>
                <li>Spring Boot: Developing an understanding of Spring Boot for efficient back-end services.</li>
            </ul>
            <h2>Languages</h2>
            <ul className="list">
                <li>Swift: Crafting iOS applications with proficiency.</li>
                <li>TypeScript: Developing scalable web applications.</li>
                <li>Java: Utilizing for backend development using Spring framwork.</li>
                <li>JavaScript: Implementing in frontend development and Node.js projects.</li>
            </ul>
            <h2>DevOps Tools</h2>
            <ul className="list">
                <li>AWS: Gaining knowledge in AWS services and cloud infrastructure management.</li>
                <li>Kubernetes: Learning container orchestration for scalable and efficient deployment.</li>
                <li>Docker: Acquiring skills in container creation and management for streamlined development processes.</li>
            </ul>
        </div>
    </div>;
};

export default Blog;