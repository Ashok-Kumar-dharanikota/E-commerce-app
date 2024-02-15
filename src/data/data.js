import uuid from "react-uuid";

const HomeData = {
    hero: {
        title: "Trendy Fashion Collection",
        description: "Explore the newest fashion trends for all occasions, unveiling the latest styles in just a glance.",
        images: [
            {
                id: "1",
                style: "h-52 md:w-52 md:h-72",
                image: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg"
            },
            {
                id: "2",
                style: " w-32 h-32 md:w-52 md:h-52",
                image: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                id: "3",
                style: " w-32 h-32 md:w-52 md:h-52",
                image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
                id: "4",
                style: " h-52 md:w-52 md:h-80 -mt-20",
                image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
        ]
    },
    category: [
        {
            id: "1",
            name: "Chic & Casual Vibes",
            description: "Step into a world of comfort and style with our effortlessly chic casual dresses.",
            link: "/casual-dresses",
            bgImage: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            style: "col-start-1 col-end-4 md:col-start-1 md:col-end-3"
        },
        {
            id: "2",
            name: "Elegance Redefined",
            description: "Make a statement with our collection of sophisticated formal wear that redefines elegance.",
            link: "/formal-wear",
            bgImage: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
            style: "col-start-1 col-end-4 md:col-start-3 md:col-end-4"
        },
        {
            id: "3",
            name: "Festive Glamour",
            description: "Shine bright at every party and festival with our glamorous and festive attire.",
            link: "/party-wear",
            bgImage: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600",
            style: "col-start-1 col-end-4 md:col-start-1 md:col-end-2"
        },
        {
            id: "4",
            name: "Urban Men's Style",
            description: "Explore the latest trends in urban men's fashion with our curated collection of pants and jackets.",
            link: "/mens-fashion",
            bgImage: "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            style: "col-start-1 col-end-4 md:col-start-2 md:col-end-4"
        }
    ],
    adverticement: [
        {
            id: "1",
            name: "Casual Bliss",
            description: "Embark on a journey of casual bliss with dresses perfect for friend hangouts and travel adventures, now with discounts of up to 50% off and more! Take advantage of this limited time special offer and elevate your style at unbeatable prices.",
            bgImage: "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1707819234~exp=1707819834~hmac=238e48a7c52443622cd478a9117dba93cd61da70453764c691e594f3820d4d85",
            link: "/casual-friendly"
        },
        {
            id: "2",
            name: "Eternal Elegance",
            description: "Experience eternal elegance with our collection of dresses tailored for weddings and special occasions.",
            bgImage: "https://img.freepik.com/free-photo/young-happy-beautiful-bride-white-elegant-wedding-dress-with-bouquet-posing-outdoor-park_273443-2671.jpg",
            link: "/wedding-dresses"
        },
        {
            id: "3",
            name: "Festival Finesse",
            description: "Dress up in festival finesse with attire that steals the spotlight at every party and festive celebration.",
            bgImage: "https://img.freepik.com/free-photo/laughing-young-women-man-evening-cloths-tossing-confetti_23-2147989318.jpg",
            link: "/party-festival-attire"
        }
    ],
    bestsellers: [
        {
            id: "1",
            discount: "20%",
            bgImage: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg",
            name: "Siren Red Statement",
            description: "Captivate attention with this siren red dress, a perfect statement piece for any occasion.",
            price: "$49.99"
        },
        {
            id: "2",
            discount: "15%",
            bgImage: "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2739.jpg",
            name: "Enchanting Evening Gown",
            description: "Enchant the evening with this stunning gown that radiates elegance and charm.",
            price: "$69.99"
        },
        {
            id: "3",
            discount: "25%",
            bgImage: "https://img.freepik.com/premium-photo/trendy-modesty-fashionable-outfit-ideas-muslim-women_802234-10936.jpg",
            name: "Modest Chic",
            description: "Stay chic with our modest fashion collection, blending style and modesty effortlessly.",
            price: "$39.99"
        },
        {
            id: "4",
            discount: "30%",
            bgImage: "https://img.freepik.com/premium-photo/woman-yellow-saree-with-red-background_866911-26.jpg",
            name: "Radiant Yellow Saree",
            description: "Radiate joy and positivity in this vibrant yellow saree, a perfect addition to your ethnic wardrobe.",
            price: "$59.99"
        }
    ],
    featuredProducts: [
        {
            id: "1",
            discount: "10%",
            bgImage: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5022.jpg",
            name: "Effortless Denim Charm",
            description: "Radiate charm effortlessly with this casual denim outfit that exudes style and comfort.",
            price: "$34.99"
        },
        {
            id: "2",
            discount: "18%",
            bgImage: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg",
            name: "Checkmate Checkered Shirt",
            description: "Make a bold statement with our checkered shirt, adding a touch of sophistication to your wardrobe.",
            price: "$29.99"
        },
        {
            id: "3",
            discount: "15%",
            bgImage: "https://img.freepik.com/free-photo/full-length-portrait-confident-successful-man_171337-16784.jpg",
            name: "Confidence Unleashed",
            description: "Unleash your confidence with this stylish ensemble that speaks volumes about your personality.",
            price: "$44.99"
        },
        {
            id: "4",
            discount: "12%",
            bgImage: "https://img.freepik.com/free-photo/positive-guy-hat-sunglasses-smiling-isolated-background_197531-26959.jpg",
            name: "Smile with Style",
            description: "Spread positivity with this stylish look that reflects your vibrant and cheerful personality.",
            price: "$39.99"
        }
    ],
    services: [
        {
            id: "0",
            name: "Free Shipping",
            service: "Over $29.00",
            icon: '../assets/icon-shipping.svg'
        },
        {
            id: "1",
            name: "Secure Payments",
            service: "With 5+ Payment options",
            icon: "../assets/icon-payment.svg"
        },
        {
            id: "2",
            name: "30 days free return",
            service: "No questions asked",
            icon: "../assets/icon-return.svg"
        }
    ]
};

export const allproducts = [
    {
        id: uuid(),
        discount: 18,
        name: "Siren Red Statement",
        category: "Womens",
        description: "Captivate attention with this siren red dress, a perfect statement piece for any occasion.",
        image: "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg",
        original_price: 59.99,
        quantity: 0,
        rating: 4.2
    },
    {
        id: uuid(),
        discount: 22,
        image: "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2739.jpg",
        name: "Enchanting Evening Gown",
        category: "Womens",
        description: "Enchant the evening with this stunning gown that radiates elegance and charm.",
        original_price: 79.99,
        quantity: 0,
        rating: 4.3
    },
    {
        id: uuid(),
        discount: 15,
        image: "https://img.freepik.com/premium-photo/trendy-modesty-fashionable-outfit-ideas-muslim-women_802234-10936.jpg",
        name: "Modest Chic",
        category: "Womens",
        description: "Stay chic with our modest fashion collection, blending style and modesty effortlessly.",
        original_price: 69.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 20,
        image: "https://img.freepik.com/premium-photo/woman-yellow-saree-with-red-background_866911-26.jpg",
        name: "Radiant Yellow Saree",
        category: "Womens",
        description: "Radiate joy and positivity in this vibrant yellow saree, a perfect addition to your ethnic wardrobe.",
        original_price: 89.99,
        quantity: 0,
        rating: 4.6
    },
    {
        id: uuid(),
        discount: 25,
        image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5022.jpg",
        name: "Effortless Denim Charm",
        category: "mens",
        description: "Radiate charm effortlessly with this casual denim outfit that exudes style and comfort.",
        original_price: 59.99,
        quantity: 0,
        rating: 4.0
    },
    {
        id: uuid(),
        discount: 18,
        image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg",
        name: "Checkmate Checkered Shirt",
        category: "mens",
        description: "Make a bold statement with our checkered shirt, adding a touch of sophistication to your wardrobe.",
        original_price: 69.99,
        quantity: 0,
        rating: 4.8
    },
    {
        id: uuid(),
        discount: 22,
        image: "https://img.freepik.com/free-photo/full-length-portrait-confident-successful-man_171337-16784.jpg",
        name: "Confidence Unleashed",
        category: "mens",
        description: "Unleash your confidence with this stylish ensemble that speaks volumes about your personality.",
        original_price: 79.99,
        quantity: 0,
        rating: 4.4
    },
    {
        id: uuid(),
        discount: 20,
        image: "https://img.freepik.com/free-photo/positive-guy-hat-sunglasses-smiling-isolated-background_197531-26959.jpg",
        name: "Smile with Style",
        category: "mens",
        description: "Spread positivity with this stylish look that reflects your vibrant and cheerful personality.",
        original_price: 49.99,
        quantity: 0,
        rating: 4.9
    },
    {
        id: uuid(),
        discount: 25,
        name: "Graphic Tee Design",
        category: "mens",
        description: "Stand out in this trendy graphic t-shirt design, a perfect choice for a casual day out.",
        image: "https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-13975.jpg?size=626&ext=jpg",
        original_price: 29.99,
        quantity: 0,
        rating: 4.2
    },
    {
        id: uuid(),
        discount: 30,
        name: "Bicolor Ensemble",
        category: "Womens",
        description: "Make a bold statement with this chic bicolor outfit, perfect for a day out in the city.",
        image: "https://img.freepik.com/premium-photo/woman-gray-pants-blouse-bicolor-accessories-boots-white-background-brown-hair-studio-shot_481253-1215.jpg",
        original_price: 119.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 20,
        name: "Classic Black Tee",
        category: "mens",
        description: "Elevate your wardrobe with this simple yet stylish black tee, a versatile piece for any occasion.",
        image: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg",
        original_price: 39.99,
        quantity: 0,
        rating: 4.3
    },
    {
        id: uuid(),
        discount: 15,
        name: "Red Hoodie Friendship",
        category: "mens",
        description: "Show your bond with your bestie with these matching red hoodies, perfect for fun outings together.",
        image: "https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg",
        original_price: 49.99,
        quantity: 0,
        rating: 4.6
    },
    {
        id: uuid(),
        discount: 15,
        name: "Red Polo Style",
        category: "mens",
        description: "Stay stylish and comfortable in this vibrant red polo shirt, perfect for casual gatherings and outings.",
        image: "https://img.freepik.com/free-photo/man-red-polo-shirt-apparel-studio-shoot_53876-102825.jpg",
        original_price: 54.99,
        quantity: 0,
        rating: 4.4
    },
    {
        id: uuid(),
        discount: 20,
        name: "Red & White Polo Duo",
        category: "mens",
        description: "Upgrade your wardrobe with this stylish duo of red and white polo shirts, perfect for a casual yet refined look.",
        image: "https://img.freepik.com/premium-psd/red-white-polo-shirts-hangers_23-2149688331.jpg",
        original_price: 89.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 10,
        name: "Hoodie Portrait",
        category: "Womens",
        description: "Stay cozy and stylish in this hoodie, perfect for capturing your casual moments with confidence.",
        image: "https://img.freepik.com/free-photo/portrait-young-adult-wearing-hoodie-mockup_23-2149296261.jpg",
        original_price: 79.99,
        quantity: 0,
        rating: 4.6
    },
    {
        id: uuid(),
        discount: 25,
        name: "Black Sweater Style",
        category: "mens",
        description: "Achieve a laid-back yet fashionable look with this sleek black sweater and bucket hat combination.",
        image: "https://img.freepik.com/free-photo/man-black-sweater-black-bucket-hat-youth-apparel-shoot_53876-102294.jpg",
        original_price: 79.99,
        quantity: 0,
        rating: 4.5
    },
    {
        id: uuid(),
        discount: 15,
        name: "Casual Urban Style",
        category: "mens",
        description: "Achieve a trendy urban look with this casual outfit, perfect for everyday wear.",
        image: "https://img.freepik.com/free-photo/young-handsome-hipster-man-standing_285396-1515.jpg",
        original_price: 59.99,
        quantity: 0,
        rating: 4.3
    },
    {
        id: uuid(),
        discount: 20,
        name: "Chic Studio Vibes",
        category: "mens",
        description: "Embrace a laid-back yet stylish vibe with this chic studio-inspired outfit.",
        image: "https://img.freepik.com/free-photo/young-curly-man-sitting-studio-chair-isolated-white-wall_231208-1181.jpg",
        original_price: 69.99,
        quantity: 0,
        rating: 4.5
    },
    {
        id: uuid(),
        discount: 18,
        name: "Serious Style Statement",
        category: "mens",
        description: "Make a serious style statement with this bold and confident look, perfect for any occasion.",
        image: "https://img.freepik.com/free-photo/serious-young-man-standing-isolated-grey_171337-10571.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 89.99,
        quantity: 0,
        rating: 4.8
    },
    {
        id: uuid(),
        discount: 25,
        name: "Stylish Portrait",
        category: "Womens",
        description: "Capture your stylish essence with this stunning portrait that exudes confidence and charm.",
        image: "https://img.freepik.com/free-photo/portrait-beautiful-stylish-young-woman_158538-4020.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 99.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 30,
        name: "Winter Fashion Demonstration",
        category: "Womens",
        description: "Stay warm and stylish with this winter fashion demonstration showcasing trendy winter clothing.",
        image: "https://img.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_1303-17005.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 129.99,
        quantity: 0,
        rating: 4.8
    },
    {
        id: uuid(),
        discount: 20,
        name: "Sunglasses and Bag Style",
        category: "Womens",
        description: "Accessorize with style with this ensemble featuring trendy sunglasses and a chic bag.",
        image: "https://img.freepik.com/premium-photo/pretty-woman-sunglasses-with-bag_136403-2340.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 79.99,
        quantity: 0,
        rating: 4.6
    },
    {
        id: uuid(),
        discount: 15,
        name: "Indian Sari Beauty",
        category: "Womens",
        description: "Drape yourself in elegance with this beautiful Indian sari, perfect for cultural occasions.",
        image: "https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400840.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 149.99,
        quantity: 0,
        rating: 4.9
    },
    {
        id: uuid(),
        discount: 18,
        name: "Purple Sweater Ensemble",
        category: "Womens",
        description: "Stay cozy and stylish with this chic purple sweater ensemble, perfect for casual outings.",
        image: "https://img.freepik.com/free-photo/beautiful-woman-purple-sweater-skirt_1303-17493.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 69.99,
        quantity: 0,
        rating: 4.4
    },
    {
        id: uuid(),
        discount: 22,
        name: "Colorful Summer Fashion",
        category: "Womens",
        description: "Brighten up your summer with this colorful and stylish fashion ensemble, perfect for sunny days.",
        image: "https://img.freepik.com/free-photo/woman-posing-stylish-summer-fashion-bag-colorful-mood_285396-524.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 99.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 15,
        name: "Asian Girl Poses",
        category: "kids",
        description: "Capture precious moments with this adorable Asian girl posing for the camera.",
        image: "https://img.freepik.com/free-photo/asian-girl-posing_23-2149396537.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 39.99,
        quantity: 0,
        rating: 4.3
    },
    {
        id: uuid(),
        discount: 20,
        name: "Cute Little Girl Portrait",
        category: "kids",
        description: "Admire the innocence in this full-length portrait of a cute little girl wearing a hat.",
        image: "https://img.freepik.com/free-photo/full-length-portrait-cute-little-girl-hat_171337-13768.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 49.99,
        quantity: 0,
        rating: 4.5
    },
    {
        id: uuid(),
        discount: 25,
        name: "Stylish Kid Boy",
        category: "kids",
        description: "Celebrate childhood with this stylish full-length portrait of a little boy in trendy jeans clothes.",
        image: "https://img.freepik.com/free-photo/full-length-portrait-cute-little-kid-boy-stylish-jeans-clothes-smiling-standing-white-kids-fashion-concept_155003-20308.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 59.99,
        quantity: 0,
        rating: 4.7
    },
    {
        id: uuid(),
        discount: 18,
        name: "Little Boy Poses",
        category: "kids",
        description: "Capture the joy of childhood with this low-angle portrait of a little boy posing for the camera.",
        image: "https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 44.99,
        quantity: 0,
        rating: 4.2
    },
    {
        id: uuid(),
        discount: 20,
        name: "Close-Up Child Portrait",
        category: "kids",
        description: "Capture the innocence and charm in this close-up portrait of an adorable child.",
        image: "https://img.freepik.com/free-photo/close-up-cute-child-portrait_23-2149153275.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 34.99,
        quantity: 0,
        rating: 4.6
    },
    {
        id: uuid(),
        discount: 15,
        name: "Young Boy Casual Style",
        category: "kids",
        description: "Admire the casual charm in this portrait of a pretty young boy in casual clothes.",
        image: "https://img.freepik.com/free-photo/pretty-young-boy-casual-clothes-white-studio_155003-32750.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 39.99,
        quantity: 0,
        rating: 4.4
    },
    {
        id: uuid(),
        discount: 22,
        name: "Skateboarding Girl Portrait",
        category: "kids",
        description: "Embrace the spirit of adventure with this portrait of a young girl with a skateboard.",
        image: "https://img.freepik.com/free-photo/portrait-young-girl-with-skateboard_23-2149185137.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 54.99,
        quantity: 0,
        rating: 4.8
    },
    {
        id: uuid(),
        discount: 28,
        name: "Child with Skateboard",
        category: "kids",
        description: "Witness the joy of childhood with this portrait of a cute child with a skateboard.",
        image: "https://img.freepik.com/free-photo/front-view-cute-child-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-floor_179666-1008.jpg?size=626&ext=jpg&ga=GA1.1.1274709441.1701714783&semt=ais",
        original_price: 49.99,
        quantity: 0,
        rating: 4.7
    }


]

export default HomeData;
