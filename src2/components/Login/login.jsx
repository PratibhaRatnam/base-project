import React, {Component} from 'react';

export class Login extends Component{
    render(){
        return(<div className="base-container">
            <div className="header">Login</div>
            <div className="content">

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login  </button>
            </div>

        </div>);
    }
}       