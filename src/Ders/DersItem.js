import React, { useState } from 'react';
import './DersItem.css';

const DersItem = (props) => {
    return (
        <div onClick={props.onClick}>
            <div className='item__view'>
                <div className='item__view'>
                     <label>{props.dersKod}--</label>

                     <label>{props.dersAdi}</label>
                </div>
                <div className='item'>
                    <label>{props.dersEgitmen}</label>
                </div>

                <div className='item'>
                    <label>{props.derseKatilanlar}</label>
                </div>
               
                
            </div>
        </div>

    );
}
export default DersItem;