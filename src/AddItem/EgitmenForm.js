import React,{useState} from 'react';

const EgitmenForm=(props)=>{
    const [enteredEgitmenAdi,setEnteredEgitmenAdi]=useState('');
    const[enteredEgitmenDers,setEnteredEgitmenDers]=useState('');
    

   const egitmenAdiChangeHandler=(event)=>{
        setEnteredEgitmenAdi(event.target.value);
   }

    const egitmenDersChangeHandler=(event)=>{
        setEnteredEgitmenDers(event.target.value);
    }

  

    const submitHandler=(event)=>{
        //console.log(enteredEgitmenAdi);
        //console.log(enteredEgitmenDers);
        const egitmenData={
            id: Math.random().toString(),
            egitmenAdi: enteredEgitmenAdi,
            egitmenVerdigiDers: enteredEgitmenDers
            
        };

        props.onSaveEgitmenData(egitmenData);

        setEnteredEgitmenAdi('');
        setEnteredEgitmenDers('');
        
        
        
        event.preventDefault();
        //console.log(userInput);

        setEnteredEgitmenAdi('');
        setEnteredEgitmenDers('');
        
        
    }
    return <form onSubmit={submitHandler}>
    <div className='new-ders__controls'>
        <div className='new-ders__control'>
            <label>Eğitmen Adı</label>
            <input type='text' value={enteredEgitmenAdi} onChange={egitmenAdiChangeHandler}></input>
        </div>
        <div className='new-ders__control'>
            <label>Eğitmen Verdiği Ders</label>
            <input type='text' value={enteredEgitmenDers} onChange={egitmenDersChangeHandler}></input>
        </div>
       

        <div className='new-add__actions'>
            <button type="submit">Kaydet</button>
        </div>

        
    </div>
</form>;

};

export default EgitmenForm;