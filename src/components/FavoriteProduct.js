import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { removeFromFav } from "../slices/favSlice";

function FavoriteProduct({
  id,
  rating,
  hasPrime,
  category,
  description,
  image,
  price,
  title,
}) {
  const dispatch = useDispatch();

  const removeItemFromFavorite = () => {
    dispatch(removeFromFav({ id }));
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 justify-between border-2 border-solid border-gray-300 rounded-md'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <Image
        src={image}
        width={200}
        height={200}
        objectFit='contain'
        className='cursor-pointer'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        <div className='flex flex-grow'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className='h-5 text-yellow-500' />
            ))}
        </div>
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <p>€{price}</p>
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            className='w-12'
            src='https://links.papareact.com/fdw'
            alt='Prime'
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button
        onClick={removeItemFromFavorite}
        className='button mt-2 text-center'
      >
        Remove from Favorites
      </button>
    </div>
  );
}

export default FavoriteProduct;
