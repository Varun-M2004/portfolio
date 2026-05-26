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
                <h4>Student (B.E. in CS)</h4>
                <h5>Sir M. Visvesvaraya Institute of Technology</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing a Bachelor of Engineering in Computer Science with a CGPA of 9.2/10. Received an award and certificate for academic excellence. Published a peer-reviewed research paper on a BiLSTM-based "Real-Time Hand Sign to Speech Translator" in IJIRT.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Prodigy InfoTech (Remote)</h5>
              </div>
              <h3>MAY 2025</h3>
            </div>
            <p>
              Designed and developed responsive web applications using HTML, CSS, JavaScript, and React. Implemented new feature enhancements and UI/UX optimizations to maximize usability and customer engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android App Development Intern</h4>
                <h5>MindMatrix (Remote)</h5>
              </div>
              <h3>JAN 2026</h3>
            </div>
            <p>
              Worked on Android application features through guided tasks and structured modules leveraging Generative AI workflows. Supported the implementation, testing, and documentation to enhance code quality and usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
