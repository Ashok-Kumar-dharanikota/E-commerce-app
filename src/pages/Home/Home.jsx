import CategoryCard from "../../components/CategoryCard";
import HeroCard from "../../components/HeroCard";
import Iconarrowdark from '../../assets/icon-arrow-dark.svg'
import ServiceCard from "../../components/ServiceCard";
import { useContext } from "react";
import { homeContext } from "../../context/HomeContext";
import { allproducts } from "../../data/data";
import iconShipping from '../../assets/icon-shipping.svg';
import iconPayment from '../../assets/icon-payment.svg';
import iconReturn from '../../assets/icon-return.svg';
import { Link } from "react-router-dom";
import Product from "../../containers/Product";
import { Rating } from "@mui/material";

export default function Home() {

  const { hero, category, adverticement, services } = useContext(homeContext);
  const womensCollections = allproducts.filter(item => item.category === 'Womens').slice(0, 8);
  const menCollectionOne = allproducts.filter(item => item.category === 'mens').slice(0, 1);
  const menCollections = allproducts.filter(item => item.category === 'mens').slice(1, 9);


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


      <section className="w-full h-full  md:px-24 p-6">

        <h1 className=" text-2xl font-bold mb-5">Unlock Your Style Potential<br /><span className=" text-sm font-normal">Browse Our Collections</span></h1>
        <div className="grid gap-5 grid-cols-1 grid-rows-4 md:grid-cols-3 md:grid-rows-3">
          {category.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}


          <div className="flex col-start-1 col-end-4 min-h-80 bg-gray-400 rounded-3xl flex-col-reverse md:flex-row md:justify-between shadow-md bg-no-repeat bg-contain overflow-hidden"   >
            <div className=" text-white p-10 h-full flex flex-col gap-5 md:w-2/4">
              <h1 className=" text-3xl font-semibold">{adverticement[0].name}</h1>
              <p className=" font-light">{adverticement[0].description}</p>
              <Link to={'/store'}  className=" bg-white p-3 md:w-1/4 text-center text-black rounded-3xl shadow-md hover:bg-black hover:text-white transition-all">Explore</Link>
            </div>

            <img src={adverticement[0].bgImage} alt="" width={600} />
          </div>
        </div>

      </section>

      <section className=" w-full h-full p-6 flex flex-col gap-5 md:px-24">

        <div className=" flex justify-between">
          <h1 className=" text-2xl font-bold">Best Sellers</h1>
          <Link className="flex items-center gap-3" to={'/store'}>Browse all products <img className=" mt-1" src={Iconarrowdark} alt="" /></Link>
        </div>

        <div className=" grid grid-cols-2 grid-rows-4 gap-5 md:grid-cols-4 md:grid-rows-3 gap-y-10">

          {womensCollections.map((product) => (
            <Link key={product.id} to={`/store/${product.id}`}>
              <Product key={product.id} product={product} />
            </Link>
          ))}


          <div className=" text-white rounded-3xl col-start-1 col-end-3 p-5 flex flex-col items-center justify-end bg-no-repeat bg-cover" style={{ backgroundImage: `url(${adverticement[1].bgImage})` }}>

            <div className=" rounded-xl bg-white/20 backdrop-blur-sm flex flex-col items-center text-center p-5 gap-4">
              <h1 className=" text-3xl font-semibold">{adverticement[1].name}</h1>
              <p className=" font-light">{adverticement[1].description}</p>

              <Link to={'/store'}  className=" bg-white p-3 md:w-1/4 text-black rounded-3xl shadow-md hover:bg-black hover:text-white transition-all">Explore</Link>
            </div>

          </div>

          <div className=" text-white rounded-3xl col-start-1 col-end-3 md:col-start-3 md:col-end-5 flex flex-col items-center justify-end p-5" style={{ backgroundImage: `url(${adverticement[2].bgImage})` }}>

            <div className=" rounded-xl bg-white/20 backdrop-blur-sm flex flex-col items-center text-center p-5 gap-4">
              <h1 className=" text-3xl font-semibold">{adverticement[2].name}</h1>
              <p className=" font-light">{adverticement[2].description}</p>

              <Link to={'/store'}  className=" bg-white p-3 md:w-1/4 text-black rounded-3xl shadow-md hover:bg-black hover:text-white transition-all">Explore</Link>
            </div>

          </div>


        </div>

      </section>


      <section className=" w-full h-full p-6 md:px-24">

        <div className=" flex justify-between">
          <h1 className=" text-2xl font-bold">Featured Products</h1>
          <Link className="flex items-center gap-3" to={'/store'}>Browse all products <img className=" mt-1" src={Iconarrowdark} alt="" /></Link>
        </div>

        <div className=" grid grid-cols-2 grid-rows-3 gap-5 pt-5 md:grid-cols-4 md:grid-rows-2 gap-y-10">


          <Link className=' flex flex-col col-start-1 col-end-3 gap-3 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 ' to={`/store/${menCollectionOne[0].id}`} >

            <div className=' min-w-32 min-h-52 bg-gray-100 rounded-3xl p-3 h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${menCollectionOne[0].image})` }}>
              <div className=' bg-white flex items-center justify-center font-semibold px-2 w-fit h-6 rounded-3xl'>{menCollectionOne[0].discount}% off</div>
            </div>

            <h1 className=' font-semibold'>{menCollectionOne[0].name}</h1>
            <p className=' font-light'>{menCollectionOne[0].description}</p>
            <div className=' flex justify-between items-center md:flex-row-reverse  flex-wrap'>
              <div className=' flex items-center gap-1'>
                <p className=' font-semibold'>{menCollectionOne[0].rating}</p>
                <Rating defaultValue={menCollectionOne[0].rating} precision={0.1} />
              </div>
              <div className=' flex gap-2 items-end'>
                <span className=' text-xl font-medium'>$99</span>
                <span className=' text-xs font-semibold line-through text-gray-400'>$ {menCollectionOne[0].original_price}</span>
              </div>
            </div>


          </Link>

          {menCollections.map((product) => (
            <Link key={product.id} to={`/store/${product.id}`}>
              <Product key={product.id} product={product} />
            </Link>
          ))}




        </div>

      </section>

      <section className=" h-full w-full p-6 md:px-24 flex flex-col gap-5">

        <div className=" flex px-10 gap-5 md:justify-around justify-between">
          <ServiceCard service={services[0]} icon={iconShipping} />
          <ServiceCard service={services[1]} icon={iconPayment} />
          <ServiceCard service={services[2]} icon={iconReturn} />

        </div>

        <div className=" bg-gray-100 min-h-24 rounded-3xl text-center p-10 flex flex-col justify-center items-center gap-5">
          <h1 className=" text-2xl font-semibold">Subscribe to our email newsletters</h1>
          <p>get 10% discount  on your first purchase! </p>

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
            <p className=" font-extralight">Explore the newest fashion trends for all occasions, unveiling the latest styles in just a glance.</p>
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
              <li>Mens</li>
              <li>Womens</li>
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
