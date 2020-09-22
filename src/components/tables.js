import React from "react";
import { Line } from "react-chartjs-2";

function tables({ table }) {
  return (
    <>
      {table.line.map((line) => {
        return (
          <div className={"item" + " " + line.state}>
            <p>{line.value}</p>
          </div>
        );
      })}
    </>
  );
}

export default tables;
