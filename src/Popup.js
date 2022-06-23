import React from '/react';
//import './Popup.css';

const Popup=()=>{
    <Popup trigger={<button>Trigger</button>} position=" top left">
        {close=>(
            <div>
                Content here
                <a onClick={close}>
                    &times;
                </a>
            </div>
        )}

    </Popup>
}
export default Popup;