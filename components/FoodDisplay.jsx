import {
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

function FoodDisplay({
  category,
  image,
  nutriscore,
  rndm,
  id,
  ratings,
  calories,
  dish,
}) {
  return (
    <div className="w-96 rounded-lg shadow-lg pb-8 mt-8">
      <div className="w-full h-64 relative overflow-hidden object-cover">
        <Image
          src={image}
          alt={image}
          fill={true}
          objectFit="cover"
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="mx-5 mt-3 flex flex-col items-start justify-center">
        <div
          className={`"text-gray-300 uppercase tracking-wider rounded-full text-[11px] font-extrabold px-2 ${
            category === "Vegetarian" ? "bg-green-800" : "bg-yellow-500"
          }  py-1"`}
        >
          {category}
        </div>
        <h1 className="my-2 font-bold capitalize text-gray-800 text-xl ">
          {dish}
        </h1>
        <div className="m-3 flex items-center space-x-3">
          <ArrowPathIcon className="h-6 text-yellow-400" />
          <p className="text-[15px] font-semibold">{`${calories} calories`}</p>
        </div>
        <div className="m-3 flex items-center space-x-3">
          <ArrowsPointingOutIcon className="h-6 text-yellow-400" />
          <p className="text-[15px] font-semibold">{`Nutriscore © ${nutriscore} calories`}</p>
        </div>
        <div className="m-3 flex items-center space-x-3">
          <StarIcon className="h-6 text-yellow-400" />
          <p className="text-[15px] font-semibold">{`${ratings} rating (${rndm})`}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
