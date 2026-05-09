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
                <h4>Achievements & Awards</h4>
                <h5>SIH Semifinalist | Hackathon Winner</h5>
              </div>
              <h3>WINS</h3>
            </div>
            <p>
              • Internal SIH 2025 Semifinalist: Developed an offline AI-powered attendance system for rural education.<br/>
              • AI Fusion Hackathon (4th Place): Built a predictive loan model with a Tableau data visualization dashboard.<br/>
              • Hack-Utsav 2k24 (4th Place): Created a web application focused on high-precision URL security validation.<br/>
              • Hackathon 2k25: Built a phishing link detection app to identify and flag malicious URLs.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Education</h4>
                <h5>Cybersecurity | AWS | Java | MongoDB</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              • B.Tech in CSE, IILM University (Expected 2027)<br/>
              • Cybersecurity Fundamentals (CCYF™) Certified<br/>
              • Deloitte Job Simulation: Software Engineering<br/>
              • AWS Academy Graduate: Cloud Security Foundations<br/>
              • MongoDB Certified Student Course | Infosys Core Java
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Extracurricular & Hobbies</h4>
                <h5>Event Organizer | Creative Media</h5>
              </div>
              <h3>PLUS</h3>
            </div>
            <p>
              • Event Organizer (IEEE & YICC): Managed team workflows and logistics for technical youth initiatives.<br/>
              • Creative Media: Enthusiast in graphic design and video editing, creating digital content with modern design suites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
