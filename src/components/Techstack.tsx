import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";
import { ChevronRight } from "lucide-react";

const Frontend = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SASS", icon: "sass" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Material UI", icon: "material" },
  { name: "React", icon: "react" },
  { name: "React Native", icon: "react" },
  { name: "Redux", icon: "redux" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
];

const Backend = [
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "Prisma", icon: "prisma" },
  { name: "Neon", icon: "neon" },
  { name: "Socket.IO", icon: "socket" },
];


const Techstack = () => {
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
          <div className="flex gap-2 w-max animate-marquee">
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
          <div className="flex gap-2 w-max animate-marquee">
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
