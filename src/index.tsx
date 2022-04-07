// let hello: string = "hello";

// document.querySelectorAll(".app")[0].innerHTML = hello;

import React from "react";

import ReactDOM from "react-dom";

import Hello from "./components/demo/Hello";

ReactDOM.render(<Hello name="tutu!" />, document.querySelectorAll(".app")[0]);
