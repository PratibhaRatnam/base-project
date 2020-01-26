import React from 'react';
import auth from './auth'
import {Link} from 'react-router-dom'


const AppLayout = (props) =>{
    
    console.log(auth.authonticated)
    return(
  <div>
      <h3>App Layout</h3>
      <button onClick={()=>{
          auth.logout(()=>{
              props.history.push('/')
          })
      }}>Logout</button>

      <br/>
      <Link to='/sample'><button>dummy</button></Link>
      
  </div>
    )
}

export default AppLayout;