import React, {useEffect}                       from 'react';
import './App.css';
import {onAuthStateChanged}                     from "firebase/auth";
import {auth}                                   from './firebase'
import HomeScreen                               from "./Screens/HomeScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen                              from "./Screens/LoginScreen";
import {useDispatch, useSelector}               from "react-redux";
import {login, logout, selectUser}              from "./features/userSlice";
import ProfileScreen                            from "./Screens/ProfileScreen";

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    console.log(user)
    useEffect(() => {
        console.log(user)
        const unsubscribe = onAuthStateChanged(auth, userAuth => {
            if (userAuth) {
                //Logged In
                console.log(userAuth)
                dispatch(login({
                                   uid: userAuth.uid,
                                   email: userAuth.email
                               }))
            } else {
                //Logged Out
                dispatch(logout())
            }
        })
        return unsubscribe;
    }, [dispatch])
    return (
        <div className="app">
            <Router>
                {!user ? (<LoginScreen/>) : (
                    <Switch>
                        <Route path={"/profile"}>
                            <ProfileScreen/>
                        </Route>
                        <Route exact path="/">
                            <HomeScreen/>
                        </Route>
                    </Switch>)}
            </Router>
        </div>
    );
}

export default App;
