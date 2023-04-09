import { useState } from 'react';
import{ useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

export function LoginComponent(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState({
        password:'',
        comfirmpassword:'',
    });
    const[cookie,setCookie,removeCookie]=useCookies();
    const  Navigate =useNavigate();

    function handlenamechange(e){
        setUsername(e.target.value);
    }
    function handlepasschange(e){
        setPassword(e.target.value);
    }
     function LoginClick(){
        if(password==="password"){
            setPassword("")
        setCookie("username",username);
        Navigate("/categories");
        }else{
            Navigate("/error")
            alert(`your password is "password"`)
        }      
    }
    // function Logoutclick(){
    //     if (password==true){
    //         setCookie('username');
    //         Navigate("/login");
        
    //         }else{
    //         setCookie('');    
    //     }
    // }
     return (
        <div className="container-fluid">
          <h2>Login User</h2>
          <dl>
            <dt>User name</dt>
            <dd><input type="text" onChange={handlenamechange}/></dd>
            <dt>Password</dt>
            <dd><input type="password" onChange={handlepasschange}/></dd>
          </dl>
         <button className='btn btn-info' onClick={LoginClick}>Login</button>
          
          </div>

    )
}