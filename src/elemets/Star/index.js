import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, height, width, marginRight: spacing }}
      ></div>
    );
  }
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }
  const starPlacholder = [];
  for (let index = 0; index < 5 - decimals; index++) {
    starPlacholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{ left: index * width, height, width, marginRight: spacing }}
      ></div>
    );
  }

  return (
    <>
      <div className={["stars", className].join(" ")} style={{ height }}>
        {starPlacholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
