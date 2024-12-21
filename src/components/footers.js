import React from 'react';
import { Footer } from 'flowbite-react';
import Logo from '../res/img/logo.svg';
import DarkLogo from '../res/img/darkLogo.svg';
import { company, websiteURL } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footers = () => {
  const storedTheme = sessionStorage.getItem('darkMode');

  const navigate = useNavigate();
  function redirectAbout() {
    navigate("/about");
  }
  function redirectContact() {
    navigate("/contact");
  }
  function redirectTerms() {
    navigate("/terms");
  }

  function redirectPrivacy() {
    navigate("/privacy");
  }

  return (
    <Footer container className="shadow-none rounded-none dark:bg-black">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href={websiteURL}
            src={storedTheme === "true" ? DarkLogo : Logo}
          />
        
          <Footer.LinkGroup>

          <p className="text-black font-bold mx-4 dark:text-white" onClick={redirectAbout}>
              About
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white" onClick={redirectPrivacy}>
              Privacy Policy
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white " onClick={redirectTerms}>
              Terms
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white" onClick={redirectContact}>
              Contact
            </p>
          <Link
              className="text-black font-bold mr-1 dark:text-white"
              to="https://twitter.com/courseforge_xyz" 
              onClick={(e) => {
                e.preventDefault();
                window.open('https://twitter.com/courseforge_xyz', '_blank');
              }}
            >
              <FaTwitter size={25}/>
            </Link>

           {/*  <Link
            className="text-black font-bold mr-1 dark:text-white"
            to="https://instagram.com/blockode.co" 
            onClick={(e) => {
              e.preventDefault();
              window.open('https://instagram.com/blockode.co', '_blank');
            }}
            
            >
              <FaInstagram size={25}/>
            </Link> */}
            <Link
            className="text-black font-bold mr-1 dark:text-white "
            to="mailto:support@courseforge.xyz" 
            onClick={(e) => {
              e.preventDefault();
              window.open('mailto:support@courseforge.xyz', '_blank');
            }}
             
            >
              <MdAlternateEmail size={25}/>
           </Link>
           </Footer.LinkGroup>
         
        </div>
        <Footer.Divider className="border-black dark:border-white" />
        <Footer.Copyright
          className="text-black dark:text-white font-bold"
          href={websiteURL}
          by={company}
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default Footers;
