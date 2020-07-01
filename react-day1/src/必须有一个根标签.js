import React, { Component,Fragment } from 'react'
/* rcc定义了一个方法生成一个类组件 */


export default class  APP extends Component {
    //定义 了一个render方法 返回我们组件中的html 的内容
    render() {
        return (
            // 这里的react语法糖可以直接跟'字符串'
            // return "1123"
            // 也可以直接标签,
            // return <div>123</div>,但是这里的div其实是一个内容的根标签
            //这里结合vue的知识点所有的组件都配有一个根标签template一样
            //这里的标签fragment相当于vue里面的template标签
            //然后里面可以用html的格式来输入想要的html的内容
            <Fragment>
                <div>我是第一步</div>
            </Fragment>
        )
    }
}
