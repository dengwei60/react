/* 因为这里没有直接配路由所以需要用到高阶组件 */
import React, { Component } from 'react'
// 引入样式
import "./TabBar.scss"
// 高阶组件使其具有路由的功能传参
import{ withRouter} from "react-router-dom"

 class TabBar extends Component {
    state={
        activeTab:"home"
    }
    // 页面重新加载的时候
    componentDidMount(){
        // 页面的hash值是的改变也是window的location值
        // 重新加载的时候为了防止上面的hash值和下面的hash值不匹配需要在加载的时候尽心判断
        let activeTab = window.location.hash.split("/")[1]
        if(activeTab === "" || activeTab === "community" || activeTab === "cart" || activeTab === "my"){
            if(activeTab === ""){
                activeTab = "home"
            }
            this.setState({
                activeTab
            })
        }else{
            this.setState({
                activeTab:"home"
            })
        }
    }
    componentWillUnmount(){
        
    }
    // 点击事件
    handleTabChange=(tab) => {
        // console.log(tab)
        let obj = {
            "home":{
                path:"/"
            },
            "community": {
                path: "/community"
            },
            "cart": {
                path: "/cart"
            },
            "my": {
                path: "/my"
            }

        }
        //将路由路径配置好,因为使用了高阶组件使她具有了路由的配置功能
        this.props.history.push(obj[tab].path)
        //实时的修改当时的传参
        this.setState({
            activeTab:tab
        })
    }
    
    render() {
        return (
            <div className="tabbar">
                {/* 内容开始 */}
            <div className="content">
            {this.props.children}
            {/* 插槽 */}
            </div>
            {/* 内容结束 */}
            {/* 底部导航开始 */}
            <div className="footer">
                {/* 主页 */}
                <div className="home" onClick={this.handleTabChange.bind(this,"home")}>
                <i className={this.state.activeTab === "home" ? "icon icon-home-o" : "icon icon-home"}></i>
                <span className={this.state.activeTab === "home" ? "activeTab footer-item-title" : "footer-item-title"}>首页</span>
                </div>
                {/* 社区 */}
                <div className="community" onClick={this.handleTabChange.bind(this,"community")}>
                <i className={this.state.activeTab === "community" ? "icon icon-community-o" : "icon icon-community"}></i>
                <span className={this.state.activeTab === "community" ? "activeTab footer-item-title" : "footer-item-title"}>社区</span>
                </div>
                {/* 购物车 */}
                <div className="cart" onClick={this.handleTabChange.bind(this,"cart")}>
                <i className={this.state.activeTab === "cart" ? "icon icon-cart-o" : "icon icon-cart"}></i>
                <span className={this.state.activeTab === "cart" ? "activeTab footer-item-title" : "footer-item-title"}>购物车</span>
                </div>
                {/* 我的 */}
                <div className="my" onClick={this.handleTabChange.bind(this,"my")}>
                <i className={this.state.activeTab === "my" ? "icon icon-my-o" : "icon icon-my"}></i>
                <span className={this.state.activeTab === "my" ? "activeTab footer-item-title" : "footer-item-title"}>我</span>
                </div>
            </div>
            {/* 底部导航结束 */}
            </div>
        )
    }
}

export default withRouter(TabBar)