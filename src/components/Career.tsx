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
                <h4>SDE Intern</h4>
                <h5>Ninjacart</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Optimized Spring Boot backend services, improving response time by 30%. 
             Built secure REST APIs enabling real-time data exchange between systems, 
             reducing manual workflows by 40%. Automated UI and regression testing, 
             cutting testing time by 50% and improving release reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
Designed and deployed scalable microservices using Spring Boot and Java, handling 100K+ daily requests.
 Built secure REST APIs and integrated AngularJS-based frontend components for responsive applications.
  Implemented Kafka-based event-driven systems and optimized CI/CD pipelines, improving performance, reliability, and test coverage.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
