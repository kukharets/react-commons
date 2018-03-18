import MainContainer from "./components/container/MainContainer";
import ReactDOM from "react-dom";
import React from "react";

const wrapper = document.getElementById("container-fic");
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false;