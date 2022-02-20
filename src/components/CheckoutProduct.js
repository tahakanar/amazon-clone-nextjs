import Image from "next/image";
import { StarIcon, TrashIcon } from "@heroicons/react/solid";
import {
  addToBasket,
  removeAll,
  decreaseQuantity,
} from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  rating,
  hasPrime,
  category,
  description,
  image,
  price,
  title,
  quantity,
}) {
  const dispatch = useDispatch();

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
      quantity,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeAll({ id }));
  };

  const decreaseItemFromBasket = () => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div className='grid grid-cols-5 relative shadow-md mb-2 p-2'>
      <TrashIcon
        onClick={removeItemFromBasket}
        className='h-5 cursor-pointer text-gray-500 absolute right-0 top-0 m-2'
      />
      <Image src={image} height={200} width={200} objectFit='contain' />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <p className='mb-5'>€{price}</p>
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
      </div>
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <div className='button space-x-5'>
          <span className='cursor-pointer' onClick={decreaseItemFromBasket}>
            -
          </span>
          <span className=''>{quantity}</span>
          <span className='cursor-pointer' onClick={addItemToBasket}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
