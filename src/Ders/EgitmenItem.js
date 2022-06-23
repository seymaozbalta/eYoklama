import React, { useState } from 'react';
import './DersItem.css';

const EgitmenItem = (props) => {
    return (
        <div>
            <div className='item__view'>
               
                <div className='item__view'>
                    <label>{props.egitmenAdi}</label>
                </div>
                <div className='item'>
                    <label>{props.egitmenVerdigiDers}</label>
                </div>
            </div>
        </div>

    );
}
export default EgitmenItem;