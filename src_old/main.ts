import Vue from "vue";
/// @ts-ignore
import Components from "./components";
import "./app.css";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  delimiters: ["${", "}"]
});
