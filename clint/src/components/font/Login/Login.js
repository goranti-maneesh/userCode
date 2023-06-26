import {Link ,useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import React , { useEffect, useState} from 'react';
import axios from 'axios';
const initial = {
    name:"",
    password:""
}

const Login = () => {

    const [state, setState] = useState(initial);

  const navigate = useNavigate()

    const handlerSubmit = (e) => {
        e.preventDefault();

           setTimeout(()=>{
            navigate('/home')
        },1000)
      }
    
    const handlerInput = (e) => {
        const {name,value} = e.target;
        setState({...state,[name]:value }); 
        
    }
    
    return(
        <div>
           <center> <h1>Add Contant</h1>
            <form onSubmit={handlerSubmit}>
                <label>name</label><br/>
                
                <input type="mail" name="price" id ="email"  value="" placeholder="mail" onChange={handlerInput} /><br/><br/>
                <label>contact</label><br/>
                <input type="password" name="password" id="password" value=""  placeholder="password" onChange={handlerInput} /><br/><br/>
                <input type='submit' value="submit" /><br />
                <Link to="/SignUp">
                    <input type='button' value="signUp" />
                </Link>
            </form></center>
        </div>
    )
}
export default Login;