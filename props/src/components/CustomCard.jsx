import React from 'react';
// import { Card as MaterialCard } from "@material-tailwind/react";

function CustomCard({userName, btnText}) {
console.log(userName);

  return (
    <div className="max-w-xs p-6 mt-33 rounded-md shadow-md bg-black">
      <img
        src="https://images.unsplash.com/photo-1736608332755-d0a1be241cee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {userName}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{btnText} </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet.
      </p>
    </div>
  );
}

export default CustomCard;
