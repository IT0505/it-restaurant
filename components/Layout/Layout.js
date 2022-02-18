import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export default function Layout(props) {
  return (
    <>
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
}
