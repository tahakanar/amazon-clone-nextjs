import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-20 md:-mt-52'>
      {products
        .slice(0, 4)
        .map(({ id, category, description, image, price, rating, title }) => (
          <Product
            key={id}
            id={id}
            title={title}
            category={category}
            description={description}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
      <img
        className='md:col-span-full'
        src='https://links.papareact.com/dyz'
        alt='category banner'
      />
      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, category, description, image, price, rating, title }) => (
            <Product
              key={id}
              id={id}
              title={title}
              category={category}
              description={description}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, category, description, image, price, rating, title }) => (
          <Product
            key={id}
            id={id}
            title={title}
            category={category}
            description={description}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
