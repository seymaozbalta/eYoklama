import React from 'react';
import OgrenciForm from './OgrenciForm';
import OgrenciYoklamaForm from './OgrenciYoklamaForm';

const NewOgrenciYoklama = (props) =>{

    const saveOgrenciYoklamaDataHandler=(enteredOgrenciYoklamaData)=>{

        const ogrenciYoklamaData={
            ...enteredOgrenciYoklamaData,

        };
        console.log(ogrenciYoklamaData);
        props.onAddOgrenci(ogrenciYoklamaData);
    }
    return <div className='new-add'>
        <OgrenciYoklamaForm onSaveOgrenciYoklamaData={saveOgrenciYoklamaDataHandler}/>
    </div>

};
export default NewOgrenciYoklama;