import React, { Component,Fragment } from 'react'
// import ReactDOM from 'react-dom';
import "./App.css"

// let a = "张三"
const props = {
className:"redCls",
"data-index":1
}



export default class App extends Component {
  render() {
    return (
      /* jsx的属性 他的语法糖里面因为是类组件所以,不能直接使用class关键字
      需要用classname来添加类名*/
    <Fragment>
      <div className="redCls">红色的字体</div>
      {/* lebal中的for 变成了 htmlFor */}
      <label htmlFor="name">
      姓名:
      <input type="text" id="name"></input>
      </label>
    {/* data 属性 */}
    <div data-num={1}>data属性的设置</div>
    {/* 渲染html标签(相当于v-html) 这里是用双花括号括起来切记*/}
    <div dangerouslySetInnerHTML={{__html:"<li>我是要插入的html</li>"}}></div>
    {/* 通过解构赋值和拓展运算符 ,传递多个属性(props) */}
      <div {...props}></div>
      {/* 如果是表单控件,里面的选中与否属性一定是通过插入的true和false来进行判定的 */}
      <input type="checkbox"  checked={true}/><span>选择</span>
      {/* 通过style的方式添加上样式
      注意在这里的语法糖也是用双花括号的方式包裹行内样式 */}
      <h1 style={{color:"red",fontSize:"60px",}}>我叫react</h1>
    </Fragment>
    )
  }
}
