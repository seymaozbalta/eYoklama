import React from 'react';
import EgitmenForm from './EgitmenForm';

const NewEgitmen=(props)=>{

    const saveEgitmenDataHandler=(enteredEgitmenData)=>{
        const egitmenData={
            ...enteredEgitmenData,

        };
        console.log(egitmenData);
        props.onAddEgitmen(egitmenData);
    }
    return  <div className='new-add'>
        <EgitmenForm onSaveEgitmenData={saveEgitmenDataHandler}/>
    </div>

}
export default NewEgitmen;