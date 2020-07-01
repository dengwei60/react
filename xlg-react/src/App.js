import React from 'react';
/* 1,引入对应的sass文件(默认的后缀名是.scss) */
import './App.scss';
//引入需要的组件(将hashrouter别名为router使用)
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Community from './components/community/Community';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import My from './components/my/My';
import TabBar from './components/tabbar/TabBar';
import Category from './components/category/Category';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  /* 这里要使每个里面都有tabbar就在组件的时候配合插槽使用*/
  return (
    <div className="App">
      <Router>
        {/* 重定向的时候需要Switch */}
        <Switch>
        <Route exact path="/" render={()=><TabBar><Home></Home></TabBar>}></Route>
        <Route exact path="/community" render={()=><TabBar><Community></Community></TabBar>}></Route>
        <Route exact path="/cart" render={()=><TabBar><Cart></Cart></TabBar>}></Route>
        <Route exact path="/my" render={()=><TabBar><My></My></TabBar>}></Route>
        <Route exact path="/category" render={()=><Category></Category>}></Route>
        <Route exact path="/login" render={()=><Login></Login>}></Route>
        <Route exact path="/register" render={()=><Register></Register>}></Route>
        <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
