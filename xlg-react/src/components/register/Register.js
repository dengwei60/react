import React, { Component } from 'react'
import "./Register.scss"
import { withRouter } from "react-router-dom"

 class Register extends Component {
     handelLogin=(params) => {
         this.props.history.push("/login")
     }
     
    render() {
        return (
            <div className='login'> 
                <input type="number" placeholder="手机号"/>
                <div className="code">
                    <input type="number" placeholder="验证码"/>
                    <button className="code-text">发送验证码</button>
                </div>
                <input type="number" placeholder="密码"/>
                <div className="login-btn">注册</div>
                <h5 onClick={this.handelLogin}>登录</h5>
            </div>
        )
    }
}
export default withRouter(Register)