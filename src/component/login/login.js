import React from 'react';
import './login.css';

const styles = {
    padding: '5px',
    display:'block',
    margin:'auto',
    marginBottom: '10px'
};

const label_style = {
    padding: '5px',
    display:'block',
    marginBottom:'5px',
    margin:'auto',
    textAlign:'center'
};

const error_style = {
    padding: '5px',
    display:'block',
    marginBottom:'5px',
    margin:'auto',
    textAlign:'center',
    color:'red'
};


const login = (props)=> {
    return (<div className="loginForm">
        <label style={label_style} >Username:</label><input style={styles} placeholder='UserName'
                        value={props.username}
                        onChange={props.handleUsername} />
        <label style={label_style} >Password:</label>
            <input style={styles} placeholder='Password'
                        value={props.password}
                        onChange={props.handlePassword} />
        <button onClick={props.submit} style={styles} type='button'>Log in</button>
        <label style={error_style}>{props.error}</label>
    </div>);
};

export default login;
