import Image from "next/image";
import React from "react";
import { BiCalendar, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ChartFrame from "@/assets/chartframe.png";
import LineChart from "@/assets/LineChart.png";

const DexterUsers = () => {
  return (
    <div className="flex flex-col md:w-1/2 w-full gap-8">
      {/* Dexter Users Nav */}
      <div className="flex flex-row justify-between gap-6 items-center p-2 bg-white rounded-md md:w-11/12 w-full">
        <h2 className="font-light text-sm md:text-lg">Users on Dexter App</h2>
        <div className="flex flex-row gap-2 md:gap-4">
          <BiCalendar size={20} className="cursor-pointer" />
          <h2 className="font-light text-sm">Last 6 Months</h2>
          <BiChevronLeft
            size={20}
            className="cursor-pointer hover:bg-slate-600 hover:text-white duration-300 rounded-full"
          />
          <BiChevronRight
            size={20}
            className="cursor-pointer hover:bg-slate-600 hover:text-white duration-300 rounded-full"
          />
        </div>
      </div>
      {/* Charts */}
      <div className="">
        <Image src={LineChart} alt="Line Chart" className="w-full" />
        {/* <Image
          src={ChartFrame}
          alt="Chart Frame"
          className="absolute bottom-0 z-10"
        /> */}
      </div>
    </div>
  );
};

export default DexterUsers;
