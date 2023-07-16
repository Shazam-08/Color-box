import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [color, setColor] = useState("");

  function handleColor(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: `${color}`,
          width: "200px",
          height: "200px",
          margin: "0 auto",
        }}
      ></div>
      <Child newColor={color} handleColor={handleColor} />
    </div>
  );
}
