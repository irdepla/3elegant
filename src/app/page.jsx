import Image from "next/image";
import Card from "./components/Card/index.jsx";

export default async function Home() {
  const PRODUCTS_GET_URL = "http://localhost:5000/products";

  const products = (await (await fetch(PRODUCTS_GET_URL)).json()).data || [];
  console.log(products);

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
