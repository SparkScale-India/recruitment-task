import React from 'react';

const InnerBanner = ({ title }) => {
  return (
    <section className="inner-banner h-600 h-md-400 h-sm-auto py-6 d-flex align-items-center bg-dark overflow-x-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12 text-center">
            <div className="position-relative z-index-9">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;