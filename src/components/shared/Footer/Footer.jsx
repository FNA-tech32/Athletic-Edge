import React from "react";
import footerImage from "../../../assets/footer/footer.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BRAND_INFO } from "../../../config/brandConfig";
import BrandLogo from "../BrandLogo/BrandLogo";

const Footer = () => {
  // styles
  const footerHead = "text-[18px] font-semibold my-[18px] text-white";
  const footerList = "text-[15px] text-gray my-3";

  return (
    <footer
      className="bg-fixed bg-cover bg-center flex items-center pt-20 lg:px-20 text-white"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {/* Company */}
          <div className="my-6">
            <h2 className={footerHead}>COMPANY</h2>
            <ul className="mt-6 space-y-2">
              <li className={footerList}>
                <Link to="/about" className="hover:text-main transition duration-300">
                  About Us
                </Link>
              </li>
              <li className={footerList}>
                <Link to="/services" className="hover:text-main transition duration-300">
                  Services
                </Link>
              </li>
              <li className={footerList}>
                <Link to="/schedule" className="hover:text-main transition duration-300">
                  Schedule
                </Link>
              </li>
              <li className={footerList}>
                <Link to="/gallery" className="hover:text-main transition duration-300">
                  Gallery
                </Link>
              </li>
              <li className={footerList}>
                <Link to="/contact" className="hover:text-main transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="my-6">
            <h2 className={footerHead}>OPENING HOURS</h2>
            <ul className="mt-6 space-y-3">
              {BRAND_INFO.contact.hours.map((item, idx) => (
                <li key={idx} className={footerList}>
                  <p className="text-white font-medium">{item.days}</p>
                  <p className="text-gray text-sm">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="my-6">
            <h2 className={footerHead}>CONTACT & SUPPORT</h2>
            <ul className="mt-6 space-y-3">
              <li className={footerList}>
                <span className="text-xs uppercase text-main font-semibold block">Primary Phone</span>
                <span className="text-white">{BRAND_INFO.contact.phone.primary}</span>
              </li>
              <li className={footerList}>
                <span className="text-xs uppercase text-main font-semibold block">24/7 Helpline</span>
                <span className="text-white">{BRAND_INFO.contact.phone.alternative}</span>
              </li>
              <li className={footerList}>
                <span className="text-xs uppercase text-main font-semibold block">Email Support</span>
                <span className="text-white">{BRAND_INFO.contact.email.primary}</span>
              </li>
              <li className={footerList}>
                <span className="text-xs uppercase text-main font-semibold block">Location</span>
                <span className="text-white">{BRAND_INFO.contact.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Brand Info & Socials */}
          <div className="my-6">
            <BrandLogo size="text-3xl" textClassName="text-white" />
            <p className="text-[14px] text-gray my-6 leading-relaxed">
              {BRAND_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2 border border-gray rounded hover:border-main hover:text-main transition duration-300"
              >
                <FaFacebookF className="text-gray text-[1.2rem] hover:text-main" />
              </a>
              <a
                href={BRAND_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="p-2 border border-gray rounded hover:border-main hover:text-main transition duration-300"
              >
                <FaXTwitter className="text-gray text-[1.2rem] hover:text-main" />
              </a>
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2 border border-gray rounded hover:border-main hover:text-main transition duration-300"
              >
                <FaInstagram className="text-gray text-[1.2rem] hover:text-main" />
              </a>
              <a
                href={BRAND_INFO.socials.globe}
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="p-2 border border-gray rounded hover:border-main hover:text-main transition duration-300"
              >
                <FaGlobe className="text-gray text-[1.2rem] hover:text-main" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="my-10 border-t border-gray/30 pt-6">
          <p className="text-gray text-center text-sm p-4">
            Copyright &copy; {new Date().getFullYear()} All rights reserved by {BRAND_INFO.brandName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
