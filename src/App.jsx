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

      {/* <ProjectRow
        id="3d"
        title="3D Design"
        data={threeDDesign}
      /> */}

    

      <Contact />

      <Footer />
    </>
  );
}

export default App;