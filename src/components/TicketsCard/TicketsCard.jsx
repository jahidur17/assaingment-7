import React, { use } from 'react';
import ellipse22 from '../../assets/Ellipse 22.png'
import jahid from '../../assets/jk.png'

const TicketsCard = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);
  console.log(ticketsData);
  return (
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 grid-rows-1 ">
      <div className="col-span-3 grid md:grid-cols-2 grid-rows-1  gap-5 ">
        {ticketsData.map((ticket) => (
          <div className="p-1 shadow-lg rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{ticket.title}</h2>
              <div className="flex justify-center items-center space-x-2 btn rounded-full bg-[#B9F8CF]">
                <img className="" src={ellipse22} alt="" />
                <p className="font-semibold ">{ticket.status}</p>
              </div>
            </div>
            <p className="mt-3 text-[#627382]">{ticket.description}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4">
                <span className="text-[#627382]">{ticket.id}</span>
                <span>{ticket.priority}</span>
              </div>
              <div className="flex space-x-4">
                <span className="text-[#627382]">{ticket.name}</span>
                <div className="flex space-x-1">
                  <img src={jahid} alt="" />
                  <span className="text-[#627382]">{ticket.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 border-2 border-red-400">
        <h1>i lobe bangla hhjmsbdsb ajsjnmd cbbayjchc </h1>
      </div>
    </div>
  );
};

export default TicketsCard;