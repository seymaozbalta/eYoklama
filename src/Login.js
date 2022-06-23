import React,{useState} from "react";
import ReactDOM from "react-dom";
import './Login.css';

const Login=(props)=>{
    const [errorMessages,setErrorMessages]=useState({});
    const [isSubmitted,setIsSubmitted]=useState(false);



    const errors={
        uname:"geçersiz kullanıcı",
        pass:"geçersiz şifre"
    };


    const handleSubmit=(event)=>{
        event.preventDefault();

        var{uname,pass}=document.forms[0];

        //find user login info
        const userData=props.database.find((user)=>user.username===uname.value)

        //compare user info
        if(userData){
            if(userData.password!==pass.value){
                //invalid password
                setErrorMessages({name:"pass",message:errors.pass});

            }else{
                props.setCurrentUser(userData);
            }
        }else{
           setErrorMessages({name:"uname",message: errors.uname});
        }
    };

    //generate jsx code for error message
    const renderErrorMessage=(name)=>
    name===errorMessages.name&&(
        <div>
            {errorMessages.message}
        </div>
    );

    //jsx code for login form
    const renderForm=(
        <div className="login">
            <form className="login" onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="uname" required/>
                    {renderErrorMessage("uname")}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="pass" required/>
                    {renderErrorMessage("pass")}
                </div>
                <div>
                    <input className="button" type="submit"/>
                </div>
            </form>
        </div>
    );

    return(
        <div>
            {isSubmitted? <div>Giriş başarılı</div>:renderForm}
        </div>
    );
}
export default Login;