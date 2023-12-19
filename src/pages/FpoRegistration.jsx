import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Orders from "../pages/Orders";
import DropDown from "../components/DropDown";
import TableList from "../components/TableList";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  fpoRecom,
  DashBoardCards,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const FpoRegistration = () => {
  const { currentColor, currentMode } = useStateContext();
  const farmsData = [
    {
      fpoName: "FPO 1",
      state: "State 1",
      district: "District 1",
      crop: "Crop 1",
    },
    {
      fpoName: "FPO 2",
      state: "State 2",
      district: "District 2",
      crop: "Crop 2",
    },
  ];

  //   const states = [
  //     { label: "Account settings", link: "#" },
  //     { label: "Support", link: "#" },
  //     { label: "License", link: "#" },
  //   ];
  const states = ["Tamil Nadu", "Goa", "Maharastra"];

  const district = [
    "Ariyalur",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kancheepuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivagangai",
    "Thanjavur",
    "Theni",
    "Thiruvarur",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Trichy",
    "Tuticorin",
    "Vellore",
    "Villupuram",
    "Virudhunagar",
  ];
  const label1 = "State";
  const label2 = "District";

  return (
    <div className="">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {fpoRecom.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              {/* <p className="text-sm text-gray-400  mt-1">{item.title}</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-150 md:w-800">
          <div className="flex justify-end items-center gap-2 mb-10">
            <DropDown options={states} label={label1} />
            <DropDown options={district} label={label2} />
          </div>
          <div className="md:w-full overflow-auto">
            {farmsData.map((farm, index) => (
              <TableList key={index} farm={farm} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FpoRegistration;
