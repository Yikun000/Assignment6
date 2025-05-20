import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerSection">
      <div className="footerGroup">
        <h3 className="footerTitle">Explore</h3>
        <ul className="footerLinks">
          <li><a href="/help" className="footerLink">Help Center</a></li>
          <li><a href="/privacy" className="footerLink">Privacy Info</a></li>
          <li><a href="/terms" className="footerLink">User Agreement</a></li>
        </ul>
      </div>
      <div className="footerGroup">
        <h3 className="footerTitle">Connect</h3>
        <ul className="footerLinks">
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footerLink">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footerLink">Twitter</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footerLink">Facebook</a></li>
        </ul>
      </div>
      <div className="footerCopyright">
        <h5>© 2025 WOOFLIX. All rights reserved.</h5>
      </div>
    </footer>
  );
}

export default Footer;