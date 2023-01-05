import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import ScrollToTop from "./components/ScrollToTop";
import Subsribe from "./components/Subsribe";


function App() {



  return (
    <>
    <ScrollToTop />
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subsribe />
      <Footer />
    </>
  );
}

export default App;
