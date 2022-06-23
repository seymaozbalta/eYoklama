import React from 'react';
import OgrenciItem from './OgrenciItem';



const OgrenciList=props=>{

    return <ul >
    
        {props.items.map((ogrenci)=>(
            <OgrenciItem
            key={ogrenci.id}
            bolum={ogrenci.bolum}
            ogrenciNo={ogrenci.ogrenciNo}
            ogrenciName={ogrenci.ogrenciName}
            ogrenciLastname={ogrenci.ogrenciLastname}
   
            />
        ))}
    </ul>
};
export default OgrenciList;