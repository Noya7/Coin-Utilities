import { useLoaderData } from "react-router-dom";
import classes from './Calculator.module.css'
import { useCallback, useEffect, useRef, useState } from "react";

function Calculator({value}){
    const data = useLoaderData();
    const venta = data[value].venta;
    const inputRef = useRef();
    const resultRef = useRef();

    const [direction, setDirection] = useState('DP')
    const [result, setResult] = useState(venta);

    const directionHandler = () => {
        const result = resultRef.current.value;
        setDirection(direction === 'DP' ? 'PD' : 'DP');
        inputRef.current.value = result;
    }
    
    const calculator = useCallback( () => {
      const input = inputRef.current.value;
      const multiplier = direction === 'DP' ? venta : (1/venta)
      const result = input*multiplier;
      return(setResult(result))
    }, [direction, venta])

    useEffect(()=>{
      calculator()
    }, [direction, calculator])

    useEffect(()=>{
      resultRef.current.value = result.toFixed(2)
    }, [result])

    return (
      <div className={classes.main}>
        <h1>Calculadora</h1>
        <label htmlFor='input'>{direction === 'DP' ? 'Dólar' : 'Peso'}</label>
        <input step={0.01} type="number" onChange={calculator} ref={inputRef} defaultValue={1} id='input' />
        <button onClick={directionHandler}>
          <svg
            viewBox="-11.5 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>Arrow-big-two-way-up-down</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchtype="MSPage"
              >
                <g
                  id="Arrow-big-two-way-up-down"
                  sketchtype="MSLayerGroup"
                  transform="translate(1.000000, 1.000000)"
                  stroke="#6B6C6E"
                  strokeWidth="2"
                >
                  <path
                    d="M33.2,17 L38.3,17 C38.7,17 39,16.7 39,16.3 L29,0.8 C28.7,0.4 27.9,0.1 27.6,0.1 L27.6,0.1 C27.6,0.1 26.4,0.4 26.1,0.8 L16,16.2 C16,16.6 16.3,16.9 16.7,16.9 L22,16.9"
                    id="Shape"
                    sketchtype="MSShapeGroup"
                  ></path>
                  <path
                    d="M33,15.1 L33,33 L21.9,33 L21.9,15.1"
                    id="Shape"
                    sketchtype="MSShapeGroup"
                  ></path>
                  <path
                    d="M17.1,45 L22.3,45 C22.7,45 23,45.3 23,45.7 L13,61.2 C12.7,61.6 11.9,61.9 11.6,61.9 L11.6,61.9 C11.6,61.9 10.4,61.6 10.1,61.2 L0,45.8 C0,45.4 0.3,45.1 0.7,45.1 L6,45.1"
                    id="Shape"
                    sketchtype="MSShapeGroup"
                  ></path>
                  <path
                    d="M16.9,46.9 L16.9,29 L5.9,29 L5.9,46.9"
                    id="Shape"
                    sketchtype="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <label htmlFor="result">{direction === 'DP' ? 'Peso' : 'Dólar'}</label>
        <input readOnly type="number" ref={resultRef} defaultValue={venta} id="result" />
      </div>
    );
}

export default Calculator;