import { I18nProvider } from './i18n';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './styles/global.css';

function App() {
  return (
    <I18nProvider>
      <Header />
      <Home />
      <Footer />
    </I18nProvider>
  );
}

export default App;