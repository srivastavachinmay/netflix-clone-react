import React, {useEffect, useState} from 'react';
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className={'nav__contents'}>
                <img
                    className={'nav__logo'}
                    src={'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'}
                    alt={'Netflix Logo'}/>
                <img className={'nav__avatar'}
                     src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t8L5Dt5Mh7la3Upv6L7bSRkUxLBkELmU84CSLcUbkY64AevRv5nthfdMup6aG38WMlY&usqp=CAU'}
                     alt={'Avatar'}/>
            </div>
        </div>
    );
};

export default Nav;