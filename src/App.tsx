import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DefaultImage from "../public/default.jpg";
import HoverImage from "../public/hover.jpg";
import "./App.css";
import { File, FileText, Mail, MapPin } from "lucide-react";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
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
      <div className="grid grid-cols-3 gap-2">
        <div className="grid col-span-2 row-span-1 space-y-2">
          <Info />
          <Techstack />
        </div>
        <Experience />
      </div>
      <div className="grid-cols-3 gap-2 grid">
                    <Projects />
                    <Certificates />

      </div>

    </div>
  );
}

export default App;
