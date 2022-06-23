import React, { useState } from 'react';
import YoklamaButton from '../components/YoklamaButton';
import './Yoklama.css';

const Yoklama = (props) => {
    const [kod, setKod] = useState("");
    const [sta, setSta] = useState(0); 

    const yoklama = ()=>{
        
        let kodArr = kod.split("-");
        if(kodArr.length !== 2)
            return false;

        let der = props.ders.find((el)=> el.dersKod===kodArr[0]);
        if(der === undefined)
            return false;
        let ogr = der.dersKatilanlar.find((el)=>el === props.currentUser.ogrenciNo);
        if(ogr === undefined)
            return false;

        let yok = der.yoklama.find((el)=>el.isDone === false && el.yoklamaKodu ===kod)
        ogr = props.ogren.find((el)=>el.ogrenciNo === ogr);
        if(ogr === undefined)
            return false;
            console.log(yok.katilanlar)
        if(yok.katilanlar.find((el)=>el.ogrenciNo === ogr.ogrenciNo) !== undefined)
            return false;
        yok.katilanlar.push(ogr)
        return true;

    }

    return (
        <div className="form-control">

            <h3>Yoklama</h3>
            <br/>
            <div>
                <label className='label'>Yoklaması alınacak ders kodunu giriniz: </label>
                <br />
                <input onChange={(e)=>{
                    setKod(e.target.value)
                }} className="input" type="text" placeholder="Yoklama Kodu" required></input>
                {
                    sta > 0 &&
                    <p>{sta === 1 && "Kayıt Başarılı" || sta === 2 && "Başarısız Kayıt"}</p>
                }
            </div>



            <YoklamaButton onClick={()=>setSta(yoklama() ? 1: 2)}/>
        </div>
    );
}
export default Yoklama;