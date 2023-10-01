import Link from "next/link";
import React from "react";

function Locations() {
  const city_locations = [
    {
      id: 1,
      city: "Arizona",
      path: "/",
    },
    {
      id: 2,
      city: "Arizona",
      path: "/",
    },
    {
      id: 3,
      city: "Arizona",
      path: "/",
    },
    {
      id: 4,
      city: "Arizona",
      path: "/",
    },
    {
      id: 5,
      city: "Arizona",
      path: "/",
    },
    {
      id: 6,
      city: "Arizona",
      path: "/",
    },
    {
      id: 7,
      city: "Arizona",
      path: "/",
    },
    {
      id: 8,
      city: "Arizona",
      path: "/",
    },
    {
      id: 9,
      city: "Arizona",
      path: "/",
    },
    {
      id: 10,
      city: "Arizona",
      path: "/",
    },
    {
      id: 11,
      city: "Arizona",
      path: "/",
    },
    {
      id: 12,
      city: "Arizona",
      path: "/",
    },
    {
      id: 13,
      city: "Arizona",
      path: "/",
    },
    {
      id: 14,
      city: "Arizona",
      path: "/",
    },
    {
      id: 15,
      city: "Arizona",
      path: "/",
    },
    {
      id: 16,
      city: "Arizona",
      path: "/",
    },
    {
      id: 17,
      city: "Arizona",
      path: "/",
    }, {
      id: 18,
      city: "Arizona",
      path: "/",
    }
  ];
  return (
    <>
      <div className="my-14 mx-auto flex flex-col items-start justify-center">
        <h1 className="text-lg text-gray-700 font-medium mx-4">Cities Near Me</h1>
        <div className="w-full mt-2 grid grid-cols-4">
          {city_locations.map(({ id, city, path }) => (
            <Link key={id} href={path}>
              <div className="mx-2 mt-5 w-fit px-3">
                <h1 className="text-[15px] font-normal text-gray-500">{city}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Locations;
