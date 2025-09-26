import React from 'react';

const Navbar = () => {
    return (
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-3 py-3  flex-col md:flex-row md:items-center md:justify-between gap-5">
        <h1 className="font-bold text-[24px]">CS — Ticket System</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 ">
          <a>Home</a>
          <a>FAQ</a>
          <a>Changelog</a>
          <a>Blog</a>
          <a>Download</a>
          <a>Contact</a>
          <button className="bg-gradient-to-l from-[#632EE3] to-[#9F62F2] text-white px-4 py-1 text-center rounded-md">
            + New Ticket
          </button>
        </div>
      </div>
    );
};

export default Navbar;