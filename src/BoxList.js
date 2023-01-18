import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const removeBox = (idToDelete) => {
        let updatedBoxes = boxes.filter((box) => box.id !== idToDelete)
        setBoxes(updatedBoxes)
    }
    return (
        <div>
            <h2> Boxes </h2>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box => (
                    <Box key={box.id} id={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} removeBox = {removeBox} />
                ))}
            </div>
        </div>
    )
}

export default BoxList;