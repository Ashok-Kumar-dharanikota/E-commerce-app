import { Link } from "react-router-dom";
import Product from "../../containers/Product";
import { allproducts } from "../../data/data";

export default function Kids() {
  const kidsCollections = allproducts.filter(item => item.category === 'kids');


  return (
    <div className="flex flex-col px-5 md:p-20 gap-5">
      <h1 className=" text-2xl font-bold">Kids Clothing</h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 flex-wrap">
        {kidsCollections.map((product) => (
          <Link key={product.id} to={`/store/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}
