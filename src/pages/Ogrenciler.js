import React, { useState } from 'react';
import NewOgrenci from '../AddItem/NewOgrenci';
import NewOgrenciYoklama from '../AddItem/NewOgrenciYoklama';

import OgrenciButton from '../components/OgrenciButton';
import OgrenciItem from '../Ders/OgrenciItem';
import Dersler from './Dersler';



const Ogrenciler = (props) => {
    console.log(props)
    const addOgrenciHandler = ogrenci => {
        props.setOgren((prevOgrenciler) => {
            return [ogrenci, ...prevOgrenciler];
        })
        console.log('uygulandı');
        props.setDatabase([...props.database, 
            {
                username:ogrenci.ogrenciNo,
                password:ogrenci.ogrenciNo + "1",
                type:1,
                ogrenciNo:ogrenci.ogrenciNo
            }])
    };

    const addYoklama = (data)=>{
        let d = props.ders.find((elem)=>elem.dersKod === data.dersKodu);
        if(d === undefined)
        return;
        let o = props.ogren.find((elem)=>elem.ogrenciNo === data.ogrenciNo);
        if( o === undefined)
            return;
        d.dersKatilanlar.push(o.ogrenciNo)
        
        props.setDers([...props.ders.filter((el)=>el.dersKod !== data.dersKodu), d]);
    }
    /* <table className='table' striped bordered hover variant="dark">
                <thead>
                    <tr className='table-th'>
                        <th>Öğrenci Numarası</th>
                        <th>Öğrenci Ad-Soyad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-td'>
                        <td>1234569875</td>
                        <td>Aliye Duru</td>
                    </tr>
                </tbody>
            </table> */
    console.log(props)
    return (
        <div>
            <div className='navbar-item-show'>
                <h3>Öğrenciler</h3>
                <div>
                    {
                        props.ogren !== undefined && props.ogren.map((elem)=>(
                            <OgrenciItem ogrenciNo={elem.ogrenciNo} ogrenciName={elem.ogrenciName} ogrenciLastname={elem.ogrenciLastname} bolum={elem.bolum}/>
                        ))
                    }
                </div>

           

           <OgrenciButton onClick={<Dersler/>} />
            <NewOgrenci onAddOgrenci={addOgrenciHandler} />
            <NewOgrenciYoklama onAddOgrenci={addYoklama} />
        </div> </div>
    );
}
export default Ogrenciler;