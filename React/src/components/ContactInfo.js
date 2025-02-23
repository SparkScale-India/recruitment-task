import React from 'react';

const ContactInfo = () => {
  return (
    <section className="space-pb mt-n6">
      <div className="container position-relative">
        <div className="row bg-white shadow m-0 px-md-4 py-4 py-lg-5">
          <div className="col-md-12 mb-4 mb-md-0">
            <div className="section-title">
              <h2 className="title">Contact Info</h2>
              <p className="lead">
                Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge.
              </p>
            </div>
            <div className="contact-info">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="far fa-envelope text-primary"></i>
                  <span><strong>Email:</strong> <a href="mailto:skylineindiamanagementservices@gmail.com">skylineindiamanagementservices@gmail.com</a></span>
                </li>
                <li>
                  <i className="fas fa-phone-alt text-primary"></i>
                  <span><strong>Support:</strong> 7676769615</span>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span><strong>Address:</strong> No.125, 1st Floor, Basavachari Building, Hosur Main Road, Electronic City, Konappana Agrahara, Bengaluru, 560100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;