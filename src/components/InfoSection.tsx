"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
      id: 1,
      name: "Muddasir Ajmad",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    
  ];
const InfoSection = () => {
  return (
    <div className='h-auto p-10 w-full items-center flex flex-col gap-5'>
      <h1 className="  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Team</h1>
      <div className="flex flex-row items-center justify-center w-full  ">
      <AnimatedTooltip  items={people} />
    </div>
    </div>
  )
}

export default InfoSection
