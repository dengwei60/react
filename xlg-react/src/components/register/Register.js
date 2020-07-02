import React, { Component } from 'react'
import "./Register.scss"
import { withRouter } from "react-router-dom"
import axios from "../../utils/axios"

 class Register extends Component {
     state={
         phone:"",//手机号码
         username:"",//用户名
         code:"",//验证码
         password:"",//密码
         count:60,//验证的秒数

         code_msg:"发送验证码",
     }
     timer = null
     timer1 = null
     //电话
     savePhone=(e) => {
         this.setState({
             phone:e.target.value
         })
     }
     //验证码
     saveCode=(e) => {
        this.setState({
            code:e.target.value
        })
    }
    //密码
    savePassword=(e) => {
        this.setState({
            password:e.target.value
        })
    }
    //检查电话
    checkUser=(mobile) => {
        let phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(mobile.length === 11){
            if(phone.test(mobile)){
                return true
            }
        }
    }
    //点击发送验证码的时候
    sendCode=(params) => {
        
        console.log("发送验证码")
        //首先验证电话号码是否正确
        let flag = this.checkUser(this.state.phone)? true : false
        //验证通过的时候请求并接收验证码
        console.log(flag)
        if(flag){
            if(!this.timer)
            console.log("号码可用")
            //为了不重复发送验证码我们需要节流
            if(!this.timer){
                axios.get("getMobileCode",{params:{
                    mobile:this.state.phone
                }})
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
                //执行节流，并在节流的时候处理数字
                this.timer = setTimeout(() => {
                    this.timer = null
                    //并清除计时器
                    clearInterval(this.timer1)
                    //数量重新为60
                    this.setState({
                        count:60
                    })
                }, 60000);
                this.timer1 = setInterval(() => {
                    this.setState({
                        count:this.state.count - 1
                    })
                }, 1000);
            }
           
        }
    }
    //注册账号
    handeRegister=(params) => {
        let username = this.state.phone
        let password = this.state.password
        let code = this.state.code
        if(!username || !password || !code){
            console.log("请输入正确信息")
        }
        axios.get("createUser",{params:{
            mobile:username,
            username:username,
            code:code,
            password:password
        }})
        .then(res => {
            console.log(res)
            if(res.ret === 0){
                console.log("注册成功")
                this.props.history.push("/login")
            }
        })
        .catch(err => {
            console.error(err); 
        })

        
    }
    
    
    
    
     
     handelLogin=(params) => {
         this.props.history.push("/login")
     }
     
    render() {
        return (
            <div className='login'> 
                <input type="number" placeholder="手机号" value={this.state.phone} onChange={this.savePhone}/>
                <div className="code">
                    <input type="number" placeholder="验证码" value={this.state.code} onChange={this.saveCode}/>
                <button className="code-text" onClick={this.sendCode}>{this.timer?this.state.count + "秒" : this.state.code_msg}</button>
                </div>
                <input type="number" placeholder="密码" value={this.state.password} onChange={this.savePassword}/>
                <div className="login-btn" onClick={this.handeRegister}>注册</div>
                <h5 onClick={this.handelLogin}>登录</h5>
            </div>
        )
    }
}
export default withRouter(Register)