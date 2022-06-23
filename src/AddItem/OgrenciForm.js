import React,{useState} from 'react';

const OgrenciForm=(props)=>{
    const [enteredOgrenciNo,setEnteredOgrenciNo]=useState('');
    const [enteredBolum,setEnteredBolum]=useState('');
    const[enteredOgrenciName,setEnteredOgrenciName]=useState('');
    const[enteredLastname,setEnteredLastname]=useState('');
    

    const ogrenciNoChangeHandler=(event)=>{
        setEnteredOgrenciNo(event.target.value);
    }

    const bolum=(event)=>{
        setEnteredBolum(event.target.value);
    }

    const ogrenciNameChangeHandler=(event)=>{
        setEnteredOgrenciName(event.target.value);
    }

    const lastnameChangeHandler=(event)=>{
        setEnteredLastname(event.target.value);
    }

    const submitHandler=(event)=>{
       // console.log(enteredOgrenciNo);
        //console.log(enteredOgrenciName);
        //console.log(enteredLastname);
        event.preventDefault();
        //console.log(userInput);
        const ogrenciData={
            id:Math.random().toString(),
            ogrenciNo: enteredOgrenciNo,
            bolum:enteredBolum,
            ogrenciName: enteredOgrenciName,
            ogrenciLastname: enteredLastname
        };

        props.onSaveOgrenciData(ogrenciData);

        setEnteredOgrenciNo('');
        setEnteredBolum('');
        setEnteredOgrenciName('');
        setEnteredLastname('');
        
    }
    return <form onSubmit={submitHandler}>
    <div className='new-ders__controls'>
        <div className='new-ders__control'>
            <label>Öğrenci Okul Numarası</label>
            <input type='text' value={enteredOgrenciNo} onChange={ogrenciNoChangeHandler}></input>
        </div>
        <div className='new-ders__control'>
            <label>Bölüm</label>
            <input type='text' value={enteredBolum} onChange={bolum}></input>
        </div>
        <div className='new-ders__control'>
            <label>Öğrenci Adı</label>
            <input type='text' value={enteredOgrenciName} onChange={ogrenciNameChangeHandler}></input>
        </div>
        <div className='new-ders__control'>
            <label>Öğrenci Soyadı</label>
            <input type='text' value={enteredLastname} onChange={lastnameChangeHandler}></input>
        </div>

        <div className='new-ders__actions'>
            <button type="submit">Kaydet</button>
        </div>

        
    </div>
</form>;

};

export default OgrenciForm;