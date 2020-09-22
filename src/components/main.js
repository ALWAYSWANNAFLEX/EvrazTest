import React from "react";
import Filter from "./filter";
import Stat from "./stat";
import Chart from "./chart";
import Tables from "./tables";
import Machines from "./machines";

function main(props) {
  return (
    <div className="main">
      <form className="filter">
        {props.filter.map((filter) => {
          return <Filter filter={filter} key={filter.id} />;
        })}
        <button>Применить фильтр</button>
      </form>
      <div className="stat">
        {props.stat.map((stat) => {
          return <Stat stat={stat} key={stat.id} />;
        })}
      </div>
      <Chart />
      <div className="tables">
        <div className="tables_efficiency">
          <h2>Эффективность экскаватора</h2>
          <div className="tables_efficiency__grid">
            <div className="properties">
              <div className="item">
                <p></p>
              </div>
              <div className="item">
                <p>КИО, %</p>
              </div>
              <div className="item">
                <p>КТГ, %</p>
              </div>
              <div className="item">
                <p>СКЗ</p>
              </div>
              <div className="item">
                <p>Среднее время погрузки, мин</p>
              </div>
            </div>
            <div className="values">
              <div className="item name">
                <p>Смена факт</p>
              </div>
              <div className="item name">
                <p>Час факт</p>
              </div>
              <div className="item name">
                <p>План</p>
              </div>
              {props.table.map((table) => {
                return <Tables table={table} />;
              })}
            </div>
          </div>
        </div>
        <div className="tables_truck">
          <div className="tables_truck__item">
            <h2>Самосвалы</h2>
            <div className="tables_truck__info">
              {props.machine.map((machine) => {
                return <Machines machine={machine} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
