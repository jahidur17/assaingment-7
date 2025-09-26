import React, { use } from 'react';
import ellipse22 from '../../assets/Ellipse 22.png'
import jahid from '../../assets/jk.png'

const TicketsCard = ({ ticketsPromise, handleCardClick }) => {
  const ticketsData = use(ticketsPromise);
//   console.log(ticketsData);
  return (
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 grid-rows-1 gap-5">
      <div className="col-span-3 grid md:grid-cols-2 grid-rows-1  gap-5 ">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            onClick={() =>handleCardClick(ticket.status)}
            className="p-1 shadow-lg rounded-md cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{ticket.title}</h2>
              <div
                className={`flex justify-center items-center space-x-2 btn rounded-full  ${
                  ticket.status == "In Progress"
                    ? "text-[#c1bdb0] bg-[#9e843b]"
                    : ticket.status == "To Do"
                    ? "text-blue-100 bg-blue-500"
                    : "text-gray-100 bg-gray-500"
                } `}
              >
                <img className="" src={ellipse22} alt="" />
                <p className={`font-semibold  `}>{ticket.status}</p>
              </div>
            </div>
            <p className="mt-3 text-[#627382]">{ticket.description}</p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4">
                <span className="text-[#627382]">{ticket.id}</span>
                <span
                  className={
                    ticket.priority == "High"
                      ? "text-red-500 bg-red-100"
                      : ticket.priority == "Medium"
                      ? "text-yellow-500 bg-yellow-100"
                      : "text-green-500 bg-green-100"
                  }
                >
                  {ticket.priority}
                </span>
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

      <div className="col-span-1 ">
        <div className="shadow-md p-2 mt-4 rounded-md ">
          <h1 className="flex justify-center items-center font-semibold ">
            Payment Failed - Card Declined
          </h1>
          <button
            
            className="btn text-white w-[270px] h-[50px] bg-[#02A53B] rounded-md mt-3"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;