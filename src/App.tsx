import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="lg:w-3xl space-y-2">
      <Header />
      <div className="grid sm:grid-cols-3 gap-2">
        <div className="grid col-span-1 sm:col-span-2 row-span-1 space-y-2">
          <Info />
          <Techstack />
        </div>
        <Experience />
      </div>
      <div className="sm:grid-cols-3 gap-2 grid">
        <Projects />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
