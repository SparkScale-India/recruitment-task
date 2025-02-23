import React from 'react';

const ValueSection = () => {
  return (
    <section className="space-pb mt-5 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="section-title">
              <span className="position-relative" style={{ fontSize: '40px', color: '#000' }}><b>Our Value</b></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-step-item">
              <div className="d-flex align-items-center mb-3">
                <span className="step-number pr-3">01</span>
                <h4 className="mb-0">Partnership</h4>
              </div>
              <div className="step-content">
                <p className="mb-0">All relationships achieve greater success through partnership.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-step-item">
              <div className="d-flex align-items-center mb-3">
                <span className="step-number pr-3">02</span>
                <h4 className="mb-0">Integrity</h4>
              </div>
              <div className="step-content">
                <p className="mb-0">To ensure all aspects of our business is carried out in a ethical and honest manner</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-step-item">
              <div className="d-flex align-items-center mb-3">
                <span className="step-number pr-3">03</span>
                <h4 className="mb-0">Respect</h4>
              </div>
              <div className="step-content">
                <p className="mb-0">Creating trust through valuing the individual and respecting diversity.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-step-item">
              <div className="d-flex align-items-center mb-3">
                <span className="step-number pr-3">04</span>
                <h4 className="mb-0">Teamwork</h4>
              </div>
              <div className="step-content">
                <p className="mb-0">Utilizing individual talent to achieve outstanding results for our clients and ourselves.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
            <div className="feature-step-item">
              <div className="d-flex align-items-center mb-3">
                <span className="step-number pr-3">05</span>
                <h4 className="mb-0">Solutions</h4>
              </div>
              <div className="step-content">
                <p className="mb-0">Driven by experience and partnership to delivery exceptional service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute left-0 bottom-0 ml-n7 z-index-n1 d-none d-lg-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="222" height="382" viewBox="0 0 222 382">
          <path
            className="fill-primary"
            d="M157.035,3722.99c-25.383-42.15-61.5-50.55-60-62.57s40.734-27.62,57.288-56.25c16.454-28.63,10.435-70.17,28.594-100.6,18.06-30.33,60.3-49.45,75.849-29.23,15.652,20.22,4.615,79.78,13.946,117.32,9.23,37.43,38.828,52.85,45.048,72.27,6.12,19.42-10.936,42.74-32.507,85.48s-47.656,104.91-67.923,98.1C196.966,3840.8,182.419,3765.03,157.035,3722.99Z"
            transform="translate(-97 -3466)"
          />
        </svg>
      </div>
    </section>
  );
};

export default ValueSection;