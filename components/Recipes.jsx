import Image from "next/image";
import React from "react";
import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/20/solid'
import FoodDisplay from "./FoodDisplay";

function Recipes() {
  const food_display = [
    {
      id: 1,
      image:
        "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      dish: "Japanese Gyozas",
      category: "Vegetarian",
      details: {
        calories: 650,
        nutriscore: 74,
        ratings: 4.9,
        random_number: 596,
      },
    },
    {
      id: 2,
      image:
        "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      dish: "Avocado Salad",
      category: "gluton free",
      details: {
        calories: 400,
        nutriscore: 92,
        ratings: 4.7,
        random_number: 442,
      },
    },
  ];

  const diet_recipes = [
    {
      id: 1,
      recipe: "Vegetarian",
    },
    {
      id: 2,
      recipe: "Vegan",
    },
    {
      id: 3,
      recipe: "Pescatarian",
    },
    {
      id: 4,
      recipe: "Gluten-free",
    },
    {
      id: 5,
      recipe: "Lactose-free",
    },
    {
      id: 6,
      recipe: "Keto",
    },
    {
      id: 7,
      recipe: "Palso",
    },
    {
      id: 8,
      recipe: "Low FODMAP",
    },
    {
      id: 9,
      recipe: "Kid-Friendly",
    },
  ];
  return (
    <>
      <div className="my-10 mx-auto w-full">
        <div className="flex flex-col mx-8 lg:flex-row items-center justify-center md:space-x-10">
          {food_display.map(
            ({
              id,
              category,
              image,
              dish,
              details: { calories, nutriscore, ratings, random_number },
            }) => (
              <FoodDisplay
                key={id}
                category={category}
                id={id}
                image={image}
                dish={dish}
                calories={calories}
                nutriscore={nutriscore}
                ratings={ratings}
                rndm={random_number}
              />
            )
          )}
          <div className="w-96 pb-5 mt-4 py-4 lg:ml-3 shadow-sm rounded-lg">
            <div className="flex flex-col items-start px-2 justify-center">
              <h1 className="font-bold text-gray-950 text-2xl">
                Works with any diet:
              </h1>
            </div>
            {diet_recipes.map(({ id, recipe }) => (
              <ul key={id} className="mt-4 px-2">
                <li className="flex space-x-4 mt-2 items-center font-medium">
                  <CheckBadgeIcon className = 'text-yellow-400 rotate-[10deg] h-7' />
                  <h1 className="font-medium text-gray-800 text-[15px]">
                    {recipe}
                  </h1>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;
