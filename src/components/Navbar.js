import React from 'react';
import Login from '../Login';
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <header class="header">
            <div class="left">
                <a>E-Yoklama</a>
                
            </div>
            <div class="mid">
                {props.currentUser !== undefined &&
                <ul class="navbar">
                    {props.currentUser.type === 3 &&
                    <li onClick={()=>props.setScreen(1)}>
                        <a>Dersler</a>
                    </li>
                    }
                    { props.currentUser.type > 1 &&
                    <li onClick={()=>props.setScreen(2)}>
                        <a to="/Ogrenciler">Öğrenciler</a>
                    </li>
                    }
                    {props.currentUser.type === 3 &&
                    <li onClick={()=>props.setScreen(3)}>
                        <a to="/Egitmenler">Eğitmenler</a>
                    </li>
                    }
                    {props.currentUser.type === 1 &&
                    <li onClick={()=>props.setScreen(4)}>
                        <a to="/Yoklama">Yoklama</a>
                    </li>
                    }
                    {props.currentUser.type === 2 &&
                    <li onClick={()=>props.setScreen(5)}>
                        <a to="/Yoklama">Dersler</a>
                    </li>
                    }
                    {props.currentUser.type > 0&&
                    <li style={{float:"right", }} onClick={()=>{props.setCurrentUser(undefined);props.setScreen(0)}}>
                        <a to="/Yoklama">Çıkış</a>
                    </li>
                    }
                </ul>
}

            </div>

        </header>

    );
}
export default Navbar;