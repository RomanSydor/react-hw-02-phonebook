import React from "react";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <label className={s.filterContainer}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
