import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

/* ---------------- TYPES ---------------- */

type IconName = keyof typeof Icons;

type TechItem = {
  name: string;
  icon: IconName;
};

/* ---------------- DATA ---------------- */

const Frontend: TechItem[] = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React", icon: "react" },
  { name: "React Native", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Redux", icon: "redux" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Material UI", icon: "material" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "SASS", icon: "sass" },
];

const Backend: TechItem[] = [
  { name: "Node.js", icon: "node" },
  { name: "Express.js", icon: "express" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "Prisma", icon: "prisma" },
  { name: "Socket.IO", icon: "socket" },
  { name: "Firebase", icon: "firebase" },
  { name: "Neon", icon: "neon" },
];

const speed = 20;

/* ---------------- COMPONENT ---------------- */

const Techstack = () => {
  const frontendRef = useRef<HTMLDivElement | null>(null);
  const backendRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setSpeed = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return;

      const width = ref.current.scrollWidth / 2;
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

      {/* Frontend */}
      <div>
        <h2 className="font-medium mb-2">Frontend</h2>

        <div className="relative overflow-hidden">
          <div
            ref={frontendRef}
            className="flex gap-2 w-max animate-marquee"
          >
            {[...Frontend, ...Frontend].map((tech, i) => {
              const Icon = Icons[tech.icon];

              return (
                <Badge
                  key={i}
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-1 shrink-0"
                >
                  {Icon && <Icon />}
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>

      {/* Backend */}
      <div>
        <h2 className="font-medium mb-2">Backend</h2>

        <div className="relative overflow-hidden">
          <div
            ref={backendRef}
            className="flex gap-2 w-max animate-marquee"
          >
            {[...Backend, ...Backend].map((tech, i) => {
              const Icon = Icons[tech.icon];

              return (
                <Badge
                  key={i}
                  variant="ghost"
                  className="flex items-center gap-1 px-3 py-1 shrink-0"
                >
                  {Icon && <Icon  />}
                  {tech.name}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Techstack;
