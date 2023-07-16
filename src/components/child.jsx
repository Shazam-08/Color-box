import React from "react";

export default function Child({ handleColor, newColor }) {
  return (
    <div>
      <input type="text" id="input" value={newColor} onChange={handleColor} />
    </div>
  );
}
