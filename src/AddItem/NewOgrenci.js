import React from 'react';
import OgrenciForm from './OgrenciForm';

const NewOgrenci = (props) =>{

    const saveOgrenciDataHandler=(enteredOgrenciData)=>{

        const ogrenciData={
            ...enteredOgrenciData,

        };
        console.log(ogrenciData);
        props.onAddOgrenci(ogrenciData);
    }
    return <div className='new-add'>
        <OgrenciForm onSaveOgrenciData={saveOgrenciDataHandler}/>
    </div>

};
export default NewOgrenci;