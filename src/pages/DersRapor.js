import React from "react";
import './Yoklama.css';

const DersRapor = (props)=>{
    console.log(props);

    const startYoklama = ()=>{
        let yok = props.currentLesson.yoklama;
        yok.push(
            {
                yoklamaKodu:props.currentLesson.dersKod + "-" + Math.floor(Math.random() * 999999),
                tarih:Date.now(),
                katilanlar:[],
                isDone:false
              }
        )
        props.currentLesson.yoklama = yok;

        props.setCurrentLesson(props.currentLesson);
        props.setDers([...props.ders.filter((el)=>el.dersKod !==props.currentLesson.dersKod), props.currentLesson])
    }

    const stopYoklama = ()=>{
        let yok = props.currentLesson.yoklama;
        yok[yok.length-1].isDone = true;
        props.currentLesson.yoklama = yok;

        props.setCurrentLesson(props.currentLesson);
        props.setDers([...props.ders.filter((el)=>el.dersKod !==props.currentLesson.dersKod), props.currentLesson])
    }

    return (
        <div>
            <br/>
           <h2 className="label-h3">Rapor</h2>
           <div className="label2">
            <label>Ders Adı: {props.currentLesson.dersAdi}</label>
            <br/>
           <label>Dersin Eğitmeni: {props.currentLesson.dersEgitmen}</label>
           <br/>
           <label>Ders Kodu: {props.currentLesson.dersKod}</label>
           <br/>
           <div>
           <button onClick={props.currentLesson.yoklama.length === 0?startYoklama: props.currentLesson.yoklama[props.currentLesson.yoklama.length -1].isDone? startYoklama: stopYoklama } className="button">{props.currentLesson.yoklama.length === 0?"Yoklama Başlat": props.currentLesson.yoklama[props.currentLesson.yoklama.length -1].isDone? "Yoklama Başlat": "Yoklama Durdur"}</button>
           
           </div>

           <label>Yoklama Kodu: {props.currentLesson.yoklama.length === 0?"Yoklama Başlatılmadı": props.currentLesson.yoklama[props.currentLesson.yoklama.length -1].isDone? "Yoklama Başlatılmadı": props.currentLesson.yoklama[props.currentLesson.yoklama.length -1].yoklamaKodu}</label>
           </div>
           <div>
           
                <table className="table">
                    <tr className="table">
                        <th>Öğrenci No</th>
                        <th>Öğrenci Adı</th>
                        <th>Öğrenci Soyadı</th>

                    </tr>
                    {
                        props.currentLesson.yoklama !== undefined && props.currentLesson.yoklama.length > 0 &&
                        props.currentLesson.yoklama[props.currentLesson.yoklama.length-1].katilanlar.map((elem)=>
                        <tr>
                            <td>{elem.ogrenciNo}</td>
                            <td>{elem.ogrenciName}</td>
                            <td>{elem.ogrenciLastname}</td>
                        </tr>
                        )
                    }
                </table>
            
           </div>

        </div>
    )
}

export default DersRapor;