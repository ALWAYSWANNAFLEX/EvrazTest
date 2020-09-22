import React from "react";

function machines({machine}) {
  return (
    <div className="item">
      <p className="count">{machine.value}</p>
      <div className="data">
        <p className="name">{machine.name}</p>
        <p className="params">{machine.properties}</p>
      </div>
    </div>
  );
}

export default machines;
