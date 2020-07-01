
import React, { Component } from 'react'
import "./Home.scss"
//引入轮播图插件
import Swiper from "swiper"
import "swiper/css/swiper.css"
import axios from '../../utils/axios'
//引入图片
import Nav01 from "../../images/nav01.png"
import Nav02 from "../../images/nav02.png"
import Nav03 from "../../images/nav03.png"
import Nav04 from "../../images/nav04.png"
import Nav05 from "../../images/nav05.png"
import customer01 from "../../images/customer01.jpg"
import customer02 from "../../images/customer02.jpg"
import customer03 from "../../images/customer03.jpg"
import customer04 from "../../images/customer04.jpg"
import Axios from 'axios'
export default class Home extends Component {
    constructor(props){
        super(props);
        const CancelToken=Axios.CancelToken;
        this.source = CancelToken.source();
    }
    state = {
        swiper_list:[],//轮播图列表
        // 促销商品列表
        goodslist:[],

    }
    componentWillUnmount(){
        // 组件销毁时
        console.log("卸载home组件")
        this.swiper = null;
        this.source.cancel("Operation canceled by the user.")
    }
    componentDidMount(){
        //加载的时候促销商品被请求到
        axios.get("getHotProducts")
        .then(res => {
            // console.log(res)促销商品
            this.setState({
                goodslist:res.wdata
            })
        })
        .catch(err => {
            console.error(err); 
        })
        //页面加载的时候发送请求拿到轮播图的数据
        axios.get("getIndexLoopimg")
        .then(res => {
            // console.log(res)
            this.setState({
                swiper_list:res.wdata
            },()=>{
                //配置使用的时候需要用到的操作数据的方法
                new Swiper('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            })
        })
        .catch(err => {
            console.error(err); 
        })


    }
    render() {
        return (
            <div className="home">
                {/* 顶部导航开始 */}
                <div className="header">
                    <i className="icon icon-menu"></i>
                    <span className="index-header-title">享乐购</span>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 顶部导航结束 */}
                {/* 轮播开始 */}
                <div className="xlg-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className="swiper-slide"> <img src={v.loopimg_url} alt="" /></div>)
                            }

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 轮播结束 */}
                {/* 首页导航开始 */}
                <div className="nav">
                    <div className="nav-list">
                        <div className="nav-item">
                            <img src={Nav01} alt=""/>
                            <span>大聚惠</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav02} alt=""/>
                            <span>海外购</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav03} alt=""/>
                            <span>超市百货</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav04} alt=""/>
                            <span>厂家直销</span>
                        </div>
                        <div className="nav-item">
                            <img src={Nav05} alt=""/>
                            <span>美食娱乐</span>
                        </div>
                    </div>
                </div>
                {/* 首页导航结束 */}
                {/* 用户列表开始 */}
                <div className="user">
                    <h1>商城客户</h1>
                    <div className="userlist">
                        <div className="userlist-item">
                            <img src={customer01} alt=""/>
                            <span>海绵包包</span>
                        </div>
                        <div className="userlist-item">
                            <img src={customer02} alt=""/>
                            <span>韩国代购</span>
                        </div>
                        <div className="userlist-item">
                            <img src={customer03} alt=""/>
                            <span>ARC潮店</span>
                        </div>
                        <div className="userlist-item">
                            <img src={customer04} alt=""/>
                            <span>欧力女装</span>
                        </div>
                    </div>

                </div>
                
                {/* 用户列表结束 */} 
                {/* 促销商品开始 */}
                <div className="goodstitle">
                    <h1>精选促销</h1>
                </div>
                <div className="goodslist">
                    {/* 循环拿到促销的商品项目 */}
                    {
                        this.state.goodslist.map((e,i)=>{
                            return (
                                <div className="goodslist-item" key={i}>
                                    <img src={e.product_url} alt=""/>
                                    <h1>{e.product_name}</h1>
                                    <div className="price">
                                    <span className="newprice">¥{e.product_price}</span>
                                    <span className="oldprice">¥{e.product_origin_price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* 促销商品结束 */}
                
            </div>
        )
    }
}
