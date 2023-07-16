import React, { useState } from "react";

export default function parent() {
  const [color, setColor] = useState("");

  function handleColor(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <div style={{ backgroundColor: `${color}` }}></div>
      <child newColor={color} handleColor={handleColor} />
    </div>
  );
}
