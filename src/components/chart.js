import React, { Component } from "react";
import Chart from "react-apexcharts";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Отклонение",
          type: "column",
          data: [19, 72, 102, 56, 19, 3],
        },
        {
          name: "Факт",
          type: "column",
          data: [81, 128, 98, 256, 180, 197],
        },
        {
          name: "План",
          type: "line",
          data: [100, 200, 200, 200, 200, 200],
        },
      ],
      options: {
        fill: {
          colors: ["#F14A55", "#E3E3E3"],
        },
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        stroke: {
          width: [0, 0, 1],
        },
        xaxis: {
          categories: [
            "07:30",
            "08:00",
            "08:30",
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
          ],
        },
        yaxis: [
          {
            min: 0, 
            max: 250,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              show: false,
            }
          },
        ],
        legend: {
          horizontalAlign: "left",
          position: "top",
          offsetX: 40,
          fontFamily: 'Roboto',
          markers: {
            fillColors: ["#F14A55", "#E3E3E3"],
            radius: 0, 
            width: 11,
            height: 11
          }
        },
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <div className="title">
          <h2>Часовая производительность погрузочного оборудования</h2>
          <div className="name">
            <p>
              <span>016</span> - Петров Петр Петрович
            </p>
          </div>
          <div className="scale">
            <p>Масштаб</p>
            <select>
              <option>Час</option>
              <option>Месяц</option>
              <option>Год</option>
            </select>
          </div>
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={"500px"}
        />
      </div>
    );
  }
}

export default ApexChart;
