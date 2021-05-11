import React,{useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen.js'
function LoginScreen() {
    const[signIn,setSignIn] = useState(false);
    return (
        <div className ="loginscreen">
            
            <div className ="loginscreen_background">
                <img   className ="loginscreen_logo"
                    src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt =""></img>
            </div>
            <button onClick ={() => setSignIn(true)}  className ="loginscreen_button">
                Sign In
            </button>\
            < div className="loginscreen_body">
                
                {signIn ? (<SignUpScreen />) 
                : (

                    <div className="loginscreen_input">
                    
                        <form>
                            <input type ="email"
                            placeholder ="Email Address"/>
                            <button onClick= {() =>setSignIn(true)} className ="loginscreen_getstarted">
                                GET STARTED
                            </button>
                        </form>
                    
                    </div>
                 )}
            </div>
        </div>
    )
}

export default LoginScreen
