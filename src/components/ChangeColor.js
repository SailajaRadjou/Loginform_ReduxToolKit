import React, {Fragment, useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeColor} from '../features/theme'
function ChangeColor() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    return (
        <Fragment>
        <div>
            <input type="text"
                onChange={(event) =>{
                    setColor(event.target.value)
                }}
            />
            <button onClick={() => {dispatch(changeColor(color))}}>Change Color</button>    
        </div>
        </Fragment>
    )
}

export default ChangeColor;
