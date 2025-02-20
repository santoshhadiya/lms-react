import React from "react";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-16 w-full">
      <div className="max-w-7xl  flex flex-col md:flex-row justify-between gap-10">
        
        <div className="max-w-sm">
          <div className="flex items-center space-x-2">
            <img src={assets.logo_dark} alt="Edemy Logo"  />

          </div>
          <p className="mt-3 text-sm leading-relaxed text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        
        <div>
          <h3 className="text-white text-lg font-semibold text-left">Company</h3>
          <ul className="mt-3 space-y-2 text-left">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="max-w-sm">
          <h3 className="text-white text-lg font-semibold text-left">Subscribe to our newsletter</h3>
          <p className="mt-3 text-sm text-left">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-l focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        Copyright 2024 © Edemy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
