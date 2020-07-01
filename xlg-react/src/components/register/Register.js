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
                <input type="text" placeholder="账号"/>
                <input type="text" placeholder="密码"/>
                <div className="login-btn">注册</div>
                <h5 onClick={this.handelLogin}>登录</h5>
            </div>
        )
    }
}
export default withRouter(Register)