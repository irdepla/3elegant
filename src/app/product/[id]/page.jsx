import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const id = params.id;

  const PRODUCTS_GET_URL = "http://localhost:5000/products";

  const product =
    (await (await fetch(`${PRODUCTS_GET_URL}/${id}`)).json()).data || [];
  console.log(product);

  return (
    <>
      <div className="">
        <Link href={"/product/" + product.id}>
          <img src={product.image} alt="alt" />
          <h1 className="text-xl">{product.name}</h1>
        </Link>
        <p className="font-bold text-2xl">${product.price}</p>
        <button className="p-2 border border-black border-solid rounded-lg text-white bg-black">
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Page;
