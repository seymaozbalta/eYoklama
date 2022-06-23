import React, {useState} from 'react';
import './DersForm.css';
import NewDers from './NewDers';


const DersForm=(props)=>{

    const [enteredDersKod,setEnteredDersKod]=useState('');
    const[enteredDersName,setEnteredDersName]=useState('');
    const[enteredEgitmen,setEnteredEgitmen]=useState('');
  


    /*const [userInput,setUserInput]=useState(
        {
            enteredDersKod:'',
            enteredDersName:'',
            enteredEgitmen:''
        }
    );*/

    const kodChangeHandler=(event)=>{
        setEnteredDersKod(event.target.value);
        //console.log('kod changed');
        /*setUserInput({
            ...userInput,
            enteredDersKod:event.target.value,
        });*/
        /*setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredDersKod:event.target.value
            };
        });*/
    }

    const nameChangeHandler=(event)=>{
        setEnteredDersName(event.target.value);
         /*setUserInput({
            ...userInput,
            enteredDersName:event.target.value,
        });*/
        /*setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredDersName:event.target.value
            };
        });*/
    }

    const egitmenChangeHandler=(event)=>{
        setEnteredEgitmen(event.target.value);
         /*setUserInput({
            ...userInput,
            enteredDersEgitmen:event.target.value,
        });*/
        /*setUserInput((prevState)=>{
            return{
                ...prevState,
                enteredEgitmen:event.target.value
            };
        });*/
    }

   
    
    const submitHandler=(event)=>{
        event.preventDefault();
        //console.log(enteredDersKod);
        //console.log(enteredDersName);
        //console.log(enteredEgitmen);
        
        const dersData={
            id: Math.random().toString(),
            dersKod: enteredDersKod,
            dersAdi: enteredDersName,
            dersEgitmen: enteredEgitmen,
            dersKatilanlar: [],
            yoklama: []
            
        };

        

        props.onSaveDersData(dersData);
        
        //console.log(userInput);

        setEnteredDersKod('');
        setEnteredDersName('');
        setEnteredEgitmen('');
     
        
    }

    return <form onSubmit={submitHandler}>
       
             <div className='new-ders__controls'>
            <div className='new-ders__control'>
                <label>Ders Kodu</label>
                <input type='text' value={enteredDersKod} onChange={kodChangeHandler}></input>
            </div>
            <div className='new-ders__control'>
                <label>Ders Adı</label>
                <input type='text' value={enteredDersName} onChange={nameChangeHandler}></input>
            </div>
            <div className='new-ders__control'>
                <label>Ders Eğitmeni</label>
                <input type='text' value={enteredEgitmen} onChange={egitmenChangeHandler}></input>
            </div>

            
            
           

           

            <div className='new-ders__actions'>
                <button type="submit">Kaydet</button>
            </div>
        </div>
       

            
       
    </form>;
    
};

export default DersForm;