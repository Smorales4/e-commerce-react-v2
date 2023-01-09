import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="contactbox">
        <div className="contact-flex">
          <div className="contact-size">
            <h2 className="contact-h2">Contact Us!</h2>
            <p className="contact-p">Let us know how can we help you!</p>
            <div className="contact-grid-1">
              <div className="contact-flex2">
                <div className="contact-icon">
                  <i className="fas fa-location-dot" />
                </div>
                <h3 className="text-2xl font-bold mt-2">Address</h3>
                <p className="text-gray-700 mt-2 align-center">
                  1608 Ponce de Leon Avenue, Suite 400
                  <br />
                  San Juan, PR 00912
                </p>
            </div>
              <div className="contact-flex2">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className="text-2xl font-bold mt-2">Phone</h3>
                <p className="text-gray-700 mt-2 align-center">
                (787)-218-3715
                </p>
              </div>
              <div className="contact-flex2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h3 className="text-2xl font-bold mt-2">Email</h3>
                <p className="text-gray-700 mt-2 align-center">
                marketing@kshop.com
                </p>
            </div>
            <form className="col-span-2 mx-auto p-4 max-w-lg">
  <h2 className="text-lg font-bold mb-4">Send Message</h2>
  <div className="mb-4">
    <input className="form-input rounded-md shadow-sm w-full py-2 px-3" type="text" placeholder="Full Name" required />
  </div>
  <div className="mb-4">
    <input className="form-input rounded-md shadow-sm w-full py-2 px-3" type="email" placeholder="Email" required />
  </div>
  <div className="mb-4">
    <textarea className="form-input rounded-md shadow-sm w-full py-2 px-3" rows="4" placeholder="Type your message..." required></textarea>
  </div>
  <button className="btn btn-blue rounded-md shadow-sm">Submit</button>
</form>
          </div>
              </div>
              </div>
              </section>
   </>
); 
}