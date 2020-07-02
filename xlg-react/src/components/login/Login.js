import React, { Component } from 'react'
import "./Login.scss"
import { withRouter } from "react-router-dom"
import axios from "../../utils/axios"


 class Login extends Component {
     state={
         username:"",
         password:""
     }
     handelRegister=(params) => {
         this.props.history.push("/register")
     }
     savePassword=(e) => {
         this.setState({
             password:e.target.value
         })
     }
     saveUsername=(e) => {
        this.setState({
            username:e.target.value
        })
    }
     
     handelHome=(params) => {
         
        let username = this.state.username
        let password = this.state.password
        if(!username || !password){
            console.log("账号密码输入不正确")
        }
        axios.get("loginCheck",{
            params:{
                username,
                password
            }
        })
        .then(res => {
            console.log(res)
            console.log("账号正确")
            localStorage.setItem("userInfo",JSON.stringify(res.wdata))
            this.props.history.push("/my")
            
        })
        .catch(err => {
            console.error(err); 
        })

         
     }
     
     
    render() {
        return (
            <div className='loginin'> 
                <input type="number" placeholder="账号" value={this.state.username} onChange={this.saveUsername}/>
                <input type="password" placeholder="密码" value={this.state.password} onChange={this.savePassword}/>
                <div className="login-btn" onClick={this.handelHome}>登录</div>
                <h5 onClick={this.handelRegister}>注册</h5>
            </div>
        )
    }
}
export default withRouter(Login)