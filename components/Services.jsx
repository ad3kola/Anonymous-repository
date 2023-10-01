import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <>
      <div className="w-full my-8">
        <div className="flex mx-auto items-center flex-col md:flex-row justify-evenly md:space-x-6">
          <Link href='/'>
            <div className="flex flex-col items-start justify-center w-full px-1 py-2 group cursor-pointer">
              {/* <Icon /> */}
              <div className="w-full h-44 mt-3 relative rounded-sm my-1 object-cover overflow-hidden">
                <Image
                  src="https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg"
                  alt=""
                  className="rounded-sm object-cover duration-200 group-hover:scale-125"
                  objectFit="cover"
                  fill={true}
                />
              </div>
              <h1 className="px-1 mt-2 text-xl font-semibold text-gray-700">
                Our Services
              </h1>
              <h2 className="px-1 text-[15px] text-gray-600 font-normal pr-2 group-hover:underline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores?
              </h2>
              <button className="ml-1 text-yellow-500 mt-2 font-medium cursor-pointer group-hover:bg-black p-2 rounded-md duration-200">
                Read More...
              </button>
            </div>
          </Link>
          <Link href='/'>
            <div className="flex flex-col items-start justify-center w-full px-1 py-2 group cursor-pointer">
              {/* <Icon /> */}
              <div className="w-full h-44 mt-3 relative rounded-sm my-1 object-cover overflow-hidden">
                <Image
                  src="https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg"
                  alt=""
                  className="rounded-sm object-cover duration-200 group-hover:scale-125"
                  objectFit="cover"
                  fill={true}
                />
              </div>
              <h1 className="px-1 mt-2 text-xl font-semibold text-gray-700">
                Our Services
              </h1>
              <h2 className="px-1 text-[15px] text-gray-600 font-normal pr-2 group-hover:underline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores?
              </h2>
              <button className="ml-1 text-yellow-500 mt-2 font-medium cursor-pointer group-hover:bg-black p-2 rounded-md duration-200">
                Read More...
              </button>
            </div>
          </Link>
          <Link href='/'>
            <div className="flex flex-col items-start justify-center w-full px-1 py-2 group cursor-pointer">
              {/* <Icon /> */}
              <div className="w-full h-44 mt-3 relative rounded-sm my-1 object-cover overflow-hidden">
                <Image
                  src="https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg"
                  alt=""
                  className="rounded-sm object-cover duration-200 group-hover:scale-125"
                  objectFit="cover"
                  fill={true}
                />
              </div>
              <h1 className="px-1 mt-2 text-xl font-semibold text-gray-700">
                Our Services
              </h1>
              <h2 className="px-1 text-[15px] text-gray-600 font-normal pr-2 group-hover:underline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores?
              </h2>
              <button className="ml-1 text-yellow-500 mt-2 font-medium cursor-pointer group-hover:bg-black p-2 rounded-md duration-200">
                Read More...
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;
