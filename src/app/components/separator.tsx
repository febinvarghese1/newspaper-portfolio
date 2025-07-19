import React from "react";

const Separator = ({
  height = 1,
  width = 100,
  color = "black",
  verticalSpacing = 0,
  horizontalSpacing = 0
}: {
  height?: number;
  width?: number;
  color?: string;
  verticalSpacing?: number;
  horizontalSpacing?: number;
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        height: `${height}px`,
        backgroundColor: color,
        margin: `${verticalSpacing}px ${horizontalSpacing}px`
      }}
    ></div>
  );
};

export default Separator;
