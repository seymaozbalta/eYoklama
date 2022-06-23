import React from 'react';
import './Button.css';

const YoklamaButton=(props)=>{
    return(
        <div>
            <br/>
            <button onClick={props.onClick} className='button'>Yoklama Gönder</button>
            
        </div>
    );

}
export default YoklamaButton;