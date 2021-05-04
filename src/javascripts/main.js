import 'bootstrap';
import '../styles/main.scss';
import domBuilder from './components/domBuilder';
import navBar from './components/navBar';
import footer from './components/footer';
import navigationEvents from './events/navigationEvents';

const init = () => {
  domBuilder();
  navBar();
  footer();
  navigationEvents();
};

init();
