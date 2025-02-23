import React from 'react';

const CommitmentSection = () => {
  return (
    <section className="space-pt">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 mb-4 mb-lg-0">
            <div className="section-title mb-4">
              <h2 className="title">
                We are committed to <span className="position-relative">developing</span> solutions that create fulfilling <span className="position-relative">results</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i><b>Skyline India Management Services</b> is a Registered Outsourcing Company providing Clients with a single business solution with delivering end to end HR Services for Contract Staffing, Permanent Staffing and Mass Recruitment.</li>
              <li><i className="fas fa-check"></i><b>Skyline India Management Services</b> Stands for Integrity-Service-Employment-Excellence.</li>
              <li><i className="fas fa-check"></i><b>Skyline India Management Services</b> is an end-to-end staffing consulting firm serving various industries such as IT, ITes Manufacturing, etc.</li>
              <li><i className="fas fa-check"></i><b>Skyline India Management Services</b> has an about 3 yeas of experiences and specializes in finding and placing professionals in all sectors with a fair background in recruiting.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;