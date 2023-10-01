import Image from "next/image";
import DiscountDetails from "./DiscountDetails";
function Discounts() {
  const discounts = [
    {
      id: 1,
      name: "Mac and Cheese with Pizza",
      image:
        "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      normalPrice: 230,
      discountPrice: 320,
      discountPercentage: 30,
      imageAngles: {
        image1:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
        image2:
          "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
        image3:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      },
    },
    {
      id: 2,
      name: "Mac and Cheese with Pizza",
      image:
        "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      normalPrice: 149,
      discountPrice: 76,
      discountPercentage: 16,
      imageAngles: {
        image1:
          "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
        image2:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
        image3:
          "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      },
    },
    {
      id: 3,
      name: "Mac and Cheese with Pizza",
      image:
        "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      normalPrice: 200,
      discountPrice: 100,
      discountPercentage: 50,
      imageAngles: {
        image1:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
        image2:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
        image3:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
      },
    },
    {
      id: 4,
      name: "Mac and Cheese with Pizza",
      image:
        "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      normalPrice: 120,
      discountPrice: 91,
      discountPercentage: 4,
      imageAngles: {
        image1:
          "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
        image2:
          "https://assets.kraftfoods.com/recipe_images/opendeploy/182248_640x428.jpg",
        image3:
          "https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg",
      },
    },
  ];
  return (
    <>
      <div className="my-2">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center flex-col w-full items-stretch md:space-x-5">
          {discounts.map(
            ({
              name,
              image,
              normalPrice,
              discountPrice,
              discountPercentage,
              id,
              imageAngles: { image1, image2, image3 },
            }) => (
              <div
                key={id}
                className="flex md:flex-row flex-col justify-between mt-7"
              >
                <div className="flex flex-col items-center justify-center">
                  {/* Image */}
                  {/* Main Image */}
                  <div className="w-[300px] h-[130px] overflow-hidden rounded-sm relative object-cover">
                    <Image
                      src={image}
                      alt={image}
                      fill={true}
                      objectFit="cover"
                      className="object-cover"
                    />
                  </div>
                  {/* Image Angles */}
                  <div className="flex items-center justify-center space-x-3 my-2">
                    <div className="w-20 rounded-sm cursor-pointer h-9 relative overflow-hidden group">
                      <Image
                        src={image1}
                        alt={image1}
                        fill={true}
                        className="brightness-90 duration-200  group-hover:brightness-100"
                      />
                    </div>
                    <div className="w-20 rounded-sm cursor-pointer h-9 relative overflow-hidden group">
                      <Image
                        src={image2}
                        alt={image2}
                        fill={true}
                        className="brightness-90 duration-200  group-hover:brightness-100"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* Pricing Details */}
                <DiscountDetails
                  name={name}
                  normalPrice={normalPrice}
                  discountPrice={discountPrice}
                  discountPercentage={discountPercentage}
                  id={id}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Discounts;
