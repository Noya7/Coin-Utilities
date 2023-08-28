import { useLoaderData } from "react-router-dom";
import classes from './ValueDisplay.module.css'

function Display({value}){
    const data = useLoaderData();

    return (
      <div className={classes.main}>
        <h2>Compra</h2>
        <h1>${data[value].compra}</h1>
        <h2>Venta</h2>
        <h1>${data[value].venta}</h1>
      </div>
    );
}

export default Display;