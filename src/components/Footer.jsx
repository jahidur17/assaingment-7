import React from 'react';
import vector6 from '../assets/Vector6.png';
import vector7 from '../assets/Vector7.png';
import group8 from '../assets/Group8.png';
import vector9 from '../assets/vector9.png';
const Footer = () => {
    return (
      <header className=" bg-[#000000]   text-white p-5 mt-10">
        <section className="flex flex-col md:flex-row justify-around items-center md:flex md:justify-around md:items-center max-w-[1200px] mx-auto">
          <div className="flex flex-col h-[180px] w-[350px]">
            <h1 className="font-bold text-[24px]">CS — Ticket System</h1>
            <p className="text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-col space-y-5  ">
            <p>Company</p>
            <p className="text-[#A1A1AA]">About Us</p>
            <p className="text-[#A1A1AA]">Our Mission</p>
            <p className="text-[#A1A1AA]">Contact Saled</p>
          </div>
          <div className="flex flex-col space-y-5">
            <span>Services</span>
            <span className="text-[#A1A1AA]">Products & Services</span>
            <span className="text-[#A1A1AA]">Customer Stories</span>
            <span className="text-[#A1A1AA]">Download Apps</span>
          </div>
          <div className="flex flex-col space-y-5">
            <span>Information</span>
            <span className="text-[#A1A1AA]">Privacy Policy</span>
            <span className="text-[#A1A1AA]">Terms & Conditions</span>
            <span className="text-[#A1A1AA]">Join Us</span>
          </div>
          <div className="flex flex-col space-y-2 ">
            <span>Social Links</span>
            <div className="flex items-center">
              <img
                className="bg-white h-[20px] w-[20px] rounded-full mr-1"
                src={vector6}
                alt=""
              />
              <span className="text-[#A1A1AA]">@CS — Ticket System</span>
            </div>
            <div className="flex items-center">
              <img
                className="bg-white h-[20px] w-[20px] rounded-full mr-1"
                src={vector7}
                alt=""
              />
              <span className="text-[#A1A1AA]">@CS — Ticket System</span>
            </div>
            <div className="flex items-center">
              <img className="bg-white rounded-full mr-1" src={group8} alt="" />
              <span className="text-[#A1A1AA]">@CS — Ticket System</span>
            </div>
            <div className="flex items-center">
              <img className=" rounded-full mr-1" src={vector9} alt="" />
              <span className="text-[#A1A1AA]">support@cst.com</span>
            </div>
          </div>
        </section>
        <div className="mt-20 flex justify-center ite">
          <p className="text-[#A1A1AA]">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </header>
    );
};

export default Footer;