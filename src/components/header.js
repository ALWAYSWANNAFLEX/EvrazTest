import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import logo from "../logo.png";
import stat from "./stat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const filterData = [
  {
    id: 1,
    name: "Выбор экскаватора",
    options: [{ option: "016 (10001266)" }, { option: "018 (10201631)" }],
  },
  {
    id: 2,
    name: "Выбор смены",
    options: [
      { id: 1, option: "Смена 1" },
      { id: 2, option: "Смена 2" },
    ],
  },
  {
    id: 3,
    name: "Выбор периода",
    options: [
      { id: 1, option: "С начала смены" },
      { id: 2, option: "С середины смены" },
    ],
  },
];

const sidebarData = [
  {
    depth1: "Дашборд 1",
    subscription: "Общее выполнение плана по разрезам",
    depth2: [
      { name: "Дашборд 1.1", subscription: "Общие технические показатели" },
    ],
  },
  {
    depth1: "Дашборд 2.0",
    subscription: "Сводная по экскаваторам",
    depth2: [
      { name: "Дашборд 2.1", subscription: "Выполнение плана по разрезу" },
    ],
  },
  {
    depth1: "Дашборд 3.1",
    subscription: "Выполнение смены экскаваторами",
    depth2: [
      { name: "Дашборд 3.1.1-3.1.2+", subscription: "Выполнение смены каждого экскаватора" },
      { name: "Дашборд 3.1.1.2", subscription: "Время цикла А/С у каждого экскаватора" },
      { name: "Дашборд 3.3", subscription: "Экскаваторы - рейтинг на текущий месяц" }
    ],
  },
  {
    depth1: "Дашборд 5.1",
    subscription: "Выполнение смены по самосвалам",
    depth2: [
      { name: "Дашборд 5.1.1.1", subscription: "Структура простоев самосвала" },
      { name: "Дашборд 5.3", subscription: "Самосвалы - рейтинг на текущий месяц (накопительным)" }
    ],
  },
  {
    depth1: "Дашборд 8",
    subscription: "Текущие (длящиеся) простои",
    depth2: [],
  },
];

const tableData = [
  {
    line: [{state: "negative", value: "95,3"}, {state: "positive", value: 97}, {state: "", value: 82}]
  },
  {
    line: [{state: "negative", value: 58}, {state: "", value: 100}, {state: "", value: 100}]
  },
  {
    line: [{state: "negative", value: 97}, {state: "", value: 105}, {state: "", value: 100}]
  },
  {
    line: [{state: "", value: "2,7"}, {state: "", value: "3,4"}, {state: "", value: ""}]
  }
]

const machineData = [
  {value: 3, name: 'CAT 777', properties: '56, 57, 47'},
  {value: 5, name: 'Белаз 75890', properties: '6002, 6012, 6007'},
  {value: 5, name: 'Белаз 75890', properties: '6002, 6012, 6007'}
]

const statData = [
  {
    id: 1,
    state: "positive",
    name: "Добыча, т",
    count: '2 088',
    result: 1088,
    plan: "1 000",
    forecast: 209,
  },
  {
    id: 2,
    state: "negative",
    name: "Вскрыша, м3",
    count: '2 304',
    result: "- 696",
    plan: "3 000",
    forecast: 77,
  },
  {
    id: 3,
    state: "positive",
    name: "Горная масса, м3",
    count: '3 839',
    result: 104,
    plan: "3 735",
    forecast: 103,
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { condition: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition,
    });
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header_rightSide">
            <a
              className="header_rightSide__hamburger"
              href="#"
              data-toggle=".content"
              id="sidebar-toggle"
              onClick={this.handleClick}
            >
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
            </a>
            <p>Дашборд 3.1.1 - 3.1.2 + выполнение смены каждого экскаватора</p>
            <div className="header_rightSide__notification">
              <FontAwesomeIcon icon={faBell} />
              <p className="count">6</p>
            </div>
          </div>
        </div>
        <div
          className={this.state.condition ? "content open_sidebar" : "content"}
        >
          <Sidebar sidebar={sidebarData} />
          <Main stat={statData} filter={filterData} table={tableData} machine={machineData}/>
        </div>
      </>
    );
  }
}
export default Header;
