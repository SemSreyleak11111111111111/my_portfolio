import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />

      <main className="min-h-screen bg-slate-900">
      </main>
    </>
  );
}

export default App;