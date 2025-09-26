import React from 'react';
import imageImg  from '../assets/vector1.png'

const Card = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto my-[50px]">
      <div
        className="rounded-md p-7 text-white h-[250px]  flex items-center justify-center flex-col "
        style={{
          backgroundImage: `url(${imageImg}), linear-gradient(to left, rgba(99, 46, 227, 1),rgba(159, 98, 242, 1))`,
        }}
      >
        <h1 className="font-semibold text-xl">In-Progress</h1>
        <p className="font-bold text-3xl">{inProgressCount}</p>
      </div>
      <div
        className="rounded-md p-7 text-white h-[250px]  flex items-center justify-center flex-col"
        style={{
          backgroundImage: `url(${imageImg}), linear-gradient(to left, rgba(84,207,104,0.7), rgba(0,130,122,0.7))`,
        }}
      >
        <h1 className="font-semibold text-xl">Resolved</h1>
        <p className="font-bold text-3xl">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Card;