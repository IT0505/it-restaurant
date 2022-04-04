import styles from './ProductSection.module.scss';
import { flyingNinjaProductData } from '../../../utils/dataConfig';
import MainProduct from './components/MainProduct/MainProduct';
import RelatedProductItem from './components/RelatedProductItem/RelatedProductItem';
import SideBar from '../../SideBar/SideBar';

export default function ProductSection() {
  return (
    <div className={`${styles.productSection} section`}>
      <div className='container'>
        <div className={styles.productSectionInner}>
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
                  <RelatedProductItem
                    className={styles.relatedProductItem}
                    data={item}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
