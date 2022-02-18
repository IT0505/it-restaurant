import styles from './Submenu.module.scss';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const FadeInUpDiv = styled.div`
  animation: 0.5s ${fadeInUpAnimation};
`;

export default function Submenu(props) {
  const submenu = props.submenu;
  const classImplement = props.classImplement;

  return (
    <>
      <FadeInUpDiv className={`${styles.submenu} ${classImplement}`}>
        {submenu.map((data, index) =>
          data.url ? (
            <a className={styles.menuItem} href={data.url} key={index}>
              {data.title}
            </a>
          ) : (
            <span className={styles.menuItem} key={index}>
              {data.title}
              <i
                className='fa-solid fa-angle-right'
                style={{ float: 'right', lineHeight: '24px' }}
              ></i>
              <Submenu submenu={data.submenu} classImplement={styles.submenu} />
            </span>
          )
        )}
      </FadeInUpDiv>
    </>
  );
}
