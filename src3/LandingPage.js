import React from 'react';
import auth from './auth'

const LandingPage = props =>{
    return(
        <div>
           <h1> Landing page</h1>
            <button onClick={
                ()=>{
                auth.login(()=>{
                    props.history.push('/app')
                })
            }}>
            onClick
            </button>
            </div>
    )
}

export default LandingPage;

