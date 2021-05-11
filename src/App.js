import React,{useEffect} from 'react';
import './App.css';
import Homescreen from './Homescreen.js';
import LoginScreen from './LoginScreen.js';
import {auth} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login,logout,selectUser} from './features/userSlice.js';
import ProfileScreen from './ProfileScreen.js'
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){ 
          
          dispatch(login({
            uid: userAuth.uid,
            email : userAuth.email,
          

          }));

      }else{
          dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch]);



  return (
    <div className="App">
      
      <Router>
        {!user?(
          <LoginScreen />
        ) : (
        <Switch>
          <Route path ='/profile'>
            <ProfileScreen/>

          </Route>
          <Route exact  path="/">
            <Homescreen />
          </Route>
        </Switch>
        )}      
    </Router>
    </div>
  ); 
}

export default App;
 /* 89a6b22ba0a1014bb517d584ee495b95 */