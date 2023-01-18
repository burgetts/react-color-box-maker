import React from 'react';
import './Box.css'

const Box = ({id, width, height, backgroundColor, removeBox}) => {
    return (
        <>
            <div className="Box" data-testid="rendered-box" id={id} style={{width, height, backgroundColor}}></div>
            <button onClick={() => removeBox(id)}>❌</button>
        </>
    )
}

export default Box;