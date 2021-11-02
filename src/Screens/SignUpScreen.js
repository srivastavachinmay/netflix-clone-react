import React, {useRef} from 'react';
import {auth} from '../firebase'
import './SignUpScreen.css'

const SignUpScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
      e.preventDefault();
        auth.createUserWithEmailAndPassword()

    }

    const signIn = (e) => {
      e.preventDefault();

    }

    return (
        <div className={'signupScreen'}>
            <form>
                <h1>Sign In</h1>
                <input placeholder={"Email"} type={'email'}/>
                <input placeholder={'Password'} type={'password'}/>
                <button type={"submit"} onClick={signIn}>Sign In</button>
                <h4>
                    <span className={'signupScreen__gray'}>New to Netflix? </span>
                    <span className={'signupScreen__link'} onClick={register}>Sign Up now</span>
                </h4>
            </form>
        </div>
    );
};

export default SignUpScreen;