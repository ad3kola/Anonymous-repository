import { StarIcon } from "@heroicons/react/24/solid";

function DiscountDetails({
  name,
  id,
  normalPrice,
  discountPrice,
  discountPercentage,
}) {
  return (
    <>
      <div className="w-full flex-grow ml-3 relative flex h-full flex-col md:items-start items-center px-5">
        <h1 className="text-center text-xl font-semibold text-gray-800 mt-1">
          {name}
        </h1>
        <ul className="space-y-1">
          <li className="space-x-2 mt-2 text-yellow-400 capitalize font-bold">
            sales per week: <span>Hello world</span>
          </li>

          <li className="space-x-2 text-yellow-400 capitalize font-bold">
            delivery time:
            <span className="lowercase">hello min</span>
          </li>
        </ul>
        <div className="w-full flex mt-3 space-x-3 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl rounded-full p-3  text-white bg-red-600 font-medium relative after:absolute after:w-10 after:h-[3px] after:top-6 after:left-4 after:-rotate-[40deg] after:bg-white">{`$${normalPrice}`}</h1>
            <p className="text-xs font-bold uppercase text-red-500">{`For ${discountPercentage}% off`}</p>
          </div>
          <h1 className="text-green-600 text-4xl font-extrabold relative bottom-3">{`$${discountPrice}`}</h1>
        </div>
      </div>
    </>
  );
}

export default DiscountDetails;
