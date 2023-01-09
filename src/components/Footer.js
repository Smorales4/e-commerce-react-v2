import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full max-w-xs">
          <div className="text-center text-fuchsia-700 text-xl font-semibold mb-4">
            Follow us on social media
          </div>
          <div className="flex justify-around items-center">
            <a
              href="https://www.facebook.com/"
              className="text-3xl text-fuchsia-700 hover:text-amber-400 active:text-yellow-600"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/?lang=en"
              className="text-3xl text-fuchsia-700 hover:text-amber-400 active:text-yellow-600"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-3xl text-fuchsia-700 hover:text-amber-400 active:text-yellow-600"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-3xl text-fuchsia-700 hover:text-amber-400 active:text-yellow-600"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <div className="text-center text-fuchsia-700 text-xl font-semibold mb-4">
            Subscribe to our newsletter
          </div>
          <form className="w-full max-w-sm mx-auto">
            <div className="flex items-center border-b border-fuchsia-700 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-fuchsia-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter your email"
              />
              <button
                className="flex-shrink-0 bg-fuchsia-700 hover:bg-amber-400 border-fuchsia-700 hover:border-amber-400 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
