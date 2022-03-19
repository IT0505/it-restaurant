import styles from './BreakfastMenu.module.scss';
import MainTitle from '../../MainTitle/MainTitle';
import { breakfastMenuData } from '../../../utils/dataConfig';
import MenuList from '../../MenuList/MenuList';

import Image from 'next/image';

export default function BreakfastMenu() {
  const mainContent = breakfastMenuData.mainContent;

  return (
    <div className={`${styles.breakfastMenu} section`}>
      <div className='container'>
        <div className={styles.breakfastMenuInner}>
          <div className={styles.titleWrap}>
            <figure className={styles.icon}>
              <Image
                src={breakfastMenuData.imgSrc}
                alt={breakfastMenuData.imgAlt}
              />
            </figure>
            <MainTitle
              slogan={breakfastMenuData.slogan}
              title={breakfastMenuData.title}
            ></MainTitle>
          </div>
          <div className={styles.mainContent}>
            <MenuList data={mainContent}></MenuList>
          </div>
        </div>
      </div>
    </div>
  );
}
