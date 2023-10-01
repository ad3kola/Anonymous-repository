"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

function Highlight() {
  const [premium, setPremium] = useState(false);

  const changePlan = () => {
    setPremium((prev) => !prev);
  };

  const pickOfTheWeek = [
    {
      id: 1,
      premiumTitle: "Hamburger with Fries",
      deluxeTitle: "Mac and Cheese with Pizza",
      premiumImage:
        "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      deluxeImage:
        "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      premiumSales: 411,
      deluxeSales: 203,
      ratings: "5.0",
      premiumPrice: 85,
      deluxePrice: 160,
      premiumDeliveryTime: 25,
      deluxeDeliveryTime: 15,
    },
  ];
  return (
    <>
      <div className="mx-7 my-20 rounded-lg overflow-hidden shadow-md">
        <h1 className="text-sm font-semibold capitalize text-gray-800 text-center">
          Meal Pick of the Week
        </h1>
        <h2 className="text-2xl lg:text-3xl mt-1 px-10 font-bold text-center text-gray-800 ">
          Mavel at what our customers ordered the most and gave the best ratings
          & reviews for this week
        </h2>
        <div className=" w-full mx-auto mt-3 md:h-[280px] overflow-hidden flex flex-col md:flex-row justify-center items-stretch">
          {pickOfTheWeek.map(
            ({
              id,
              premiumSales,
              deluxeSales,
              ratings,
              premiumTitle,
              deluxeTitle,
              premiumImage,
              deluxeImage,
              premiumDeliveryTime,
              premiumPrice,
              deluxeDeliveryTime,
              deluxePrice,
            }) => (
              <>
                <div key = {id} className="w-full md:w-2/3 object-cover relative h-[280px] md:h-full">
                  <Image
                    src={premium ? premiumImage : deluxeImage}
                    alt={premium ? premiumImage : deluxeImage}
                    fill={true}
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/3 relative flex h-full flex-col justify-center px-7">
                  <div className="rounded-b-lg bg-gray-200 flex mx-auto items-center justify-center overflow-hidden">
                    <div
                      onClick={changePlan}
                      className={`${
                        premium
                          ? "w-full px-10 py-4 bg-yellow-500 font-medium cursor-pointer duration-75"
                          : "px-10 py-4 bg-transparent font-medium cursor-pointer duration-75"
                      }`}
                    >
                      Premium
                    </div>
                    <div
                      onClick={changePlan}
                      className={`${
                        premium
                          ? "px-10 py-4 bg-transparent font-medium cursor-pointer duration-75"
                          : "w-full px-10 py-4 bg-yellow-500 font-medium cursor-pointer duration-75"
                      }`}
                    >
                      Deluxe
                    </div>
                  </div>

                  <h1 className="text-center text-2xl font-bold text-gray-900 mt-1">
                    {premium ? premiumTitle : deluxeTitle}
                  </h1>
                  <ul className="space-y-2">
                    <li className="space-x-2 capitalize font-medium">
                      sales per week:{" "}
                      <span>{premium ? premiumSales : deluxeSales}</span>
                    </li>
                    <li className="flex items-center space-x-2 capitalize font-medium ">
                      ratings:{" "}
                      <span className="flex items-center justify-center space-x-2">
                        {ratings} <StarIcon className="h-5 text-yellow-500" />
                      </span>
                    </li>
                    <li className="space-x-2 capitalize font-medium">
                      delivery time:
                      <span className="lowercase">
                        {premium ? premiumDeliveryTime : deluxeDeliveryTime} min
                      </span>
                    </li>
                  </ul>
                  <div className="w-full flex mt-3 items-center border-[4px] border-t-yellow-400 border-r-0 border-l-0 border-b-yellow-400 justify-center">
                    <h1 className="text-4xl text-center py-1 font-bold">
                      <span className="text-base font-bold">$</span>
                      {premium ? premiumPrice : deluxePrice}
                    </h1>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Highlight;
