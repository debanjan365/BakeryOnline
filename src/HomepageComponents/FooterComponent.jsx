import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className='text-center text-lg-start text-muted' style={{ backgroundColor: '#EF5350' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'></section>
      <section className=''>
        <div className='container text-center text-md-start mt-3'>
          <div className='row mt-3'>
            <div className='col-md-4 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>myBakery
              </h6>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum cupiditate dolorum beatae
     optio repellendus rem quod voluptas libero autem laboriosamquas?
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home Delivery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Fresh Items
                </a>
              </p>
              
              <p>
                <a href='#!' className='text-reset'>
                  Pick-up Delivery
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Company
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Cohort56/Pod1.com</h6>
              <p>
              Lorem ipsum dotatis sint.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex justify-content-center p-2 border-bottom'>

        <div className='text-center'>
          <a href='' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faYoutube}/>
          </a>
          <a href='' className='me-4 text-reset'>
          <FontAwesomeIcon icon={faGoogle}/>
          </a>
        </div>
        </section>
      <div className='text-center fw-bold p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Cohort56:POD1
      </div>
    </MDBFooter>
  );
}