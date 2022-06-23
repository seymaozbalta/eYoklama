import React from 'react';
import EgitmenItem from './EgitmenItem';


const EgitmenList=props=>{

    return <ul className='ders-list'>
        {props.items.map((egitmen)=>(
            <EgitmenItem
            key={egitmen.id}
            egitmenAdi={egitmen.egitmenAdi}
            egitmenVerdigiDers={egitmen.egitmenVerdigiDers}
   
            />
        ))}
    </ul>
};
export default EgitmenList;