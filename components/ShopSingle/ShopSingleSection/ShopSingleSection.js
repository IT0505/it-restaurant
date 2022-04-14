import styles from './ShopSingleSection.module.scss';
import { flyingNinjaProductData } from '../../../utils/dataConfig';
import MainProduct from './components/MainProduct/MainProduct';
import SideBar from '../../SideBar/SideBar';
import FoodCard from '../../FoodCard/FoodCard';
export default function ShopSingleSection() {
  return (
    <div className={`${styles.shopSingleSection} section`}>
      <div className='container'>
        <div className={styles.shopSingleSectionInner}>
          <SideBar className={styles.sideBar} />

          <div className={styles.productWrap}>
            <MainProduct
              data={flyingNinjaProductData}
              className={styles.mainProduct}
            />

            <div className={styles.relatedProduct}>
              <h3 className={styles.title}>Related Product</h3>
              <div className={styles.relatedProductWrap}>
                {flyingNinjaProductData.relatedProduct.map((item, index) => (
                  <FoodCard data={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
