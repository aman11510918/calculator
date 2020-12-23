import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.styles.scss";
import { GlobalHotKeys } from "react-hotkeys";

export default class Button extends Component {
  keyMap = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    0: "0",
    EQUAL: "=",
    ENTER: "enter",
    MULTIPLY: "shift+8",
    PRODUCT: "*",
    ADD: "shift+=",
    SUM: "+",
    SUBTRACT: "-",
    DIVIDE: "/",
    AC: "c",
    DOT: ".",
    PERCENT: "shift+5",
  };
  handlers = {
    1: () => {
      this.props.onClick("1");
    },
    2: () => {
      this.props.onClick("2");
    },
    3: () => {
      this.props.onClick("3");
    },
    4: () => {
      this.props.onClick("4");
    },
    5: () => {
      this.props.onClick("5");
    },
    6: () => {
      this.props.onClick("6");
    },
    7: () => {
      this.props.onClick("7");
    },
    8: () => {
      this.props.onClick("8");
    },
    9: () => {
      this.props.onClick("9");
    },
    0: () => {
      this.props.onClick("0");
    },
    EQUAL: () => {
      this.props.onClick("=");
    },
    MULTIPLY: () => {
      this.props.onClick("*");
    },
    SUBTRACT: () => {
      this.props.onClick("-");
    },
    ADD: () => {
      this.props.onClick("+");
    },
    DIVIDE: () => {
      this.props.onClick("÷");
    },
    AC: () => {
      this.props.onClick("AC");
    },
    DOT: () => {
      this.props.onClick(".");
    },
    PERCENT: () => {
      this.props.onClick("%");
    },
    ENTER: () => {
      this.props.onClick("=");
    },
    SUM: () => {
      this.props.onClick("+");
    },
    PRODUCT: () => {
      this.props.onClick("*");
    },
  };
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
  };

  render() {
    return (
      <GlobalHotKeys keyMap={this.keyMap} handlers={this.handlers}>
        <div
          className={this.props.className}
          onClick={() => this.props.onClick(this.props.value)}
        >
          {this.props.value}
        </div>
      </GlobalHotKeys>
    );
  }
}
