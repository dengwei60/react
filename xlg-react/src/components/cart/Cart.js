
import React, { Component } from 'react'
import "./Cart.scss"
// 引入图片
import shopLogo from "../../images/cart_logo.png"
import productPic from "../../images/product_pic.png"

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
                        {/* 店招开始*/}
                        <div className="item-shop">
                            <i className="icon icon-radio"></i>
                            <img src={shopLogo} alt=""/>
                            <div className="item-text">海绵包包</div>
                        </div>
                        {/* 店招结束*/}
                        {/* 购物车的内容开始 */}
                        <div className="item-content">
                            <div className="left">
                                <img src={productPic} alt=""/>
                            </div>
                            <div className="des">
                                <div className="des-title">首款海绵包包</div>
                                <div className="des-color">颜色:黑色</div>
                                <div className="bottom">
                                    <div className="bottom-price">¥68.00</div>
                                    <div className="bottom-right">
                                        <i className="icon icon-sub"></i>
                                        <span className="content-right-num">1</span>
                                        <i className="icon icon-add"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 购物车的内容结束 */}
                    </div>
                </div>
                {/* 购物车列表结束 */}
                {/* 底部功能栏开始 */}
                <div className="cart-footer">
                    <div className="footer-left">
                        <div className="footer-left-text">合计:¥136.00</div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-pay">去结算</div>
                    </div>
                </div>
                {/* 底部功能栏结束 */}
            </div>
        )
    }
}
