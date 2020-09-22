import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";

function sidebar(props) {
  return (
    <div className="sidebar">
      {props.sidebar.map((sidebar) => {
        return (
          <ul className="depth1">
            <li>
              <FontAwesomeIcon icon={faChartBar} /> {sidebar.depth1}
              <p>{sidebar.subscription}</p>
              <p></p>
            </li>
            <ul className="depth2">
            {sidebar.depth2.map((depth2) => {
                if (depth2) {
                  return (
                    <li>
                      <FontAwesomeIcon icon={faChartBar} /> {depth2.name}
                      <p>{depth2.subscription}</p>
                    </li>
                  );
                } else {
                  return;
                }
              })}
            </ul>
          </ul>
        );
      })}
    </div>
  );
}

export default sidebar;
