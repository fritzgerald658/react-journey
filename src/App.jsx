import Nav from "./furniro_components/Nav.jsx";
import Hero from "./furniro_components/Hero.jsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import SectionTwo from "./furniro_components/SectionTwo.jsx";
import OurProducts from "./furniro_components/OurProducts.jsx";
import SectionFive from "./furniro_components/SectionFive.jsx";
import SectionSix from "./furniro_components/SectionSix.jsx";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionTwo />
      <OurProducts />
      <SectionSix />
    </>
  );
}

export default App;
