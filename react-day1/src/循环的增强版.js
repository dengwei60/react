import React, { Component,Fragment } from 'react'
// import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
let arr = ['a','b','c','d','e']

export default class App extends Component {
  render() {
    return (
      /* 行注释 */
      // 单行注释
      <Fragment>
        {/* <div>
        我在学习react
      </div> */}
      {/* 在react里面的插值方式是用单一的大括号来包裹 */}
      {/* 不同于vue的插值语法,切记 */}
      <div className="navs">
        {
          arr.map((e,i) => <div key={i} className="itme">{e}</div>)
          // 这里的循环里面一定要记住配一个语法糖
        }
      </div>
      </Fragment>
    )
  }
}
