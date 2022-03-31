import styles from './ProductSection.module.scss';
// import SideBar from './components/SideBar/SideBar';
import { shopSingleSideBarData } from '../../../utils/dataConfig';
import { flyingNinjaProductData } from '../../../utils/dataConfig';
import SideBarList from './components/SideBarList/SideBarList';
import MainProduct from './components/MainProduct/MainProduct';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from '../../Icons/Icons';
import StarRating from './components/StarRating/StarRating';

// import {
//   fadeIn,
//   fadeInRight,
//   fadeInLeft,
//   zoomIn,
//   fadeInOut,
// } from 'react-animations';
// import { StyleSheet, css } from 'aphrodite';
// const classes = StyleSheet.create({
//   fadeIn: {
//     animationName: fadeIn,
//     animationDuration: '1s',
//   },
//   fadeInRight: {
//     animationName: fadeInRight,
//     animationDuration: '1s',
//   },
//   fadeInLeft: {
//     animationName: fadeInLeft,
//     animationDuration: '1s',
//   },
//   zoomIn: {
//     animationName: zoomIn,
//     animationDuration: '1s',
//   },
//   fadeInOut: {
//     animationName: fadeIn,
//     animationDuration: '1s',
//   },
// });

export default function ProductSection() {
  return (
    <div className={`${styles.productSection} section`}>
      <div className='container'>
        <div className={styles.productSectionInner}>
          <div className={styles.sideBar}>
            <div className={`${styles.sideBarItem}`}>
              <div className={`${styles.searchBar}`}>
                <input
                  type='text'
                  className={styles.searchInput}
                  name='search'
                  placeholder='Search'
                />
                <button type='submit' className={styles.searchBtn}>
                  <i className='fa fa-search'></i>
                </button>
              </div>
            </div>
            {shopSingleSideBarData.mainContent.map((item, index) => (
              <div className={`${styles.sideBarItem}`} key={index}>
                <h3 className={styles.title}>{item.title}</h3>
                <SideBarList data={item.contents} />
              </div>
            ))}
          </div>

          <div className={styles.productWrap}>
            <MainProduct
              data={flyingNinjaProductData}
              className={styles.mainProduct}
            />

            <div className={styles.relatedProduct}>
              <h3 className={styles.title}>Related Product</h3>
              <div className={styles.relatedProductWrap}>
                {flyingNinjaProductData.relatedProduct.map((item, index) => (
                  <div className={styles.content} key={index}>
                    <figure className={styles.image}>
                      <Image
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        layout='responsive'
                      />
                      <Link href='#'>
                        <a className={styles.addCart}>
                          <ShoppingBag
                            size='20px'
                            fill='#fff'
                            stroke='#fff'
                            strokeWidth='1'
                            className={styles.icon}
                          />
                          Add to Bag
                        </a>
                      </Link>
                    </figure>
                    <Link href='#'>
                      <a className={styles.inlineLink}>
                        {item.name}
                        <span className={styles.inlinePrice}>
                          <p className={styles.oldPrice}>{item.oldPrice}</p>
                          <p className={styles.price}>{item.price}</p>
                        </span>
                      </a>
                    </Link>
                    <p className={styles.description}>
                      {item.description.slice(0, 28)}
                      {item.description.length >= 28 && '...'}
                    </p>
                    <StarRating rating={item.starRating} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className={styles.iconWrap}>
            <i
              className={`fa-brands fa-facebook-f ${styles.icon1} ${css(
                classes.fadeInOut
              )}`}
            ></i>
            <i
              className={`fa-brands fa-facebook-f ${styles.icon2}  ${css(
                classes.fadeIn
              )} ${css(classes.fadeOut)}`}
            ></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}
