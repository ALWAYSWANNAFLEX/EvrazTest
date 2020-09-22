import React from "react";

function stat({ stat }) {
  return (
    <div className={stat.state + ' ' + "stat_amount"}>
      <div className="flexbox">
        <div className="stat_amount__production">
          <p>{stat.name}</p>
          <p className="count">{stat.count}</p>
        </div>
        <div className="stat_amount__plan">
          <p className="result">{stat.result}</p>
          <p className="planned">план {stat.plan}</p>
        </div>
      </div>
      <div className="line">
        <div className="progress"></div>
      </div>
      <div className="flexbox">
        <div className="stat_amount__shift">
          <p>
            {stat.plan} <span>план смены</span>
          </p>
        </div>
        <p className="stat_amount__forecast">{stat.forecast}% прогноз</p>
      </div>
    </div>
  );
}

export default stat;
