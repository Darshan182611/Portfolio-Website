import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>IILM University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science with a specialization in
              Cybersecurity. Building a strong foundation in Data Structures,
              Algorithms, and network security. Expected graduation in 2027.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer Intern</h4>
                <h5>WeIntern</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Collaborated on building and maintaining scalable web applications
              using full-stack technologies. Demonstrated commitment to agile
              development practices and high-quality code delivery under an
              AICTE-recognized internship framework.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content & Documentation Specialist</h4>
                <h5>RB Digital</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing business portfolios across Meta Business Suite, ensuring
              consistent brand presence. Editing and refining technical project
              documentation for cross-functional initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
