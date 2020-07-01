import React, { Component } from 'react'
import "./Login.scss"
import { withRouter } from "react-router-dom"

 class Login extends Component {
     handelRegister=(params) => {
         this.props.history.push("/register")
     }
     
    render() {
        return (
            <div className='loginin'> 
                <input type="text" placeholder="账号"/>
                <input type="text" placeholder="密码"/>
                <div className="login-btn">登录</div>
                <h5 onClick={this.handelRegister}>注册</h5>
            </div>
        )
    }
}
export default withRouter(Login)