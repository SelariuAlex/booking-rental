import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-3 text-center">
      <p className="container-fluid">
        Copyright &copy; {new Date().getFullYear()} Șelariu Alexandru
      </p>
    </footer>
  );
};

export default Footer;
