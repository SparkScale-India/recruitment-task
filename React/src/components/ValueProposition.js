import React from 'react';

const ValueProposition = () => {
  return (
    <section className="space-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="section-title">
              <span className="position-relative" style={{ fontSize: '40px', color: '#000' }}><b>Value Proposition for Clients</b></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Reduction of Operating and Corporate Overhead Costs.</li>
              <li><i className="fas fa-check"></i>Focus on Client’s Core Areas</li>
              <li><i className="fas fa-check"></i>Compliances</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Effective Time Management</li>
              <li><i className="fas fa-check"></i>More Effective & Efficient HR Function.</li>
              <li><i className="fas fa-check"></i>Flexibility</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul className="list-check" style={{ fontSize: '15px' }}>
              <li><i className="fas fa-check"></i>Eliminate Lead Time</li>
              <li><i className="fas fa-check"></i>Adherence to Statutory</li>
              <li><i className="fas fa-check"></i>Resource Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;