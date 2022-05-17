import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const { coloursByPopularity: hondaColors, speedStats: hondaStats } = honda;

const { coloursByPopularity: teslaColors, speedStats: teslaStats } = tesla;

const { topSpeed: teslaTopSpeed } = teslaStats;
const [teslaTopColour] = teslaColors;

const { topSpeed: hondaTopSpeed } = hondaStats;
const [hondaTopColour] = hondaColors;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
