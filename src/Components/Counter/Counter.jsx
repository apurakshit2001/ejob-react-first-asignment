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
        <div>
            <button type="button" onClick={increment}>+</button>
            <font>{count}</font>
            <button type="button" onClick={decrement} >-</button>
        </div>
    );
};

export default Counter;
