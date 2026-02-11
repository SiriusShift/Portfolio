import React from "react";
import { Card } from "./ui/card";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <Card className="text-start p-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Recent Projects</h1>
        <h1 className="text-xs flex cursor-pointer hover:underline gap-1 items-center">
          View All <ChevronRight size={15} />
        </h1>
      </div>
    </Card>
  );
};

export default Projects;
