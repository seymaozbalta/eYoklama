import React,{useState} from 'react';
import EgitmenForm from '../AddItem/EgitmenForm';
import NewEgitmen from '../AddItem/NewEgitmen';
import EgitmenButton from '../components/EgitmenButton';
import EgitmenItem from '../Ders/EgitmenItem';



const Egitmenler = (props) => {

    const addEgitmenHandler=egitmen=>{
      
      props.setEgit((prevEgitmenler)=>{
        return [egitmen,...prevEgitmenler];
      })
  
    };
     
           /*
            <table className='table' striped bordered hover variant="dark">
                <thead>
                    <tr className='table-th'>
                        <th>Eğitmen Adı</th>
                        <th>Eğitmenin Verdiği Ders</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className='table-td'>
                        <td>{egitmenler[0].egitmenAdi}</td>
                        <td>{egitmenler[0].egitmenVerdigiDers}</td>
                    </tr>
                    <tr>
                        <td>{egitmenler[1].egitmenAdi}</td>
                        <td>{egitmenler[1].egitmenVerdigiDers}</td>
                    </tr>
                </tbody>

            </table>*/ 
            console.log(props)
    return (
    <div className='navbar-item-show'>
        <h3>Eğitmenler</h3>
        
        <div>
            {
                props.egit !== undefined && props.egit.map((elem)=>
                <EgitmenItem egitmenAdi={elem.egitmenAdi} egitmenVerdigiDers={elem.egitmenVerdigiDers} />
                )
            }               
            </div>
            <EgitmenButton/>
            <NewEgitmen onAddEgitmen={addEgitmenHandler}/>
        </div>
    );
}
export default Egitmenler;