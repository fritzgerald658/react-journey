import Nav from "./furniro_components/Nav.jsx";
import Hero from "./furniro_components/Hero.jsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import SectionTwo from "./furniro_components/SectionTwo.jsx";
import OurProducts from "./furniro_components/OurProducts.jsx";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionTwo />
      <OurProducts />
    </>
  );
}

export default App;
