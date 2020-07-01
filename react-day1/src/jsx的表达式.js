import React, { Component,Fragment } from 'react'
// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
import "./App.css"
// let arr = ['a','b','c','d','e']
let a = "张三"
//  let isboy = false
//  function change(msg){
//    return `${msg}的信息来了`
//  }
// let obj = {
//   name:"张三"
// }
let arr_html= [<div>{a}</div>,<h1>2</h1>,<h2>3</h2>]


export default class App extends Component {
  render() {
    return (
      /* 多行注释 */
      // 单行注释
      /* jsx
      中的表达式 */
      // 普通的字符
      /* <Fragment>
       <div>🙂</div>
      </Fragment> */
      //也可以用插值表达式,以语法糖单花括号内直接引入变量名的方式引入
    // <Fragment>{a}</Fragment>
    /* 插入表达式:可以直接在语法糖内加入可做运算符操作的表达式,这样可以直接计算出
    表达式的结果渲染在界面
     */
    // <Fragment>{1+1}</Fragment>
    /* 也可以直接插入布尔值,一定要在语法糖里面进行书写true或者false, */
    // <Fragment>{true}或者{false}</Fragment>
    /* 也可以插入三木运算表达式 */
    // <Fragment>{isboy ? "男":"女"}</Fragment>
    /* 也可以插入函数 */
    // <Fragment>{change("张三")}</Fragment>
    /* 也可以插入对象 ,不可以直接渲染对象到页面,要渲染的是对象的键对应的值*/
    // <Fragment>{obj.name}</Fragment>
    /* 也可以直接渲染数组 ,他会直接将数组去括号和逗号并渲染到页面(默认的使用了拓展运算符...)*/
    // <Fragment>{arr}</Fragment>
    /* 因为这里会默认的解析html标签.也可以有如下的用法 */
    <Fragment>{arr_html}</Fragment>
    )
  }
}
