import { Card } from "./ui/card";

import {
  InteractiveStepper,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
} from "@/components/ui/stepper";
const Experience = () => {
  return (
    <Card className="p-4 gap-2 text-start">
      <h1 className="font-bold">Experience</h1>
      <InteractiveStepper orientation="vertical">
        <InteractiveStepperItem>
          <InteractiveStepperTrigger>
            <InteractiveStepperIndicator type="square" />
            <div className="w-full">
              <InteractiveStepperTitle>
                Front End Developer
              </InteractiveStepperTitle>
              <InteractiveStepperDescription className="flex flex-row sm:flex-col justify-between">
                <p className="text-xs"> RDF Feed, Livestock & Foods Inc.</p>
                <p className="text-xs">Aug 2024 - Current</p>
              </InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disabled>
            <InteractiveStepperIndicator type="square" />
            <div className="w-full">
              <InteractiveStepperTitle>
                Fullstack Web/Mobile Developer
              </InteractiveStepperTitle>
              <InteractiveStepperDescription className="flex flex-row sm:flex-col justify-between">
                <p className="text-xs">Freelancing</p>
                <p className="text-xs">May - July 2024</p>
              </InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger disabled>
            <InteractiveStepperIndicator type="square" />
            <div className="w-full">
              <InteractiveStepperTitle>
                Fullstack Developer Intern
              </InteractiveStepperTitle>
              <InteractiveStepperDescription className="flex flex-row sm:flex-col justify-between">
                <p className="text-xs">Clark Outsourcing</p>
                <p className="text-xs">Jan - April 2024</p>{" "}
              </InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>
        <InteractiveStepperItem>
          <InteractiveStepperTrigger disabled>
            <InteractiveStepperIndicator type="square" />
            <div className="w-full">
              <InteractiveStepperTitle>
                BS Computer Science
              </InteractiveStepperTitle>
              <InteractiveStepperDescription className="flex flex-row sm:flex-col justify-between">
                <p className="text-xs">Holy Angel University</p>
                <p className="text-xs">2020 - 2024</p>{" "}
              </InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>
      </InteractiveStepper>
    </Card>
  );
};

export default Experience;
