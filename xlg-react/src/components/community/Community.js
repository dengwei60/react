
import React, { Component } from 'react'
//引入样式
import "./Community.scss"
//引入图片
import user from "../../images/user.jpg"
import user01 from "../../images/user01.png"
import user02 from "../../images/user02.png"
import user03 from "../../images/user03.png"
export default class Community extends Component {
    render() {
        return (
            <div className="community">
                {/* 社区导航开始 */}
                <div className="header">
                <i className="icon icon-return"></i>
                <h1>社区</h1>  
                <i className="icon icon-addCommunity"></i>
                </div>
                {/* 社区导航结束 */}
                {/* 社区列表开始 */}
                <div className="community-list">
                    <div className="item">
                        <div className="item-header">
                            <img src={user} alt=""/>
                            <span>我是郭小帅</span>
                            <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                        </div>
                        <div className="content">
                            <div className="content-item">
                                <img src={user01} alt=""/>
                            </div>
                            <div className="content-item">
                                <img src={user02} alt=""/>
                            </div>
                            <div className="content-item">
                                <img src={user03} alt=""/>
                            </div>
                        </div>
                        <div className="footer-item">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </div>
                </div>
                
                {/* 社区列表结束 */}
                
            </div>
        )
    }
}
