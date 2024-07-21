import { useState } from 'react';
import './txt.css';

const Textpass = () => {
    const [inputVal, newValAfterTyping] = useState('');

    const onTyping = (e) => {
        const newValue = e.target.value;
        newValAfterTyping(newValue);
    }

    const clearAll = () => {
        newValAfterTyping('');
    }

    return (
        <div className='txtContainer'>
            <h1 style={{ fontSize: '150px' }}>Text Passing</h1>
            <div className="passedText-unique-1">
                <h1 className="heading-unique-2">{inputVal}</h1>
            </div>
            <div className='inputText-unique-3'>
                <input type="text" className="input-unique-4" value={inputVal} placeholder='Enter your name' onChange={onTyping} />
                <button className='AllClear-button-unique-5' onClick={clearAll}>AC</button>
            </div>
        </div>
    )
}

export default Textpass;