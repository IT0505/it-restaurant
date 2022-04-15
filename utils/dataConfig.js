import logoImg from '../assets/images/logo.png';
import logoImg1 from '../assets/images/logo-2.png';
import logoImg2 from '../assets/images/footer-logo.png';
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
import poster2 from '../assets/images/poster_2_up.jpg';
import poster3 from '../assets/images/poster_3_up-300x300.jpg';
import poster4 from '../assets/images/poster_4_up-300x300.jpg';
import poster5 from '../assets/images/poster_5_up-300x300.jpg';

import reviewerAvt1 from '../assets/images/f0cde930b42c79145194679d5b6e3b1d.png';
import reviewerAvt2 from '../assets/images/3472757f6a3732d6470f98d7d7e9cece.png';
import reviewerAvt3 from '../assets/images/7a6df00789e50714fcde1b759befcc84.jpeg';
import reviewerAvt4 from '../assets/images/8026a390d28369f7a2befcaeb9557359.jpeg';

import news1 from '../assets/images/news-10.jpg';
import news2 from '../assets/images/news-7.jpg';
import news3 from '../assets/images/news-4.jpg';

export const headerData = {
  socialIcons: [
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

  headerInfo: {
    reservationPhone: '+011 29 345 678',
    openingHours: '9:00am - 10:00pm',
  },

  navigation: {
    logoSrc: logoImg,
    logoAlt: 'restaurant',
    logoSrc1: logoImg1,
    logoAlt1: 'restaurant',
    navigationList: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Menu',
        submenu: [
          {
            title: 'Menu Special',
            url: '/menuspecial',
            id: 'menu1',
          },
          {
            title: 'Menu',
            id: 'menu2',
            url: '/menu',
          },
        ],
      },
      {
        title: 'Blog',
        submenu: [
          {
            title: 'Blog',
            url: '/blog',
            id: 'blog1',
          },
          {
            title: 'Blog Single',
            url: '/blogsingle',
            id: 'blog2',
          },
        ],
      },
      {
        title: 'Contact',
        url: '/contact',
      },
    ],
  },
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
    logoSrc: logoImg2,
    logoAlt: 'restaurant',
    description:
      'Marsh mallow muffin soufflé jelly-o tart cake Marshmallow macaroon jelly jubes dont tiramisu croissant cake.',
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
      date: '14th February 2022',
    },
    {
      imgSrc: blogImg,
      imgAlt: 'food',
      url: '#',
      title: 'Marsh mallow muffin',
      date: '14th February 2022',
    },
    {
      imgSrc: blogImg,
      imgAlt: 'food',
      url: '#',
      title: 'Marsh mallow muffin',
      date: '14th February 2022',
    },
  ],
  openingHours: [
    {
      date: 'mon - fri',
      time: '9:00 am - 23:00 pm',
    },
    {
      date: 'saturday',
      time: '10:00 am - 22:00 pm',
    },
    {
      date: 'sunday',
      time: '10:00 am - 21:00 pm',
    },
    {
      note: 'Note: Arctica Restaurant is closed on holidays.',
    },
  ],
  copyright: 'Copyright © 2020. All Rights Reserved',
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
  backgroundImage: backgroundImg1,
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
  backgroundImage: backgroundImg2,
  swiperImgs: [
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
    subTitle: 'Our Best Chicken Recipes',
    menuList: [
      {
        status: 'new',
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
      time: '9:00 am - 23:00 pm',
    },
    {
      date: 'Saturday',
      time: '10:00 am - 22:00 pm',
    },
    {
      date: 'Sunday',
      time: '10:00 am - 21:00 pm',
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
      socialIcons: [
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
        {
          icon: 'fa-brands fa-vimeo-square',
          url: '#',
        },
      ],
    },
    {
      name: 'Rick Grimes',
      position: 'Chef cook',
      imgSrc: chefImg2,
      socialIcons: [
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
    },
    {
      name: 'Rick Grimes',
      position: 'Chef cook',
      imgSrc: chefImg3,
      socialIcons: [
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
        {
          icon: 'fa-brands fa-vimeo-square',
          url: '#',
        },
      ],
    },
  ],
};

export const testimonialData = {
  backgroundImage: backgroundImg3,
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
      date: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      numLikes: '11',
    },
    {
      imgSrc: blogImg2,
      imgAlt: 'restaurant blog',
      title: 'Ingredients For Cooking Pasta',
      url: '#',
      date: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      numLikes: '11',
    },
    {
      imgSrc: blogImg3,
      imgAlt: 'restaurant blog',
      title: 'Ingredients For Cooking Pasta',
      url: '#',
      date: '06 Jan 2017',
      author: 'admin',
      description:
        'Curabitur quas nets lacusets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligul aliquam qui sequi nets lacusets nulat',
      numLikes: '11',
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
      oldPrice: '$150',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
      starRating: '5',
    },
    {
      imgSrc: dishImg2,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
      starRating: '4.5',
    },
    {
      status: 'new',
      imgSrc: dishImg3,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      oldPrice: '$150',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
    },
    {
      imgSrc: dishImg4,
      imgAlt: 'Delicious Combo',
      name: 'Trio Sausages',
      oldPrice: '$150',
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
      starRating: '4.7',
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
      oldPrice: '$150',
      price: '$100',
      url: '#',
      description: 'Home 2, Wine',
      starRating: '3.6',
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

export const menuPageTitleData = {
  title: 'Taste The Best Dishes.',
  slogan: 'Our Menu List',
  backgroundImage: backgroundImg4,
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
  imgSrc: serviceIcon5,
  imgAlt: 'lunch',
  backgroundImage: backgroundImg5,
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
  imgSrc: serviceIcon6,
  imgAlt: 'dinner',
  backgroundImage: backgroundImg6,
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

export const sideBarData = {
  categories: [
    {
      text: 'Home 1',
      url: '#',
    },
    {
      text: 'Latest news',
      url: '#',
    },
  ],
  topRated: [
    {
      text: 'Hearty Grain Breakfast',
      url: '#',
      imgSrc: diningImg1,
      imgAlt: 'breakfast',
    },
    {
      text: 'Hearty Grain Breakfast',
      url: '#',
      imgSrc: diningImg4,
      imgAlt: 'breakfast',
    },
    {
      text: 'Hearty Grain Breakfast',
      url: '#',
      imgSrc: diningImg3,
      imgAlt: 'breakfast',
    },
  ],
  archives: [
    {
      text: 'January 2017',
      url: '#',
    },
  ],
};

export const flyingNinjaProductData = {
  backgroundImage: backgroundImg4,
  title: 'Flying Ninja',
  starRating: '4.5',
  totalReviews: '4',
  description:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',

  shortDescription:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
  price: '£12.00',
  oldPrice: '£15.00',
  imgSrc: poster2,
  imgAlt: 'Flying Ninja',

  reviews: [
    {
      imgSrc: reviewerAvt1,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 4,
      date: 'June 7, 2013',
      comment:
        'Really happy with this print. The colors are great, and the paper quality is good too.',
    },
    {
      imgSrc: reviewerAvt2,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 5,
      date: 'June 7, 2013',
      comment:
        'You only get the picture, not the person holding it, something they don’t mention in the description, now I’ve got to find my own person',
    },
    {
      imgSrc: reviewerAvt3,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 2,
      date: 'June 7, 2013',
      comment:
        'Really happy with this print. The colors are great, and the paper quality is good too.',
    },
    {
      imgSrc: reviewerAvt4,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 4,
      date: 'June 7, 2013',
      comment:
        'You only get the picture, not the person holding it, something they don’t mention in the description, now I’ve got to find my own person',
    },
  ],

  relatedProduct: [
    {
      imgSrc: poster3,
      imgAlt: 'ninja',
      name: 'Premium Quality',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
      price: '£15',
      oldPrice: '£12',
      starRating: '4',
    },
    {
      imgSrc: poster4,
      imgAlt: 'ninja',
      name: 'Premium Quality',
      description: 'Pellentesque habitant morbi ',
      price: '£15',
    },
    {
      imgSrc: poster5,
      imgAlt: 'ninja',
      name: 'Premium Quality',
      description: 'Pellentesque',
      price: '£15',
      oldPrice: '£12',
      starRating: '2.5',
    },
  ],
};

export const blogPageTitleData = {
  title: 'Tips For New Dishes',
  slogan: 'Latest News',
  backgroundImage: backgroundImg4,
};

export const blogSectionData = {
  mainContent: [
    {
      imgSrc: news1,
      imgAlt: 'Delicious food blog',
      title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
      url: '#',
      date: '20 Jan 2017',
      author: 'Admin',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
      numComments: '3',
    },
    {
      imgSrc: news2,
      imgAlt: 'Delicious food blog',
      title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
      url: '#',
      date: '20 Jan 2017',
      author: 'Admin',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
      numComments: '3',
    },
    {
      imgSrc: news3,
      imgAlt: 'Delicious food blog',
      title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
      url: '#',
      date: '20 Jan 2017',
      author: 'Admin',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
      numComments: '3',
    },
    {
      imgSrc: news1,
      imgAlt: 'Delicious food blog',
      title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
      url: '#',
      date: '20 Jan 2017',
      author: 'Admin',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
      numComments: '3',
    },
    {
      imgSrc: news1,
      imgAlt: 'Delicious food blog',
      title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
      url: '#',
      date: '20 Jan 2017',
      author: 'Admin',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
      numComments: '3',
    },
  ],
};

export const blogSinglePageTitleData = {
  title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
  backgroundImage: backgroundImg4,
};

export const blogSingleSectionData = {
  title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
  imgSrc: news1,
  imgAlt: 'Delicious food blog',
  title: 'Ingredients For Cooking Pasta With Creamy Mushroom',
  url: '#',
  date: '20 Jan 2017',
  author: 'Admin',
  description:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magniol res eos qui rate voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolore sit amet con sectetur adipisci vel sed quia suthagara lukuthea satham non numquam eius modi tempra. Incidunt ut labore et dolore magnam aliquam',
  numComments: '3',
  comments: [
    {
      imgSrc: reviewerAvt1,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 4,
      date: 'June 7, 2013',
      comment:
        'Really happy with this print. The colors are great, and the paper quality is good too.',
    },
    {
      imgSrc: reviewerAvt2,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 5,
      date: 'June 7, 2013',
      comment:
        'You only get the picture, not the person holding it, something they don’t mention in the description, now I’ve got to find my own person',
    },
    {
      imgSrc: reviewerAvt3,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 2,
      date: 'June 7, 2013',
      comment:
        'Really happy with this print. The colors are great, and the paper quality is good too.',
    },
    {
      imgSrc: reviewerAvt4,
      imgAlt: 'avatar',
      name: 'Cobus Bester',
      starRating: 4,
      date: 'June 7, 2013',
      comment:
        'You only get the picture, not the person holding it, something they don’t mention in the description, now I’ve got to find my own person',
    },
  ],
};
