import Image from "next/image";
import { useSelector } from "react-redux";
import { selectFavs } from "../slices/favSlice";
import Header from "../components/Header";
import { useSession } from "next-auth/react";
import FavoriteProduct from "../components/FavoriteProduct";

function Favorites() {
  const datas = useSelector(selectFavs);
  const { data: session } = useSession();

  console.log(datas);

  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {datas.length === 0
                ? "Your Favorites are Empty"
                : "Your Favorites"}
            </h1>
          </div>
          <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {datas.map((item, i) => (
              <FavoriteProduct
                key={i}
                id={item.id}
                rating={item.rating}
                hasPrime={item.hasPrime}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
