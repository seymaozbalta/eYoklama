import React,{useState} from 'react';

const OgrenciYoklamaForm=(props)=>{
    const [enteredOgrenciNo,setEnteredOgrenciNo]=useState('');
    const [enteredDersKodu,setEnteredDersKodu]=useState('');
   
    
    const ogrenciNoChangeHandler=(event)=>{
        setEnteredOgrenciNo(event.target.value);
    }

    const dersKoduChangeHandler=(event)=>{
        setEnteredDersKodu(event.target.value);
    }


    const submitHandler=(event)=>{
     
        event.preventDefault();
       
       const ogrenciYoklamaData={
            id:Math.random().toString(),
            ogrenciNo: enteredOgrenciNo,
            dersKodu:enteredDersKodu,
            
        };

        props.onSaveOgrenciYoklamaData(ogrenciYoklamaData);

        setEnteredOgrenciNo('');
        setEnteredDersKodu('');

        
        
        
    }
    return <form onSubmit={submitHandler}>
    <div className='new-ders__controls'>
        <div className='new-ders__control'>
            <label>Öğrenci Okul Numarası</label>
            <input type='text' value={enteredOgrenciNo} onChange={ogrenciNoChangeHandler}></input>
        </div>
        <div className='new-ders__control'>
            <label>Ders Kodu</label>
            <input type='text' value={enteredDersKodu} onChange={dersKoduChangeHandler}></input>
        </div>
        
        <div className='new-ders__actions'>
            <button type="submit">Kaydet</button>
        </div>

        
    </div>
</form>;

};

export default OgrenciYoklamaForm;