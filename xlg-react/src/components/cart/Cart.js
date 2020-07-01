
import React, { Component } from 'react'
import "./Cart.scss"
// 引入图片

// import axios from "../../utils/axios"

export default class Cart extends Component {
    state={
        cart_list:[]//购物车商品列表
    }
    componentDidUpdate(){
        // 页面加载时
        // axios.get(url)
        // .then(res => {
        //     console.log(res)
        //     this.setState({
        //         cart_list:res.wdate
        //     })
        // })
        // .catch(err => {
        //     console.error(err); 
        // })
        

        
    }
    render() {
        return (
            <div className="cart">
                {/* 购物车导航开始 */}
                <div className="cart-header">
                <i className="icon icon-return"></i>
                <div className="title">购物车</div>
                <div className="text">编辑</div>
                </div>
                {/* 购物车导航结束 */}
                {/* 购物车列表开始 */}
                <div className="cart-list">
                    <div className="cart-item">
                        <div className="item-shop">
                            <i className="icon icon-radio"></i>
                            {/* // <img src={} alt=""/> */}
                            <div className="item-text">海绵包包</div>

                        </div>
                    </div>
                </div>

                {/* 购物车列表结束 */}
                
            </div>
        )
    }
}
