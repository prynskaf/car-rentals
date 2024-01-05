import React from "react";
import Image from "next/legacy/image";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";

const CarCard = (props: any) => {
  const { name, price, image, carType, carAvg } = props.car;

  // console.log("name:", name);
  // console.log("price:", price);
  // console.log("image:", image);
  // console.log("carType:", carType);
  // console.log("carAvg:", carAvg);

  const imageUrl =
    image &&
    image.length > 0 &&
    image[0]?.imageCarList &&
    image[0]?.imageCarList.length > 0 &&
    image[0]?.imageCarList[0]?.image &&
    image[0]?.imageCarList[0]?.image.length > 0
      ? image[0]?.imageCarList[0]?.image[0]?.url
      : null;

  return (
    <div
      className="group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5
    hover:bg-white 
    hover:border-[1px] cursor-pointer duration-50
    border-blue-500 "
    >
      <h2 className="text-[20px] font-medium mb-2">{name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light"> £ </span>
        {price}
        <span className="text-[12px] font-light"> /day</span>
      </h2>
      {imageUrl && (
        <div className="relative w-[250px] h-[150px] mb-3 object-contain">
          <Image src={imageUrl} alt={name} layout="fill" objectFit="contain" />
        </div>
      )}
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{carType}</h2>
        </div>
        <div className=" text-center text-gray-500 ">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{carAvg} MPG</h2>
        </div>
      </div>
      <button
        className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between"
      >
        Rent Now
        <span className="bg-blue-400 p-1 rounded-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CarCard;
