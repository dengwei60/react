
import React, { Component } from 'react'
import "./My.scss"
//引入图片
import user from "../../images/user.jpg"
import user_bg from "../../images/user_bg.png"
import order from "../../images/order.png"
import collect from "../../images/collect.png"
import service from "../../images/service.png"
import about from "../../images/about.png"
import set from "../../images/set.png"
//变为可路由
import { withRouter } from "react-router-dom"

 class My extends Component {
    state = {
        isLogin:false //判断的登录状态
    }
    handellogin=(params) => {
        this.props.history.push("/login")
    }
    
    render() {
        return (
            <div className="my"> 
            
            {/* 登录头部开始 */}
                <div className="my-top">
                {
                    this.state.isLogin ?
                    <div className="info"> 
                        <img src={user_bg} className="top-user-bg"/>
                            <div className="user-box">
                                <img src={user} className="top-user"/>
                            </div>  
                    </div> :
                    <div className="uninfo"> 
                        <img src={user_bg} className="top-user-bg"/>
                        <div className="logininfo" onClick={this.handellogin}>
                            登录
                        </div>
                    </div>
                     
                    }
                </div>
            {/* 登录头部结束 */}
            {/* 我的订单栏开始 */}
                <div className="my-list">
                    <div className="my-list-left">
                        <img src={order} alt=""/>
                        <span className="my-list-left-text">我的订单</span>
                    </div>
                    <div className="my-list-right">
                        <span className="my-list-right-text">查看所有的订单</span>
                        <i className="icon icon-select"></i>
                    </div>
                </div>
            {/* 我的订单栏结束 */}
            {/* 功能菜单栏开始 */}
            <div className="my-fun">
                <div className="my-fun-item">
                    <i className="icon icon-pay"></i>
                    <div className="my-fun-item-text">待付款</div>
                </div>
                <div className="my-fun-item">
                    <i className="icon icon-recieve"></i>
                    <div className="my-fun-item-text">待收货</div>
                </div>
                <div className="my-fun-item">
                    <i className="icon icon-recieve-good"></i>
                    <div className="my-fun-item-text">已收货</div>
                </div>
                <div className="my-fun-item">
                    <i className="icon icon-cancel"></i>
                    <div className="my-fun-item-text">已取消</div>
                </div>
                <div className="my-fun-item">
                    <i className="icon icon-aftersale"></i>
                    <div className="my-fun-item-text">售后</div>
                </div>
            </div>
            {/* 功能菜单栏开始 */}
            {/* 底部功能栏开始 */}
            <div className="my-bottom">
                <div className="my-bottom-item">
                    <div className="my-bottom-item-left">
                        <img src={collect} alt=""/>
                        <div className="my-bottom-item-left-text">我的收藏</div>
                    </div>
                    <div className="my-bottom-item-right">
                        <div className='my-bottom-item-right-text'>2</div>
                        <i className="icon icon-select"></i>
                    </div>
                </div>
                <div className="my-bottom-item">
                    <div className="my-bottom-item-left">
                        <img src={service} alt=""/>
                        <div className="my-bottom-item-left-text">联系客服</div>
                    </div>
                    <div className="my-bottom-item-right">
                        <i className="icon icon-select"></i>
                    </div>
                </div>
                <div className="my-bottom-item">
                    <div className="my-bottom-item-left">
                        <img src={about} alt=""/>
                        <div className="my-bottom-item-left-text">关于我们</div>
                    </div>
                    <div className="my-bottom-item-right">
                        <i className="icon icon-select"></i>
                    </div>
                </div>
                <div className="my-bottom-item">
                    <div className="my-bottom-item-left">
                        <img src={set} alt=""/>
                        <div className="my-bottom-item-left-text">设置</div>
                    </div>
                    <div className="my-bottom-item-right">
                        <i className="icon icon-select"></i>
                    </div>
                </div>
            </div>
            {/* 底部功能栏结束 */}
            </div>
        )
    }
}
export default withRouter(My)