import React from 'react';

const SourcingModules = () => {
  return (
    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="section-title">
              <span className="position-relative" style={{ fontSize: '40px', color: '#000' }}><b>Sourcing Modules</b></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Employee Walk-ins</li>
              <li><i className="fas fa-check"></i>Cliental References</li>
              <li><i className="fas fa-check"></i>Campus Drives</li>
              <li><i className="fas fa-check"></i>Tie ups with Educational Institutes across South</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Past Recruitment Date</li>
              <li><i className="fas fa-check"></i>Networking</li>
              <li><i className="fas fa-check"></i>Job Portals</li>
              <li><i className="fas fa-check"></i>Paper Ads, Posters and Distribution of Pamphlets.</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Conduct Job Fairs</li>
              <li><i className="fas fa-check"></i>Head Hunting</li>
              <li><i className="fas fa-check"></i>Market Research Agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcingModules;