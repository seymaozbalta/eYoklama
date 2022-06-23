
import './App.css';

import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Dersler from "./pages/Dersler";
import Ogrenciler from "./pages/Ogrenciler";
import Egitmenler from './pages/Egitmenler';
import Yoklama from './pages/Yoklama';
import DersForm from './AddItem/DersForm';
import OgrenciForm from './AddItem/OgrenciForm';
import NewDers from './AddItem/NewDers';
import DersItem from './Ders/DersItem';
import Login from './Login';

import OgrDersler from "./pages/OgrDersler";
import DersRapor from "./pages/DersRapor";




const App=()=> {

  const [screen, setScreen] = useState(0); 
  //user login info
  const [database, setDatabase]= useState([
    {
        username:"admin1",
        password:"123",
        type: 3
    },
    {
      username:"ogrt1",
      password:"123",
      type:2,
      egitmenAdi:"Rembiye Kandemir"
    },
    {
      username:"ogrt2",
      password:"1234",
      type:2,
      egitmenAdi:"Cem Taşkın"
    },
    {
      username:"ogrenci1",
      password:"222",
      ogrenciNo:"1234566554",
      type:1,
    }
    ]);

  const [ogren, setOgren] = useState([
    { id: "O1", ogrenciNo: "1234566554", ogrenciName: "Ali", ogrenciLastname: "Duru",bolum: "Bilgisayar Mühendisliği", tarih: new Date(2022, 3, 15)},
    { id: "O2", ogrenciNo: "1234566555", ogrenciName: "Alia", ogrenciLastname: "Duru",bolum: "Bilgisayar Mühendisliği",  tarih: new Date(2022, 3, 15) },
    { id: "O3", ogrenciNo: "1234566556", ogrenciName: "Alis", ogrenciLastname: "Duru",bolum: "Bilgisayar Mühendisliği",  tarih: new Date(2022, 3, 15) },
    { id: "O4", ogrenciNo: "1234566557", ogrenciName: "Alid", ogrenciLastname: "Duru",bolum: "Bilgisayar Mühendisliği",  tarih: new Date(2022, 3, 15) }
  ]);

  const [ders, setDers] = useState([
    {dersid: "d1", dersKod: "BIL323", dersAdi: "Web Tabanlı Programlama", dersEgitmen: "Cem Taşkın", yoklama:[],  dersKatilanlar:["1234566554"]},
    { dersid: "d2", dersKod: "BIL424", dersAdi: "Yazılım Mühendisliği", dersEgitmen: "Aydın Carus", yoklama:[],  dersKatilanlar:["1234566554"] },
    { dersid: "d3", dersKod: "BIL4204", dersAdi: "Derleyici Teorisi", dersEgitmen: "Özlem Aydın", yoklama:[],  dersKatilanlar:["1234566554"] },
    { dersid: "d4", dersKod: "BIL4216", dersAdi: "Mobil Uygulama Geliştirme 2", dersEgitmen: "Cem Taşkın", yoklama:[], dersKatilanlar:["1234566554"] },
    { dersid: "d5", dersKod: "BIL4203", dersAdi: "Örüntü Tanıma", dersEgitmen: "Rembiye Kandemir", yoklama:[], dersKatilanlar:["1234566554"] }

]);

const [egit, setEgit]=useState([
  {egitmenid:"e1", egitmenAdi: "Cem Taşkın",egitmenVerdigiDers: "Web Tabanlı Programlama"},
  {egitmenid:"e2" , egitmenAdi:"Rembiye Kandemir", egitmenVerdigiDers:"Örüntü Tanıma"}
]);
  
  const [currentUser, setCurrentUser] = useState(undefined);
  const login = (user)=>{
    setCurrentUser(user);
    if(user.type === 3)
      setScreen(1);
    else if(user.type === 2)
      setScreen(2);
    else
      setScreen(4);
  }

  const [currentLesson, setCurrentLesson] = useState(undefined);

  return (
      <div>
        <Navbar setScreen={setScreen} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <div style={{height:"100%"}}>
          {
            screen === 0 &&
            <Login database={database} setCurrentUser={login}/>
          }
          {
            screen === 1 &&
            <Dersler ders={ders} setDers={setDers}/>
          }
          {
            screen === 2 &&
            <Ogrenciler database={database} setDatabase={setDatabase} ders={ders} setDers={setDers} ogren={ogren} setOgren={setOgren}/>
          }
          {
            screen === 3 &&
            <Egitmenler egit={egit} setEgit={setEgit}/> 
          }
          {
            screen === 4 &&
            <Yoklama ogren={ogren} currentUser={currentUser} setCurrentUser={setCurrentUser} ders={ders} setDers={setDers}/>      
          }
          {
            screen === 5 &&
            <OgrDersler setCurrentLesson={setCurrentLesson} setScreen={setScreen} currentUser={currentUser} ders={ders}></OgrDersler>
          }
          {
            screen === 6 &&
            <DersRapor currentLesson={currentLesson} setCurrentLesson={setCurrentLesson} setDers={setDers} ders={ders}></DersRapor>
          }
        </div>
      </div>
      
      
   



  );
}

export default App;
