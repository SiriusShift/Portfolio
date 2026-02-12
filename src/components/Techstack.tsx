import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Frontend = [
  // Core Fundamentals
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },

  // Main Frameworks
  { name: "React", icon: "react" },
  { name: "React Native", icon: "react" },

  // Strongly Typed JS
  { name: "TypeScript", icon: "typescript" },

  // State Management
  { name: "Redux", icon: "redux" },

  // Styling Systems
  { name: "Tailwind", icon: "tailwind" },
  { name: "Material UI", icon: "material" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "SASS", icon: "sass" },
];
const Backend = [
  // Runtime & Framework
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },

  // Databases
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },

  // ORM
  { name: "Prisma", icon: "prisma" },

  // Realtime & Services
  { name: "Socket.IO", icon: "socket" },
  { name: "Firebase", icon: "firebase" },

  // Cloud Database
  { name: "Neon", icon: "neon" },
];


const speed = 20


const Techstack = () => {
    const frontendRef = useRef(null);
  const backendRef = useRef(null);

    useEffect(() => {
    const setSpeed = (ref) => {
      if (!ref.current) return;

      const width = ref.current.scrollWidth / 2; // because duplicated
      const duration = width / speed;

      ref.current.style.animationDuration = `${duration}s`;
    };

    setSpeed(frontendRef);
    setSpeed(backendRef);
  }, []);
  return (
    <Card className="p-4 gap-2 row-span-1 text-start overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Tech Stack</h1>
        <h1 className="text-xs flex cursor-pointer hover:underline gap-1 items-center">
          View All <ChevronRight size={15} />
        </h1>
      </div>
      <div>
        <h2 className="font-medium mb-2">Frontend</h2>

        {/* Viewport */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <div className="flex gap-2 w-max animate-marquee"             ref={frontendRef}>
            {[...Frontend, ...Frontend].map((tech, i) => {
              const Icon = Icons[tech.icon];

              return (
                <Badge
                  key={i}
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-1 shrink-0"
                >
                  {Icon && <Icon className="w-5 h-5 fill-foreground" />}
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-medium mb-2">Backend</h2>

        {/* Viewport */}
        <div className="relative overflow-hidden">
          {/* Track */}
          <div className="flex gap-2 w-max animate-marquee" ref={backendRef}>
            {[...Backend, ...Backend].map((tech, i) => {
              const Icon = Icons[tech.icon];

              return (
                <Badge
                  key={i}
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-1 shrink-0"
                >
                  {Icon && <Icon className="w-5 h-5 fill-foreground" />}
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>{" "}
    </Card>
  );
};

export default Techstack;
