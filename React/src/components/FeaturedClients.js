import React from 'react';
import client1 from '../assets/images/1.jpg';
import client3 from '../assets/images/3.jpg';
import client4 from '../assets/images/4.png';
import client5 from '../assets/images/5.png';
import client6 from '../assets/images/6.png';
import client7 from '../assets/images/7.jpeg';
import client8 from '../assets/images/8.jpeg';

const FeaturedClients = () => {
  return (
    
    <section className="space-pb mt-4" id="client">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="section-title">
              <span className="position-relative" style={{ fontSize: '40px', color: '#000' }}><b>Our Featured Client</b></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <ul className="our-clients-style-01">
              <li><img className="img-fluid center-block mx-auto grayscale" src={client1} alt="" width="200" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client3} alt="" width="250" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client4} alt="" width="250" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client5} alt="" width="250" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client6} alt="" width="250" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client7} alt="" width="250" /></li>
              <li><img className="img-fluid center-block mx-auto grayscale" src={client8} alt="" width="250" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;