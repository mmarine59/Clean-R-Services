import React from 'react';
import Logo from '../assets/logo.png';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <p>&copy; {currentYear} Clean'R services. Tous droits réservés.</p>
    </div>
  )
}
