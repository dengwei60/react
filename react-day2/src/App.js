import React, { Component,Fragment } from 'react'
//这里是以类声明的组件
// let state;
export default class App extends Component {
  /* 想要声明组件的状态state(它包含的就类似vue里面data声明的变量)有两种方式 */
  /* 第一种 属性 状态 类属性 */
  // state={
  //   num:0
  // }
  /* 第二种方法用es6的构造函数的形式 */
  constructor(props){
    //接收一个属性props
    console.log(props)
    /* 因为有继承属性一定要写super */
    // 首先要调用父类的初始化方法
    super(props);
    this.state = {
      // 这是它自身的状态
      num:0
    }
  }
  /* 既然这是组件的类,那么组件的方法就在里面来声明 */
  /* 匿名函数的简写 */
  handelClick=(e) => {
    console.log(e)
    //this.setState()的赋值是异步的
    // 但是 this.setState()允许设定一个回调函数,获取最新值

    this.setState({
      num:this.state.num + 1
    },() => {
      //回调函数中 this.state.num 是最新的值
      console.log(this.state.num)
    }
    ) 
  }
  

  render() {
    return (
      <Fragment>
        {/* react的 方法都是以驼峰式的写法嵌入到标签内部(要求)*/}
      <button onClick={this.handelClick}>点击</button><span>{this.state.num}</span>
      </Fragment>
    )
  }
}
