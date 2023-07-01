import { useRef} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    
    let email = useRef();
    let pwd = useRef();

    let navigate = useNavigate();

    
    let login = (e)=>{
        e.preventDefault();
        
        let user = JSON.parse(localStorage.getItem("userDetails"));
    
        console.log(user);

        if(user.email == email.current.value && user.password == pwd.current.value){
            alert(`Welcome ${email.current.value}`);
            localStorage.setItem("login" , JSON.stringify(user));
            navigate("/main");
        }
        else{
            alert(`User ${email.current.value} not found`)
        }

        // if(users == undefined){
        //     alert("User doesn't exist...!!!");
        //     user.current.value = "";
        //     pwd.current.value = "";
        // }
        // else if(users.password === pwd.current.value)
        // {
        //     alert(`Welcome ${user.current.value}`);
        // }
        // else{
        //     alert(`Incorrect password. Please try again...`);
        //     localStorage.setItem("userdatails" , JSON.stringify(users));
        //     pwd.current.value = "";
        // }
    }


    return ( 
       <section>
             <div className="account">
            <h1>PokéStatsTracker</h1>
            <form onSubmit={login}>
                <input id="inp" type="email" placeholder="Enter Email / Phone" required ref={email}/>
                <input id="inp" type="password" placeholder="Enter Password" required ref={pwd}/>
                <input id="submit" type="submit" value="Login" />
                <br />
                <span>
                    <Link to="/signup">Create account</Link> 
                </span>
            </form>
            </div>
       </section>
     );
}
 
export default Login;