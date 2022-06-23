import React, { useState } from 'react';
import './DersItem.css';

const OgrenciItem = (props) => {
    return (
        <div>
            <div >

                <div className='item__view'>
                    <div className='bos'>
                        <div className='item__view'>
                            <label>{props.ogrenciNo}</label>
                        </div>
                        <div className='item__view'>
                            <label>{props.bolum}</label>
                        </div>
                        <div className='item'>
                            <label>{props.ogrenciName} </label>

                            <label>{props.ogrenciLastname}</label>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}
export default OgrenciItem;