import React from 'react';
import Dersler from '../pages/Dersler';
import Ogrenciler from '../pages/Ogrenciler';

const OgrenciButton=()=>{
    return(
        <div>
            <button onClick={<Dersler/>}>Ogrenci Ekle</button>
            <button>Ogrenci Sil</button>
        </div>
    );

}
export default OgrenciButton;