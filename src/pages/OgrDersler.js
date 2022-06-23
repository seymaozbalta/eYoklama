import React, { useState } from 'react';
import DersForm from '../AddItem/DersForm';
import Egitmenler from '../pages/Egitmenler';

import DersButton from '../components/DersButton';
import OgrenciButton from '../components/OgrenciButton';
import { Link } from "react-router-dom";
import NewDers from '../AddItem/NewDers';
import DersItem from '../Ders/DersItem';
import Ogrenciler from './Ogrenciler';





const OgrDersler = (props) => {

    const addDersHandler = ders => {
        props.setDers((prevDersler) => {
            return [ders, ...prevDersler];
        })

    };

    console.log(props)
    if(props.ders === undefined)
        return (<div></div>);

    let dersler = props.ders.find((elem)=>elem.dersEgitmen === props.currentUser.egitmenAdi);

    if(dersler.map === undefined){
        return (
        <div> 
            <div className='navbar-item-show'>
                <h3>Dersler</h3>
                <div>
                    <DersItem onClick={()=>{props.setCurrentLesson(dersler);props.setScreen(6);}} dersKod={dersler.dersKod} dersAdi={dersler.dersAdi} dersEgitmen={dersler.dersEgitmen} />   
                </div>
            </div>
        </div>
        )
    }

    return (
        <div> 
            <div className='navbar-item-show'>
                <h3>Dersler</h3>
                <div>
                    {
                        props.ders !== undefined && dersler.map((elem)=>
                        <DersItem onClick={()=>{props.setCurrentLesson(elem);props.setScreen(6);}}  dersKod={elem.dersKod} dersAdi={elem.dersAdi} dersEgitmen={elem.dersEgitmen} />)
                    }
                </div>
            </div>
        </div>


    );
    /*<table className='table' striped bordered hover variant="dark">
                <thead>
                    <tr className='table-th'>
                        <th>Ders Kodu</th>
                        <th>Ders Adı</th>
                        <th>Ders Eğitmeni</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-td'>
                        <td>{dersler[0].dersKod}</td>
                        <td>{dersler[0].dersAdi}</td>
                        <td>{dersler[0].dersEgitmen}</td>
                    </tr>
                    <tr className='table-td'>
                        <td>{dersler[1].dersKod}</td>
                        <td>{dersler[1].dersAdi}</td>
                        <td>{dersler[1].dersEgitmen}</td>
                    </tr>
                    <tr className='table-td'>
                        <td>{dersler[2].dersKod}</td>
                        <td>{dersler[2].dersAdi}</td>
                        <td>{dersler[2].dersEgitmen}</td>
                    </tr>
                    <tr className='table-td'>
                        <td>{dersler[3].dersKod}</td>
                        <td>{dersler[3].dersAdi}</td>
                        <td>{dersler[3].dersEgitmen}</td>
                    </tr>
                   
                </tbody>
            </table>*/
}
export default OgrDersler;