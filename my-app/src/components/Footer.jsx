import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section address">
          <h4>Our Address</h4>
          <p>
            123 Health Street,
            <br />
            Wellness City, ABC 456789
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
        <div className="footer-section terms">
          <h4>Terms & Conditions</h4>
          <p>
            Please read our <a href="/terms">Terms and Conditions</a> and{" "}
            <a href="/privacy">Privacy Policy</a> for more information about the
            use of our services.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MedStar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
