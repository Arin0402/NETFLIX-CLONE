import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav.js'
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice.js';
import { auth } from './firebase';

function ProfileScreen() {

    const user  = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className ="profileScreen_body">
                <h1> Edit Profile</h1>
            
                <div className ="profileScreen_info">
                    <img
                        src ="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
                        alt ="avatar" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3> Current Plans</h3>


    {/* #1 */}        <div className="profileSCreen_plan"> 
                            <div className ="plan_description">
                                <h2> Premium</h2>
                                <h4>1080HD</h4>
                            </div>
                            
                            
                            <button> subscribe</button>
                        </div> 

    {/* #2 */}          <div className="profileSCreen_plan">
                                <div className ="plan_description">
                                    <h2> Premium</h2>
                                    <h4>4K</h4>
                                </div>
                                
                                
                                <button> subscribe</button>
                        </div>

                        <div className="profileSCreen_plan">
                                <div className ="plan_description">
                                    <h2> Premium</h2>
                                    <h4>720px +HDR</h4>
                                </div>
                                
                                
                                <button> subscribe</button>
                        </div>

                        <div className="profileSCreen_plan">
                                <div className ="plan_description">
                                    <h2> Premium</h2>
                                    <h4>480PX</h4>
                                </div>
                                
                                
                                <button> subscribe</button>
                        </div>  


                        <button 
                            onClick ={() => auth.signOut()}
                            className="profileScreen_signOut">
                            Sign Out
                        </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
