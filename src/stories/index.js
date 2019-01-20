import React from "react";

import { storiesOf } from "@storybook/react";
import { PieSpinner } from "../components/piespinner";
import {
  boolean,
  color,
  number,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import "@storybook/addon-knobs/register";

storiesOf("PieSpinner", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const duration = number("Duration", 5000);
    const bgColor = color("Background Color", "#08c");
    const borderColor = color("Border Color", "#ccc");
    const borderWidth = text("Border Width", "20px");
    const fgColor = color("Foreground Color", "white");
    const fontSize = text("Font Size", "1em");
    const height = text("Height", "100px");
    const isInfinite = boolean("Is Infinite", true);
    const width = text("Width", "100px");
    return (
      <div>
        <PieSpinner
          backgroundColor={bgColor}
          border={`${borderWidth} solid ${borderColor}`}
          color={fgColor}
          duration={duration}
          fontSize={fontSize}
          height={height}
          width={width}
          isInfinite={isInfinite}
        />
      </div>
    );
  });
