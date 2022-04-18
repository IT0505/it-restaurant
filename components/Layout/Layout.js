import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import styles from './Layout.module.scss';
export default function Layout({ children }) {
  return (
    <div className={styles.pageWrap}>
      <div className={styles.topPageWrap}>
        <Header />
        {children}
      </div>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
