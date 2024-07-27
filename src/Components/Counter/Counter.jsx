import React, { useState } from 'react';
import './count.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div className='counterContainer'>
            <style>
                {`
          .Button {
            color: black;
          }
          .Button:active {
            color: red;
          }
        `}
            </style>

            <button type="button" onClick={increment} className='Button'>+</button><font>
                {count}
            </font><button type="button" onClick={decrement} className='Button'>-</button>
        </div>
    );
};

export default Counter;
