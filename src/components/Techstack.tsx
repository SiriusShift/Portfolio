import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";

const Stack = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SASS", icon: "sass" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind", icon:"tailwind" },
  { name: "Shadcn UI", icon: "shadcn" },
  { name: "React", icon: "react" },
  { name: "Redux", icon: "redux" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
];

const Techstack = () => {
  return (
    <Card className="p-4 gap-2 text-start">
      <h1 className="font-bold text-lg">Tech Stack</h1>

      <div className="space-y-2">
        <h2 className="font-medium">Frontend</h2>

        <div className="flex gap-2 flex-wrap">
          {Stack.map((tech) => {
            const Icon = tech.icon
              ? Icons[tech.icon]
              : null;

            return (
              <Badge
                key={tech.name}
                variant={"ghost"}
                className="flex items-center gap-1 px-2 py-1"
              >
                {Icon && <Icon className="w-5 h-5 fill-foreground"  />}
                {tech.name}
              </Badge>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Techstack;
