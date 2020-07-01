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
    //获取这个用途我们可以后面操作其他的用途
    // 在react里面,更新转个爱状态必须要用方法去更新(双向数据绑定)
    /* 他更新的属性的方法是通过this.setstate(方法来进行修改的),小程序类似,
    不可以直接用this.state. 属性来进行修改*/
    // 通过对象来改变state的值
    // this.setState({
    //   num:++this.state.num
    // })
    /* 也可以通过函数来改变,里面有两个固定的参数第一个参数:表示过去的state状态,
    第二个参数表示:传入的参数 */
    this.setState((prestae,props) => {
      return {
        num:prestae.num + 1
      }
    })
    
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
