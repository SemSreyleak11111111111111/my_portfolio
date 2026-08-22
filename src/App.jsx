import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectRow from "./components/ProjectRow";
import Contact from "./components/Contact";
import posterDesign from "./data/posterDesign";
import logoDesign from "./data/logoDesign";
import motionGraphic from "./data/motionGraphic";
import threeDDesign from "./data/threeDDesign";
import Footer from "./components/Footer";
import figma from "./data/figma";
import stickerDesign from "./data/stickerDesign";
import brochureFlyer from "./data/brochureFlyer";
function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Skills />

      <ProjectRow
        id="poster"
        title="Poster Design"
        data={posterDesign}
      />
      <ProjectRow
        id="motion"
        title="Motion Graphic"
        data={motionGraphic}
      />
      <ProjectRow
        id="logo"
        title="Logo Design"
        data={logoDesign}
      />
      <ProjectRow
        id="figma"
        title="UX/UI Design"
        data={figma}
      />
      <ProjectRow
        id="sticker"
        title="Sticker Design"
        data={stickerDesign}
      />
      <ProjectRow
        id="brochure-flyer"
        title="Brochure & Flyer"
        data={brochureFlyer}
      />
      <Contact />

      <Footer />
    </>
  );
}

export default App;