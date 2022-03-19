import blogImg from '../assets/images/news-7-62x62.jpg';
import sliderImg1 from '../assets/images/image-1.jpg';
import sliderImg2 from '../assets/images/image-2.jpg';
import sliderImg3 from '../assets/images/image-3.jpg';
import sliderIcon1 from '../assets/images/icon-1.png';
import restaurantImg1 from '../assets/images/slide-1-2.jpg';
import backgroundImg1 from '../assets/images/1-1024x750.jpg';
import serviceIcon1 from '../assets/images/services-1.png';
import serviceIcon2 from '../assets/images/services-2.png';
import serviceIcon3 from '../assets/images/services-3.png';
import chickenImg1 from '../assets/images/chicken-1.png';
import diningImg1 from '../assets/images/dining-item-1.jpg';
import diningImg2 from '../assets/images/dining-item-2.jpg';
import diningImg3 from '../assets/images/dining-item-3.jpg';
import diningImg4 from '../assets/images/dining-item-4.jpg';
import diningImg5 from '../assets/images/dining-item-5.jpg';
import diningImg6 from '../assets/images/dining-item-6.jpg';
import diningImg7 from '../assets/images/dining-item-7.jpg';
import diningImg8 from '../assets/images/dining-item-8.jpg';
import diningImg9 from '../assets/images/dining-item-9.jpg';
import diningImg10 from '../assets/images/dining-item-10.jpg';
import backgroundImg2 from '../assets/images/2-860x1024.jpg';
import specialImg1 from '../assets/images/special-1.jpg';
import specialImg2 from '../assets/images/special-2.jpg';
import carouselImg1 from '../assets/images/1-1.jpg';
import carouselImg2 from '../assets/images/2-1.jpg';
import carouselImg3 from '../assets/images/3.jpg';
import backgroundImg3 from '../assets/images/3-1-683x1024.jpg';
import chefImg1 from '../assets/images/chef-1.jpg';
import chefImg2 from '../assets/images/chef-2.jpg';
import chefImg3 from '../assets/images/chef-3.jpg';
import blogImg1 from '../assets/images/news-1.jpg';
import blogImg2 from '../assets/images/news-2.jpg';
import blogImg3 from '../assets/images/news-3.jpg';
import dishImg1 from '../assets/images/dish-1.jpg';
import dishImg2 from '../assets/images/dish-2.jpg';
import dishImg3 from '../assets/images/dish-3.jpg';
import dishImg4 from '../assets/images/dish-4.jpg';
import dishImg5 from '../assets/images/dish-5.jpg';
import dishImg6 from '../assets/images/dish-6.jpg';
import dishImg7 from '../assets/images/dish-7.jpg';
import dishImg8 from '../assets/images/dish-8.jpg';
import dishImg9 from '../assets/images/dish-9.jpg';
import backgroundImg4 from '../assets/images/10.jpg';
import serviceIcon4 from '../assets/images/services-4.png';
import backgroundImg5 from '../assets/images/5.jpg';
import serviceIcon5 from '../assets/images/services-5.png';
import serviceIcon6 from '../assets/images/services-6.png';
import backgroundImg6 from '../assets/images/7.jpg';

export const headerData = {
  socialIcon: [
    {
      url: '#',
      icon: 'fa-brands fa-facebook-f',
    },
    {
      url: '#',
      icon: 'fa-brands fa-twitter',
    },
    {
      url: '#',
      icon: 'fa-brands fa-google-plus-g',
    },
    {
      url: '#',
      icon: 'fa-brands fa-tumblr',
    },
  ],

  reservationPhone: '+011 29 345 678',
  openingHours: '9:00am - 10:00pm',
};

export const navigationData = {
  menuItems: [
    {
      title: 'Home',
      submenu: [
        {
          title: 'Homepage one',
          url: '/',
          id: 'homepage1',
        },
        {
          title: 'Homepage two',
          url: '#',
          id: 'homepage2',
        },
        {
          title: 'Homepage three',
          id: 'homepage3',
          submenu: [
            {
              title: 'Homepage one',
              url: '#',
              id: 'homepage31',
            },
            {
              title: 'Homepage two',
              url: '#',
              id: 'homepage32',
            },
            {
              title: 'Homepage three',
              id: 'homepage33',
              // url: '#',
              submenu: [
                {
                  title: 'Homepage one',
                  url: '#',
                  id: 'homepage331',
                },
                {
                  title: 'Homepage two',
                  url: '#',
                  id: 'homepage332',
                },
                {
                  title: 'Homepage three',
                  url: '#',
                  id: 'homepage333',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'About',
      url: '#',
    },
    {
      title: 'Reservation',
      url: '#',
    },
    {
      title: 'Menu',
      submenu: [
        {
          title: 'Menu style one',
          url: '/menu1',
          id: 'menu1',
        },
        {
          title: 'Menu style two',
          id: 'menu2',
          url: '/menu2',
        },
        {
          title: 'Menu style three',
          url: '#',
          id: 'menu3',
        },
      ],
    },
    {
      title: 'Gallery',
      url: '#',
    },
    {
      title: 'Shop',
      submenu: [
        {
          title: 'Shop one',
          url: '#',
          id: 'shop1',
        },
        {
          title: 'Shop two',
          url: '#',
          id: 'shop2',
        },
        {
          title: 'Shop three',
          url: '#',
          id: 'shop3',
        },
      ],
    },
    {
      title: 'Blog',
      submenu: [
        {
          title: 'Blog',
          url: '#',
          id: 'blog1',
        },
        {
          title: 'Blog simple',
          url: '#',
          id: 'blog2',
        },
      ],
    },
    {
      title: 'Contact',
      url: '#',
    },
  ],
};

export const slideshowData = {
  slideshowItems: [
    {
      title: 'The Delicious Food Tasts',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      imgSrc: sliderImg1,
      imgAlt: 'restaurant',
    },
    {
      title: 'The Delicious Food Tasts',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      imgSrc: sliderImg2,
      imgAlt: 'restaurant',
    },
    {
      title: 'The Fresh And Tasty Burgers',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
      imgSrc: sliderImg3,
      imgAlt: 'restaurant',
      iconSrc: sliderIcon1,
      iconAlt: 'restaurantIcon',
    },
  ],
};

export const footerData = {
  aboutWidget: {
    text: 'Marsh mallow muffin soufflé jelly-o tart cake Marshmallow macaroon jelly jubes dont tiramisu croissant cake.',
    phone: '(01) 800 433 633',
    email: 'info@Example.com',
  },
  usefulLink: [
    {
      text: 'about company',
      url: '#',
    },
    {
      text: 'reservation',
      url: '#',
    },
    {
      text: 'help center',
      url: '#',
    },
    {
      text: 'our blog',
      url: '#',
    },
    {
      text: 'careers',
      url: '#',
    },
    {
      text: 'contact us',
      url: '#',
    },
  ],
  latestBlog: [
    {
      imgSrc: blogImg,
      imgAlt: 'food',
      url: '#',
      title: 'Marsh mallow muffin',
      time: '14th February 2022',
    },
    {
      imgSrc: blogImg,
      imgAlt: 'food',
      url: '#',
      title: 'Marsh mallow muffin',
      time: '14th February 2022',
    },
    {
      imgSrc: blogImg,
      imgAlt: 'food',
      url: '#',
      title: 'Marsh mallow muffin',
      time: '14th February 2022',
    },
  ],
  openingHours: [
    {
      date: 'mon - fri',
      hours: '9:00 am - 23:00 pm',
    },
    {
      date: 'saturday',
      hours: '10:00 am - 22:00 pm',
    },
    {
      date: 'sunday',
      hours: '10:00 am - 21:00 pm',
    },
    {
      note: 'Note: Arctica Restaurant is closed on holidays.',
    },
  ],
};

export const restaurantDiscoverData = {
  mainContent: {
    title: 'Great New Dishes',
    slogan: 'Discover Our Restaurant',
    description1:
      'A cappuccino is an Italian coffee drink which is traditionally prepared with espresso, hot milk and steamed milk foam. Coffee makes up a very important part of the Italian gastronomic culture. Cream may be used instead of milk and is often topped with cinnamon.',
    description2:
      'It is typically smaller in volume than a caffe latte, with a thicker layer of micro foam. in this context referring to the color of the beverage when milk',
  },
  swiperImgs: [
    {
      imgSrc: restaurantImg1,
      imgAlt: 'restaurant',
    },
    {
      imgSrc: restaurantImg1,
      imgAlt: 'restaurant',
    },
    {
      imgSrc: restaurantImg1,
      imgAlt: 'restaurant',
    },
  ],
};

export const ourBestData = {
  title: 'Healthy Fresh And Hot Dishes.',
  slogan: 'Best offers from the house chef.',
  backgroundImg: backgroundImg1,
};

export const ourServicesData = {
  title: 'Our Services',
  slogan: 'We Create Delicious Memory',
  mainContent: [
    {
      imgSrc: serviceIcon1,
      imgAlt: 'Pizza',
      title: 'Pan Pizza',
      description:
        'Vivamus sed fermentum tellus. Donec quis elit sapien. Aliquam commodo tortor nisi, nec varius mi finibus at. ut ullamcorper volutpat lectusu',
      url: '#',
    },
    {
      imgSrc: serviceIcon2,
      imgAlt: 'Burger',
      title: 'Burger',
      description:
        'Vivamus sed fermentum tellus. Donec quis elit sapien. Aliquam commodo tortor nisi, nec varius mi finibus at. ut ullamcorper volutpat lectusu',
      url: '#',
    },
    {
      imgSrc: serviceIcon3,
      imgAlt: 'Fish',
      title: 'Fish',
      description:
        'Vivamus sed fermentum tellus. Donec quis elit sapien. Aliquam commodo tortor nisi, nec varius mi finibus at. ut ullamcorper volutpat lectusu',
      url: '#',
    },
  ],
};

export const ourDeliciousMenuData = {
  title: 'Our Delicious Menu',
  slogan: 'Best offers from the house chef',
  backgroundImg: backgroundImg2,
  slideImgs: [
    {
      imgSrc: chickenImg1,
      imgAlt: 'chicken',
    },
    {
      imgSrc: chickenImg1,
      imgAlt: 'chicken',
    },
    {
      imgSrc: chickenImg1,
      imgAlt: 'chicken',
    },
  ],
  mainContent: {
    title: 'Our Best Chicken Recipes',
    menuList: [
      {
        new: 'new',
        imgSrc: diningImg1,
        imgAlt: 'dining',
        name: 'Gosh Egg-White Omelet',
        url: '#',
        description: 'Black beans, Home 1, olive oil',
        price: '$35.40',
      },
      {
        imgSrc: diningImg2,
        imgAlt: 'dining',
        name: 'Powered Turkey Meatballs',
        url: '#',
        description: 'Black beans, Home 1, olive oil',
        price: '$35.40',
      },
      {
        imgSrc: diningImg3,
        imgAlt: 'dining',
        name: 'Creamy Feta Salad Dressing',
        url: '#',
        description: 'Black beans, Home 1, olive oil',
        price: '$35.40',
      },
      {
        imgSrc: diningImg4,
        imgAlt: 'dining',
        name: 'Roasted Red Pepper Hummus',
        url: '#',
        description: 'Black beans, Home 1, olive oil',
        price: '$35.40',
      },
    ],
  },
};

export const ourSpecialDishesData = {
  title: 'Our Special Dishes.',
  slogan: 'We Create Delicious Memory',
  openingHours: [
    {
      date: 'Monday — Friday',
      hours: '9:00 am - 23:00 pm',
    },
    {
      date: 'Saturday',
      hours: '10:00 am - 22:00 pm',
    },
    {
      date: 'Sunday',
      hours: '10:00 am - 21:00 pm',
    },
    { note: 'Note: Arctica Restaurant is closed on holidays.' },
    { phone: '0844.335.1211' },
  ],
  specialDishes: [
    {
      imgSrc: specialImg1,
      imgAlt: 'Special Dishes',
      price: '$50.35',
      url: '#',
      title: 'Honey Strawberry',
      description:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor nequeu tellus rhoncus ut eleifend nibh porttitor ut in nulla enim hasellus mirolestie magna non lorem ipsum dolor site amet.',
    },
    {
      imgSrc: specialImg2,
      imgAlt: 'Special Dishes',
      price: '$50.35',
      url: '#',
      title: 'Scrambled Eggs in Puff Pastry',
      description:
        'Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor nequeu tellus rhoncus ut eleifend nibh porttitor ut in nulla enim hasellus mirolestie magna non lorem ipsum dolor site amet.',
    },
  ],
};

export const carouselData = {
  imgList: [
    {
      imgSrc: carouselImg1,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
    {
      imgSrc: carouselImg2,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
    {
      imgSrc: carouselImg3,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
    {
      imgSrc: carouselImg1,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
    {
      imgSrc: carouselImg2,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
    {
      imgSrc: carouselImg3,
      imgAlt: 'delicious food',
      imgCaption: 'Masala Spiced Chickpeas',
    },
  ],
};

export const ourDeliciousData = {
  title: 'Our Delicious',
  slogan: 'Meet Our Passionate Chefs',
  chefList: [
    {
      name: 'Rick Grimes',
      position: 'Chef cook',
      imgSrc: chefImg1,
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      vimeo: '#',
    },
    {
      name: 'Rick Grimes',
      position: 'Chef cook',
      imgSrc: chefImg2,
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      vimeo: '#',
    },
    {
      name: 'Rick Grimes',
      position: 'Chef cook',
      imgSrc: chefImg3,
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
      vimeo: '#',
    },
  ],
};

export const testimonialData = {
  backgroundImg: backgroundImg3,
  mainContent: [
    {
      text: '“ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back & take a moment to browse through some of our recent completed work.”',
      name: 'Stevan Smith,',
    },
    {
      text: '“ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back & take a moment to browse through some of our recent completed work.”',
      name: 'Stevan Smith,',
    },
    {
      text: '“ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back & take a moment to browse through some of our recent completed work.”',
      name: 'Stevan Smith,',
    },
  ],
};

export const ourBlogData = {
  title: 'Our Blog',
  slogan: 'Latest New Updates',
  mainContent: [
    {
      imgSrc: blogImg1,
      imgAlt: 'restaurant blog',
      title: 'Ingredients For Cooking Pasta',
      url: '#',
      time: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      like: '11',
    },
    {
      imgSrc: blogImg2,
      imgAlt: 'restaurant blog',
      title: 'Ingredients For Cooking Pasta',
      url: '#',
      time: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      like: '11',
    },
    {
      imgSrc: blogImg3,
      imgAlt: 'restaurant blog',
      title: 'Ingredients For Cooking Pasta',
      url: '#',
      time: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      like: '11',
    },
  ],
};

export const ourDeliciousComboData = {
  title: 'Our Delicious Menu Items Combo',
  slogan: 'Fresh And Healthy Food Available',
  mainContent: [
    {
      status: 'new',
      imgSrc: dishImg1,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg2,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      status: 'new',
      imgSrc: dishImg3,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg4,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg5,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg6,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg7,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg8,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      status: 'new',
      imgSrc: dishImg9,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
  ],
};

export const pageTitleData = {
  title: 'Taste The Best Dishes.',
  slogan: 'Our Menu List',
  backgroundImg: backgroundImg4,
};

export const breakfastMenuData = {
  imgSrc: serviceIcon4,
  imgAlt: 'Breakfast Icon',
  title: 'Our Fresh And Hot Dishes',
  slogan: 'Special BreakFast Menu Items',
  mainContent: [
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg1,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg2,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg3,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg4,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg5,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg6,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg7,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg8,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg9,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg10,
      imgAlt: 'Breakfast',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
  ],
};

export const lunchTitleData = {
  title: 'With Meat, Fish or Vegetables',
  slogan: 'Special Lunch Menu Items',
  iconSrc: serviceIcon5,
  iconAlt: 'lunch',
  backgroundImg: backgroundImg5,
};

export const lunchMenuData = {
  mainContent: [
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg1,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg2,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg3,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg4,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg5,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg6,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg7,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg8,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg9,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg10,
      imgAlt: 'Lunch',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
  ],
};

export const dinnerTitleData = {
  title: 'Our Fresh And Healthy',
  slogan: 'Special Dinner Menu Items',
  iconSrc: serviceIcon6,
  iconAlt: 'dinner',
  backgroundImg: backgroundImg6,
};

export const dinnerMenuData = {
  mainContent: [
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg1,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg2,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg3,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg4,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg5,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg6,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg7,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg8,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg9,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
    {
      name: 'Gosh Egg-White Omelet',
      imgSrc: diningImg10,
      imgAlt: 'Dinner',
      url: '#',
      price: '$25.40',
      description: 'Menu Style 2, Shrimp',
      status: 'new',
    },
  ],
};
