//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

import pick from "lodash/pick";
import React from "react";
import AnimatedNumber from "react-animated-number";
import { pure } from "recompose";
import styled, { css, keyframes } from "styled-components";
import "../App.css";

const OutlineCorrection = "2px";

export const PieSpinner = pure(props => (
  <Layout>
    <CircleBackground {...pick(props, "backgroundColor", "height", "width")} />
    <PieWrapper {...pick(props, "height", "width")}>
      <Spinner
        {...pick(props, "backgroundColor", "border", "duration", "isInfinite")}
      />
      <RightFill
        {...pick(props, "backgroundColor", "border", "duration", "isInfinite")}
      />
      <BackgroundWithLeftMask
        {...pick(
          props,
          "backgroundColor",
          "duration",
          "isInfinite",
          "height",
          "width"
        )}
      />
    </PieWrapper>
    <StyledAnimatedNumber
      component="text"
      initialValue={0}
      value={100}
      formatValue={n => percentage(n)}
      stepPrecision={0}
      {...pick(props, "color", "duration", "fontSize")}
    />
  </Layout>
));
const Layout = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const FullGridMixin = css`
  grid-row: 1 / last-line;
  grid-column: 1 / last-line;
`;

const AnimationInfiniteMixin = css`
  animation-iteration-count: ${props => (props.isInfinite ? "infinite" : 1)};
  animation-fill-mode: ${props => (props.isInfinite ? "none" : "forwards")};
`;

const CircleBackground = styled.div`
  background: ${props => props.backgroundColor};
  border-radius: 50%;
  width: calc(${props => props.width} - ${OutlineCorrection} - 1px);
  height: calc(${props => props.height} - ${OutlineCorrection} - 1px);
  ${FullGridMixin};
`;

const Pie = styled.div`
  width: 50%;
  height: 100%;
  transform-origin: 100% 50%;
  background: ${props => props.backgroundColor};
  border: ${props => props.border};
  ${FullGridMixin};
`;

const RotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const OpacityAnimation = keyframes`
    0% {
        opacity: 1;
    }
    50%,
    100% {
        opacity: 0;
    }
`;

const Spinner = styled(Pie)`
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  z-index: 3;
  border-right: none;
  animation: ${RotateAnimation} ${props => props.duration}ms linear;
  ${AnimationInfiniteMixin};
`;

const RightFill = styled(Pie)`
  border-radius: 0 100% 100% 0 / 0 50% 50% 0;
  justify-self: end;
  opacity: 0;
  z-index: 2;
  animation: ${OpacityAnimation} ${props => props.duration}ms steps(1, end)
    reverse;
  border-left: none;
  ${AnimationInfiniteMixin};
`;

const BackgroundWithLeftMask = styled.div`
  width: calc(${props => props.width} - ${OutlineCorrection});
  height: calc(${props => props.height} - ${OutlineCorrection});
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  background: ${props => props.backgroundColor};
  align-self: center;
  justify-self: center;
  border-radius: 50%;
  opacity: 1;
  z-index: 4;
  animation: ${OpacityAnimation} ${props => props.duration}ms steps(1, end);
  ${FullGridMixin};
  ${AnimationInfiniteMixin};
`;

const PieWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: ${props => props.width};
  height: ${props => props.height};
  ${FullGridMixin};
`;

const StyledAnimatedNumber = styled(AnimatedNumber)`
  font-size: ${props => props.fontSize};
  font-weight: 700;
  z-index: 5;
  color: ${props => props.color};
  ${FullGridMixin};
`;

const percentage = n => {
  return `${n}%`;
};
