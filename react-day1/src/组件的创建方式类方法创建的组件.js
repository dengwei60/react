
import React, { Component } from 'react'
/* 类组件 */
/* 引入react,需要继承的组件 componet */
class App extends Component {
  //通过es6的方式声明 组件的名要大写
  render() {
    // 必须要有一个render函数
    return (
      //html的内容要通过return返回出来
      <div>
        123
      </div>
    )
  }
}
//再导出这组件
export default App

