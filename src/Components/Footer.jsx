import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Smartphone Gallery</h2>
          <p>Your one-stop destination for the latest smartphones</p>
        </div>
        <div className="mb-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About Us</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </div>
        <div className="mb-4">
          <p>&copy; 2024 Smartphone Gallery. All rights reserved.</p>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
