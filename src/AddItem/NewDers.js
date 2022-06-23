import React from 'react';
import DersForm from './DersForm';
import './NewDers.css';
import Egitmenler from '../pages/Egitmenler';
//Derskodu-DersAdı-DersEgitmeni bileşenleri alacak
const NewDers = (props) =>{

    const saveDersDataHandler=(enteredDersData)=>{

        const dersData={
            ...enteredDersData,
            
    
        };
        console.log(dersData);
        props.onAddDers(dersData);
        
    }
    return <div className='new-add'>
        <DersForm  onSaveDersData={saveDersDataHandler}/>
    </div>
};

export default NewDers;