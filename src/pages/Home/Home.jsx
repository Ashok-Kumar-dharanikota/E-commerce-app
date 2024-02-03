import CategoryCard from "../../components/CategoryCard";
import HeroCard from "../../components/HeroCard";
import arrow from '../../assets/icon-arrow.svg'
import ProductCard from "../../components/ProductCard";
import ServiceCard from "../../components/ServiceCard";

export default function Home() {

  const HeroItems = [
    {
      image: "1",
      style: " w-52 h-72"
    },
    {
      image: "2",
      style: " w-52 h-52"
    },
    {
      image: "3",
      style: " w-52 h-60"
    },
    {
      image: "4",
      style: " w-52 h-80 -mt-20"
    }

  ]

  const CategoryItems = [
    {
      image: "1",
      style: "col-start-1 col-end-4 md:col-start-1 md:col-end-3"
    },
    {
      image: "2",
      style: "col-start-1 col-end-4 md:col-start-3 md:col-end-4"
    },
    {
      image: "3",
      style: "col-start-1 col-end-4 md:col-start-1 md:col-end-2"
    },
    {
      image: "4",
      style: "col-start-1 col-end-4 md:col-start-2 md:col-end-4"
    },
  ]

  return (
    <>


      <section className=" flex flex-col-reverse w-screen h-full items-center p-6 md:justify-between md:items-start md:flex-row md:px-24">

        <div className=" bg-gray-100 text-center p-5 gap-5 flex flex-col md:w-1/2 md:text-start">

          <h1 className=" text-5xl font-semibold">Lorem ipsum dolor sit & products</h1>
          <p className=" text-xl">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus similique ut aspernatur fugiat nobis autem itaque debitis aut necessitatibus, delectus nisi cum repudiandae possimus asperiores quo velit mollitia culpa.</p>
          <div>
            <button>Add to Cart</button>
            <button>Explore</button>
          </div>

        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-5">
          {HeroItems.map((hero) => (
            <HeroCard key={hero.image} hero={hero} />
          ))}
        </div>
      </section>


      <section className=" grid gap-5 grid-cols-1 grid-rows-4 w-full h-full md:grid-cols-3 md:grid-rows-3 md:px-24 p-6">
        {CategoryItems.map((category) => (
          <CategoryCard key={category.image} category={category} />
        ))}


        <div className="flex col-start-1 col-end-4 bg-black rounded-3xl flex-col-reverse md:flex-row md:justify-between shadow-md" >
          <div className=" text-white p-10 h-full flex flex-col justify-between gap-5 md:w-2/4">
            <h1 className=" text-3xl">Finibus Bonorum et Malorum</h1>
            <p className=" font-light">Quis nostrud exercitation ullamco laboris nis ? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, non labore eum molestias perspiciatis reiciendis saepe atque qui debitis voluptas sit quis delectus quae repellat! Aliquid ea doloribus quaerat accusantium.</p>
            <button className=" bg-white p-3 w-2/4 text-black rounded-3xl">Explore</button>
          </div>

          <div className=" bg-white min-h-52 md:h-full md:w-1/4 rounded-3xl"></div>
        </div>
      </section>

      <section className=" w-full h-full p-6 flex flex-col gap-5 md:px-24">

        <div className=" flex justify-between">
          <h1 className=" text-2xl">Best Sellers</h1>
          <p className="flex items-center gap-3">Browse all products <img className=" mt-1" src={arrow} alt="" /></p>
        </div>

        <div className=" grid grid-cols-2 grid-rows-4 gap-10 md:grid-cols-4 md:grid-rows-2">

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <div className=" bg-gray-400 rounded-3xl col-start-1 col-end-3 p-5 flex items-end justify-center">

            <button className=" bg-white h-1/4 w-1/4 text-black rounded-3xl">Explore</button>
          </div>

          <div className=" bg-gray-100 rounded-3xl col-start-1 col-end-3 md:col-start-3 md:col-end-5 flex items-end justify-center p-5">
            <button className=" bg-black h-1/4 w-1/4 text-black rounded-3xl">Explore</button>

          </div>


        </div>

      </section>


      <section className=" w-full h-full p-6 md:px-24">

        <div className=" flex justify-between">
          <h1 className=" text-2xl">Featured Products</h1>
          <p className="flex items-center gap-3">Browse all products <img className=" mt-1" src={arrow} alt="" /></p>
        </div>

        <div className=" grid grid-cols-2 grid-rows-3 gap-5 pt-5 md:grid-cols-4 md:grid-rows-2">

          <div className=' flex flex-col col-start-1 col-end-3 gap-3 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 '>

            <div className=' min-w-32 min-h-52 bg-gray-100 rounded-3xl p-3 h-full'>
              <div className=' bg-white w-10 h-6 rounded-3xl'></div>
            </div>

            <h1 className=' font-semibold'>Product1</h1>
            <p className=' font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing</p>
            <span className=' text-xs font-bold'>$499.99 USD</span>


          </div>

          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>

      </section>

      <section className=" h-full w-full p-6 md:px-24 flex flex-col gap-5">

        <div className=" flex px-10 gap-5 justify-around">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>

        <div className=" bg-gray-100 min-h-24 rounded-3xl text-center p-10 flex flex-col justify-center items-center gap-5">
          <h1 className=" text-2xl font-semibold">Subscribe to our email newsletters and get 10%</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ullam </p>

          <div className=" flex gap-2">
            <input placeholder="Email Address" type="text" className=" p-2 rounded-3xl stroke-none border-none px-5" />
            <button className=" p-2 bg-black text-white rounded-3xl px-5">Subscribe</button>
          </div>
        </div>



      </section>

      <section className=" bg-black w-full h-2/4 p-10">

        <div className=" grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5">

          <div className=" text-white row-start-2 md:row-start-1">

            <h1 className=" text-2xl">Name</h1>
            <p className=" font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, debitis vero aliquam quaerat molestiae</p>
          </div>

          <div className=" text-white row-start-2 md:row-start-1 md:col-start-4">
            <h1 className=" uppercase">Contact us</h1>

            <div>
              <p>Email</p>
              <span className=" font-extralight">contact@gmail.com</span>
            </div>

            <div>
              <p>Phone</p>
              <span className=" font-extralight">(+44) 7522 - 507979</span>
            </div>



          </div>


          <div className=" text-white">
            <h1 className=" uppercase">Menu</h1>

            <ul>
              <li>Home</li>
              <li>store</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>


          <div className=" text-white">
            <h1 className=" uppercase">Pages</h1>

            <ul>
              <li>Shipping</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>


        </div>
      </section>
    </>
  )
}
