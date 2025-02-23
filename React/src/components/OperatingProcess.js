import React from 'react';

const OperatingProcess = () => {
  return (
    <section className="space-pt mt-2 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="section-title">
              <span className="position-relative" style={{ fontSize: '40px', color: '#000' }}><b>Operating - Process Flow</b></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>New Joinee Information - SKYLINE INDIA MANAGEMENT SERVICES will give new joinee details to client in specified template.</li>
              <li><i className="fas fa-check"></i>INDUCTION PROCESS - SIMS team to conduct the Staffer’s induction which would cover the overview of SIMS.</li>
              <li><i className="fas fa-check"></i>Relationship between Client and SIMS Team.</li>
              <li><i className="fas fa-check"></i>Relationship between the Staffer/SIMS Team and Client.</li>
              <li><i className="fas fa-check"></i>Explain about Leave Policy, Notice Period and Benefits like Medical and Accidental Insurance, etc.</li>
              <li><i className="fas fa-check"></i>CORPORATE BANK A/C to STAFFER - SIMS team to facilitate Bank A/c Opening for all Staffers.</li>
              <li><i className="fas fa-check"></i>Issuing Appointment Letter and ID Card to Staffer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingProcess;