import React, {useEffect} from 'react';
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'
import HomeScreen  from "./Screens/HomeScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
}                  from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";

function App() {
    const user = null

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,userAuth=>{
            if(userAuth){
                //Logged In
            }else{
                //Logged Out
            }
        })
        return unsubscribe;
    },[])
    return (
        <div className="app">
            <Router>
                {!user ? (<LoginScreen/>) : (
                    <Switch>

                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>
                    </Switch>)}
            </Router>
        </div>
    );
}

export default App;
