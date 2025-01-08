import Link from "next/link";
import React from "react";

const Card = ({product}) => {
  return ( 
  <>

  <div className="">
    <Link href={"/product/" + product.id} >
    <img src={product.image} alt="alt"  />
    <h1 className="text-xl">{product.name}</h1>
    </Link>
    <p className="font-bold text-2xl">${product.price}</p>
    <button className="p-2 border border-black border-solid rounded-lg text-white bg-black">Buy Now</button>
  </div>


  </>
  )
};

export default Card;
