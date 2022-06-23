import React from 'react';
import DersItem from './DersItem';

const DersList=props=>{

    return <ul className='ders-list'>
        {props.items.map((ders)=>(
            <DersItem
            key={ders.id}
            dersKod={ders.dersKod}
            dersAdi={ders.dersAdi}
            dersEgitmen={ders.dersEgitmen}

            derseKatilanlar={ders.derseKatilanlar}
           
            yoklama={ders.yoklama}
            />
        ))}
    </ul>
};
export default DersList;