import CategoryCard from "../../components/CategoryCard";
import HeroCard from "../../components/HeroCard";
import arrow from '../../assets/icon-arrow.svg'
import ProductCard from "../../components/ProductCard";
import ServiceCard from "../../components/ServiceCard";
import { useContext } from "react";
import { homeContext } from "../../context/HomeContext";

import iconShipping from '../../assets/icon-shipping.svg';
import iconPayment from '../../assets/icon-payment.svg';
import iconReturn from '../../assets/icon-return.svg';

export default function Home() {

  const { hero, category, adverticement, bestsellers, featuredProducts, services } = useContext(homeContext);


  return (
    <>


      <section className=" flex flex-col-reverse w-full h-full items-center md:p-6 md:justify-between md:flex-row md:px-24 "  >

        <div className=" -mt-20  text-center p-5 gap-1 md:gap-10 flex flex-col md:w-1/2 md:text-start">

          <h1 className=" text-3xl md:text-8xl font-semibold font-quattrocento">{hero.title}</h1>
          <p className=" text-sm font-quattrocentosans">{hero.description}</p>
          <div>
            <button className=" bg-green-400 px-16 py-4 text-white font-semibold hover:bg-green-500">Shop Now</button>
          </div>

        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-5">
          {hero.images.map((image) => (
            <HeroCard key={image.id} hero={image} />
          ))}
        </div>
      </section>


      <section className=" grid gap-5 grid-cols-1 grid-rows-4 w-full h-full md:grid-cols-3 md:grid-rows-3 md:px-24 p-6 ">
        {category.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}


        <div className="flex col-start-1 col-end-4 min-h-80 bg-black rounded-3xl flex-col-reverse md:flex-row md:justify-between shadow-md"  >
          <div className=" text-white p-10 h-full flex flex-col justify-between gap-5 md:w-2/4">
            <h1 className=" text-3xl">{adverticement[0].name}</h1>
            <p className=" font-light">{adverticement[0].description}</p>
            <button className=" bg-white p-3 w-2/4 text-black rounded-3xl">Explore</button>
          </div>

          <div className=" bg-white min-h-52 md:h-full md:w-2/4 rounded-3xl bg-[url('https://www.apple.com/v/apple-vision-pro/c/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${adverticement[0].bgImage})` }} ></div>
        </div>
      </section>

      <section className=" w-full h-full p-6 flex flex-col gap-5 md:px-24">

        <div className=" flex justify-between">
          <h1 className=" text-2xl">Best Sellers</h1>
          <p className="flex items-center gap-3">Browse all products <img className=" mt-1" src={arrow} alt="" /></p>
        </div>

        <div className=" grid grid-cols-2 grid-rows-4 gap-10 md:grid-cols-4 md:grid-rows-2">

          {bestsellers.map((item) => {
            return (
              <ProductCard key={item.id} product={item} />
            );
          })}

          <div className=" text-white rounded-3xl col-start-1 col-end-3 p-5 flex flex-col items-center justify-end bg-no-repeat bg-cover" style={{ backgroundImage: `url(${adverticement[1].bgImage})` }}>

            <h1 className=" text-3xl">{adverticement[1].name}</h1>
            <p className=" font-light">{adverticement[1].description}</p>

            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore</button>
          </div>

          <div className=" text-white rounded-3xl col-start-1 col-end-3 md:col-start-3 md:col-end-5 flex flex-col items-center justify-end p-5" style={{ backgroundImage: `url(${adverticement[2].bgImage})` }}>

            <h1 className=" text-3xl">{adverticement[1].name}</h1>
            <p className=" font-light">{adverticement[1].description}</p>

            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Explore</button>

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

            <div className=' min-w-32 min-h-52 bg-gray-100 rounded-3xl p-3 h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/his-confidence-is-first-thing-everyone-notices-studio-shot-handsome-young-man-posing-against-dark-background_590464-45488.jpg')` }}>
              <div className=' bg-white w-10 h-6 rounded-3xl'>15%</div>
            </div>

            <h1 className=' font-semibold'>Black Elegance Coat</h1>
            <p className=' font-light'>Experience sophistication with our Black Elegance Coat. Crafted with precision, this coat combines style and comfort effortlessly.</p>
            <span className=' text-xs font-bold'>$89.99 USD</span>


          </div>


          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}

        </div>

      </section>

      <section className=" h-full w-full p-6 md:px-24 flex flex-col gap-5">

        <div className=" flex px-10 gap-5 md:justify-around justify-between">
          <ServiceCard service={services[0]} icon={iconShipping} />
          <ServiceCard service={services[1]} icon={iconPayment} />
          <ServiceCard service={services[2]} icon={iconReturn}/>

        </div>

        <div className=" bg-gray-100 min-h-24 rounded-3xl text-center p-10 flex flex-col justify-center items-center gap-5">
          <h1 className=" text-2xl font-semibold">Subscribe to our email newsletters and get 10%</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, ullam </p>

          <div className=" flex gap-2 flex-wrap justify-center">
            <input placeholder="Email Address" type="text" className=" p-2 rounded-3xl stroke-none border-none px-5" />
            <button className=" p-2 bg-black text-white rounded-3xl px-5">Subscribe</button>
          </div>
        </div>



      </section>

      <section className=" bg-black w-screen h-2/4 p-10">

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
