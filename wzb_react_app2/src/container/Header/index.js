import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'antd'
import './index.less'
// import loginman from '../../images/login-man.png'
// import alilog1 from '../../images/ali-log1.png'
// import alilog2 from '../../images/ali-log1.png'
// import MenuItem from 'antd/lib/menu/MenuItem';
// import { logout } from '../../service/bucsso';

class Header extends Component {
  // 添加逻辑 - 模态框取消
  test = () => {
    // window.open("http://11.162.4.222:9090/", '_blank');
    window.open("https://hstest.aliyun-inc.com", '_blank');
  }

  render() {
    console.log('hello');
    // const pathname = window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : 'server';
    let userName = localStorage.userName; // 魏占彪
    let userLoginName = localStorage.userLoginName // wb-wzb308601

    const menu = (
      <Menu>
        <Menu.Item disabled>
          <Icon type="user" />{ userName }
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />{ userLoginName }
        </Menu.Item>
        {/* <Menu.Item onClick={logout}> */}
        <Menu.Item>
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="header">
        <div className="ali-logo">
          {/* <img src={alilog1} className="aaa" alt="" />
          <img src={alilog2} className="bbb" alt="" /> */}
        </div>
        <div className="logo">混合云基础系统平台</div>
        
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={[pathname]}
          // selectedKeys={[pathname]}
          style={{ lineHeight: '56px', float: 'left', width: 600 }}
        >  
          <Menu.Item key="基础系统"><NavLink to="/os">基础系统</NavLink></Menu.Item>
          <Menu.Item key="yum自动化"><NavLink to="/yum">yum自动化</NavLink></Menu.Item>
          <Menu.Item key="质量平台"><NavLink to="/quality">基础系统质量平台</NavLink></Menu.Item>
          <Menu.Item key="质量平台" onClick={this.test}>基础系统质量平台</Menu.Item>
        </Menu>
  
        <Dropdown overlay={menu}>
          <div className="userInfo">
            {/* <img src={loginman} className="avatar" alt="" /> */}
            <span>{userName}</span>
            <Icon type="down" />
          </div>
        </Dropdown>

      </div>
    );
  }
}

export default Header;