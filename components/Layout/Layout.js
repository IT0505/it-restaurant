import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import ZaloWidget from '../ZaloWidget/ZaloWidget';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <ScrollUpButton />
      <ZaloWidget />
      <Footer />
    </>
  );
}
