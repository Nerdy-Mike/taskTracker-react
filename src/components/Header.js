//Files with Uppercase at the first letter is a convention for components.
//rafce Enter with ES7 extension
import PropTypes from 'prop-types'; 
import React from 'react';
import Button from './Button';
import {useLocation} from 'react-router-dom';
//use Location allow us to look at the route that we are currently on

const Header = ({title, onAdd, showAdd}) => {

    let location =useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
             color={showAdd ? "gray": "black"} 
             text= {showAdd ? "Close" : "Add"} 
             onClick = {onAdd} //there are many other events that you can add double-click, summit,..
             />}
        </header>
        
    )
}

Header.defaultProps ={
    title: "Task tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
//Header is the file name

