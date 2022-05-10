import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";
const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className=" p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisment
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About Us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cokkie plicy
          </Link>
        </div>
      </div>
      <div className="text-center my-5">
        <p>
          Copyright &copy; {fullYear} - All right reserved by Doctors Portal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
