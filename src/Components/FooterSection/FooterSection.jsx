import "./Style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Genre from "../Genre/Genre";
import React from "react";

function FooterSection() {
  return (
    <div className="footerSection">
      <div className="footer-containr">
        <span className="you" style={{ color: "white" }}>
          You
        </span>
        <span style={{ color: "red" }}>video.</span>
        <p style={{ color: "white" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="icons">
          <FaFacebookF className="icon" color="#8f8f8f" fontSize="18px" />
          <FaTwitter className="icon" color="#8f8f8f" fontSize="18px" />
          <FaLinkedinIn className="icon" color="#8f8f8f" fontSize="18px" />
          <FaTelegram className="icon" color="#8f8f8f" fontSize="18px" />
        </div>
      </div>
      <Genre 
        title="Movies"
        contanet1="Drama"
        contanet2="Action"
        contanet3="Animation"
        contanet4="Comedy"
        contanet5="Crime"
        contanet6="Fantacy"
        contanet7="Horror"
        contanet8="Romance"
      />
      <Genre
        title="Tv Shows"
        contanet1="Breaking Bad"
        contanet2="Grimm"
        contanet3="Friends"
        contanet4="Supergirl"
        contanet5="The Night Manager"
        contanet6="Sex Education"
        contanet7="A Discovery of Witches"
        contanet8="Derry Girls"
      />
      <Genre
        title="My Account"
        contanet1="My Account"
        contanet2="Plan"
        contanet3="Premium"
        contanet4="Faq"
      />
      
    </div>
  );
}

export default FooterSection;
