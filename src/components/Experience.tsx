import React from "react";
import { Card } from "./ui/card";

import {
  InteractiveStepper,
  InteractiveStepperContent,
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
            <div>
              <InteractiveStepperTitle>
                Front End Developer
              </InteractiveStepperTitle>
              <InteractiveStepperDescription>
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
            <div>
              <InteractiveStepperTitle>
                Fullstack Web/Mobile Developer
              </InteractiveStepperTitle>
              <InteractiveStepperDescription>
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
            <div>
              <InteractiveStepperTitle>
                Front End Developer
              </InteractiveStepperTitle>
              <InteractiveStepperDescription>
                <p className="text-xs">Clark Outsourcing</p>
                <p className="text-xs">Jan - April 2024</p>              </InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperContent step={1}>
          <Card
            title={"Order Confirmed"}
            description={"Order #12345 placed on Jan 15, 2024"}
          />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={2}>
          <Card
            title={"Processing Your Order"}
            description={"Estimated processing time: 1-2 business days"}
          />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={3}>
          <Card title={"Order Shipped"} description={"Tracking: #ABC123XYZ"} />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={4}>
          <Card
            title={"Order Delivered"}
            description={"Delivered to your location"}
          />
        </InteractiveStepperContent>
      </InteractiveStepper>
    </Card>
  );
};

export default Experience;
