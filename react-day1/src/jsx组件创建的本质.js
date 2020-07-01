
import React, { Component } from 'react'
/* 创建组件的本质是:React.createElement */

export default class App extends Component {
  render() {
    /* jsx的本省就是一种语法糖
    类似于document.creatElement
    语法糖的里面传递的是3个参数
    1:第一个参数接收的是标签的名字
    2:第二个参数接收的的标签的  {属性} 
    3:第三个参数传递的是组件的内容(内容可以是文本,也可以是数组(里面套的组件
      它会默认的解析数组并展示组件的内容))*/
    return (
      /* React.createElement("div",{},'123') 第一种情况*/
      React.createElement("div",{key:"1"},[
        React.createElement("h1",{key:"1"},"我要去"),
        React.createElement("h2",{key:"1"},"面试了")
      ])
    )
  }
}

