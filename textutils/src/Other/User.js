import React from 'react';

export default function User(props){
    if(props.user.firstName === 'Aaranyak' && props.user.lastName === "Santra"){
        return <p>Welcome back to system {props.user.firstName} {props.user.lastName}</p>
    }
    else{
        return <p>Welcome back Stranger</p>
    }
}
