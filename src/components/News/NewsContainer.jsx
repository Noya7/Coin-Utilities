import classes from './NewsContainer.module.css'
import NewsCatalogue from './NewsCatalogue';
import { useState } from 'react';


import React from "react";

const doubleArrow =(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="64"
  height="64"
  fill="none"
  stroke="#fff"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M18 17l-5-5 5-5m-7 10l-5-5 5-5"
  ></path>
</svg>
)
const NewsContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [source, setSource] = useState(0)
  const [active, setActive] = useState(0)

  const openHandler = () => {
    setIsOpen(!isOpen)
  }

  const sourceHandler = (value) => {
    setSource(value)
    setActive(value)
  }

  return (
    <div className={classes.containerDiv}>
      {isOpen &&
      <div className={classes.mainDiv}>
        <h1 className={classes.title}>PESOS news</h1>
        <span className={classes.sources}>
          <button onClick={()=>sourceHandler(0)} className={active === 0 ? classes.active : classes.button}>Clarín</button>
          <button onClick={()=>sourceHandler(1)} className={active === 1 ? classes.active : classes.button}>Ámbito</button>
          <button onClick={()=>sourceHandler(2)} className={active === 2 ? classes.active : classes.button}>Telam</button>
        </span>
      <NewsCatalogue source={source}/>
      </div>}
      <button onClick={openHandler} className={isOpen ? classes.open : classes.close}>
        {!isOpen && 'PESOS News'}
        {isOpen && <div className={classes.icon}>{doubleArrow}</div>}
      </button>
    </div>
  );
};

export default NewsContainer;