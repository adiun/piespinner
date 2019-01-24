import React from "react";
import styled from 'styled-components';
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

storiesOf('PieSpinner', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        const duration = number('Duration', 5000);
        const bgColor = color('Background Color', '#08c');
        const borderColor = color('Border Color', '#ccc');
        const borderWidth = text('Border Width', '20px');
        const fgColor = color('Foreground Color', 'white');
        const fontSize = text('Font Size', '1em');
        const height = text('Height', '500px');
        const isInfinite = boolean('Is Infinite', true);
        const width = text('Width', '500px');
        return (
            <Layout>
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
            </Layout>
        );
    });

const Layout = styled.div`
    font-family: 'Segoe UI', sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    justify-items: center;
    align-items: center;
`;