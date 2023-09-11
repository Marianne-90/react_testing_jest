import { evaluate } from "mathjs";
import { useState } from "react";

export const ROWS = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const OPERATIONS = ["+", "-", "/", "*"];
export const EQUAL = "=";
export const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


export const Calculator = () => {
    const [value, setValue] = useState("");
  
    const createHandleClic = (op) => {
      setValue(value.concat(op));
    };
  
    return (
      <section>
        <input value={value} readOnly />
        <h1>Calculator</h1>
        <grid>
          {ROWS.map((row, idx) => (
            <div role="row" key={idx}>
              {row.map((number) => (
                <button key={number} onClick={() => createHandleClic(number)}>
                  {number}
                </button>
              ))}
            </div>
          ))}
          {OPERATIONS.map((op) => (
            <button key={op} onClick={() => createHandleClic(op)}>
              {op}
            </button>
          ))}
          <button onClick={() => setValue(evaluate(value))}>{EQUAL}</button>
        </grid>
      </section>
    );
  };