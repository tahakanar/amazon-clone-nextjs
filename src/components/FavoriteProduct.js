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

  // const addItemToFavorite = () => {
  //   dispatch(
  //     addToFav({
  //       id,
  //       title,
  //       image,
  //       price,
  //     })
  //   );
  // };
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <Image src={image} height={200} width={200} objectFit='contain' />

      <div className='mt-2 flex flex-col'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <p>€{price}</p>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img
              loading='lazy'
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
        {/* <button onClick={addItemToFavorite}>+</button> */}
      </div>
    </div>
  );
}

export default FavoriteProduct;
