import React, { Component } from 'react'
//高阶组建渲染成为可跳转的路由组建
import "../product/product.scss"
import { withRouter } from "react-router-dom"
import axios from "../../utils/axios"
import tel from "../../images/tel.png"

 class Product extends Component {
    state = {
        productDetail: {}
    }
    pid=null
    //回退到主页
    back=(params) => {
        this.props.history.go("-1")
    }
    //进入支付界面
    pay=(params) => {
        this.props.history.push("/pay")
        
    }
    
    //加入购物车
    addToCart=(params) => {
        axios.post("updateCarts",{
            //通过传入的参数可以进行新增产品的操作

            productNumber:1,pid:this.pid,action:"add"
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
        
    }
    
    componentDidMount(){
        console.log(this.props)
        //通过id发送请求并拿到页面需要的内容渲染页面
        this.pid = this.props.match.params.id || "";
        axios.get("getProductDetail",{
            params:{
                pid:this.pid
            }
        })
        .then(res => {
            console.log(res)
            this.setState({
                productDetail:res.wdata
            })
        })
        .catch(err => {
            console.error(err); 
        })

    }
    render() {
        return (
            <div className="yg-product">
                {/* 产品详情导航的开始 */}
                <div className="yg-product-header" onClick={this.back}>
                    <i className="icon icon-return"></i>
                    <span className="yg-product-title">产品详情</span>
                    <span> &nbsp; </span>
                </div>
                {/* 产品详情导航的结束 */}
                {/* 产品详情内容开始 */}
                <div className="yg-product-content">
                    <div className="product-content-url">
                        <img src={this.state.productDetail.product_url} alt="" />
                    </div>
                    <div className="product-content-desc">
                        <div className="product-content-name">
                            {this.state.productDetail.product_name}
                        </div>
                        <div className="product-content-price">
                            <span className="content-price-now">
                                ¥{this.state.productDetail.product_price}
                            </span>
                            <span className="content-price-origin">
                                {this.state.productDetail.product_origin_price}
                            </span>
                        </div>

                    </div>
                    {/* 选择规格开始 */}
                    <div className="product-content-spec">
                        <span>选择规格</span>
                        <i className="icon icon-select"></i>
                    </div>
                    {/* 选择规格结束 */}
                    {/* 电话开始 */}
                    <div className="product-content-tel">
                        <img src={tel} alt=""/>
                        <span className="content-tel-number">{this.state.productDetail.call}</span>
                    </div>
                    {/* 电话结束 */}
                   <div className="content-img" dangerouslySetInnerHTML={{__html:this.state.productDetail.product_desc}}></div>
                </div>
                {/* 产品详情内容结束 */}
                <div className="yg-product-tool">
                    <div className="product-tool-left">
                        <em>2</em>
                        <i className="icon icon-scar"></i>
                    </div>
                    <div className="product-tool-right">
                        <div className="tool-right-add" onClick={this.addToCart}>
                            加入购物车
                        </div>
                        <div className="tool-right-buy" onClick={this.pay}>
                            立即购买
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Product)
