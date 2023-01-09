import React from 'react';

export default function Contact() {
  return (
    <form className="col-span-2 mx-auto p-4 max-w-lg">
      <h2 className="text-lg font-bold mb-4">Send Message</h2>
      <div className="mb-4">
        <label for="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name <span className="text-red-500">*</span></label>
        <input className="form-input rounded-md shadow-sm w-full py-2 px-3" type="text" placeholder="John Smith" id="fullName" required />
      </div>
      <div className="mb-4">
        <label for="email" className="block text-gray-700 text-sm font-bold mb-2">Email <span className="text-red-500">*</span></label>
        <input className="form-input rounded-md shadow-sm w-full py-2 px-3" type="email" placeholder="john@example.com" id="email" required />
      </div>
      <div className="mb-4">
        <label for="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
        <input className="form-input rounded-md shadow-sm w-full py-2 px-3" type="text" placeholder="Subject" id="subject" />
      </div>
      <div className="mb-4">
        <label for="message" className="block text-gray-700 text-sm font-bold mb-2">Message <span className="text-red-500">*</span></label>
        <textarea className="form-input rounded-md shadow-sm w-full py-2 px-3" rows="4" placeholder="Type your message here..." id="message" required></textarea>
      </div>
      <button className="btn btn-blue rounded-md shadow-sm">Submit</button>
    </form>
  );
}