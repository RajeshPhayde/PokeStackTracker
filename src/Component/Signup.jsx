import { useEffect, useRef, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Signup = () => {
   
    let n = useNavigate();

    let uname = useRef();
    let mail = useRef();
    let pwd = useRef();
    let confirmPwd = useRef();
    let phone = useRef();

    let [verified, setverified] = useState(false);
    let [wrongpass, setWrongpass] = useState(false);

    let verifyEmail = ()=>{
        // const url = `https://zerobounce1.p.rapidapi.com/v2/validate?api_key=%20996f1995b5994633aee4497659c7bed0&email=${mail.current.value}`;
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '747e0c9d5amsh6745270a1292c5fp18dfdfjsn688e39148ab0',
        //         'X-RapidAPI-Host': 'zerobounce1.p.rapidapi.com'
        //     }
        // };

        // fetch(url, options)
        // .then((res)=>{ return res.json() })
        // .then((data)=>{ console.log(data.status);
        //     if(data.status=="valid"){
        //         setverified(true);
        //     }
        //     else{
        //         alert("Invalid email... Please enter valid email");
        //         setverified(false);
        //     }
        // })
        setTimeout(()=>{
            setverified(true);
            alert("Email verified...!");
        }, 2000)

    }

    let handleSignup = (e)=>{
        e.preventDefault();

        localStorage.setItem("userDetails", "[]");
        
        let user = {
            username : uname.current.value,
            email : mail.current.value,
            password : pwd.current.value,
            phone : phone.current.value
        }

        if(pwd.current.value != confirmPwd.current.value)
        {
            setWrongpass(true);
            confirmPwd.current.value = "";
            return;
        }
        else{
            localStorage.setItem("userDetails", JSON.stringify(user))
            n("/");
        }
    }

    return ( 
        <section>
            <div className="account">
            <h1>PokéStatsTracker</h1>
            <form onSubmit={handleSignup}>
                <input id="inp" type="text" placeholder="Enter Username" required ref={uname}/>
                <input id="inp" type="email" placeholder="Enter email id" required ref={mail}/>
                <input id="inp" type="password" placeholder="Enter Password" required ref={pwd}/>
                <input id="inp" type="password" placeholder="Re-Enter Password" required ref={confirmPwd}/>
                {wrongpass && <span id="pwd-mis">*** Password Missmatch</span>}
                <input id="inp" type="tel" minLength={10} maxLength={10} placeholder="Enter Contact number" required ref={phone}/>

                <input id="submit" type="submit" value="Signup" disabled={verified==false ? true : false}/>
                <br />
                <span style={{color : "red" ,fontWeight : 700 , fontSize : "large"}}>Already have an account? 
                    <Link to="/"><span style={{color : "white"}}>Sign in</span></Link>
                </span> 
                </form>
                <button onClick={verifyEmail} className="verify-btn">Verify email</button>
            </div>
        </section>
     );
}
 
export default Signup;