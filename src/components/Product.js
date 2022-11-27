import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { addToFav } from "../slices/favSlice";
import { motion } from "framer-motion";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, category, description, image, price, title }) {
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      category,
      description,
      image,
      price,
      title,
      rating,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const addItemToFavorite = () => {
    const favs = {
      id,
      category,
      description,
      image,
      price,
      title,
      rating,
      hasPrime,
    };
    setFav(!fav);
    dispatch(addToFav(favs));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      className='relative flex flex-col m-5 bg-white z-30 p-10'
    >
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
        {fav ? (
          <BadgeCheckIcon
            className='h-5 text-yellow-500 cursor-pointer'
            onClick={addItemToFavorite}
          />
        ) : (
          <HeartIcon
            onClick={addItemToFavorite}
            className='h-5 text-yellow-500 cursor-pointer'
          />
        )}
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
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag='x'
        dragConstraints={{ left: -100, right: 100 }}
        onClick={addItemToBasket}
        className='mt-auto button'
      >
        Add To Basket
      </motion.button>
    </motion.div>
  );
}

export default Product;
