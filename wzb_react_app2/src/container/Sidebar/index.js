import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Menu, Layout, Icon
} from 'antd';
import './index.less'

const {
  Sider,
} = Layout;

const { SubMenu } = Menu;

class SideBar extends Component {
    state = {
      collapsed: false,
    }
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

      render() {
        const pathname = window.location.pathname
        let defaultSelectedKeys = [pathname]
        let defaultOpenKeys = []
        if (pathname === '/networkManage' || pathname === '/networkManage/standardNetworkDevice') {
          defaultOpenKeys = ['architecturalResourceManagement', 'wulizuyuan', '/networkManage/standardNetworkDevice']
        } else if (pathname === '/' || pathname === '/server' || pathname === '/server/serverBaselineManage') {
          defaultSelectedKeys = ['/server/serverBaselineManage']
          // defaultSelectedKeys = ['/server/avlKpc']
          defaultOpenKeys = ['serverBaseline', 'serverBaselineManage', '/server/serverBaselineManage']
          // defaultOpenKeys = ['serverBaseline', 'serverBaselineManage', '/server/avlKpc']
        } else {
          this.props.data.forEach((item1) => {
            if (!item1.children) {
              if (pathname === item1.key) {
                defaultOpenKeys = [item1.key]
              }
            } else {
              item1.children.forEach((item2) => {
                if (!item2.children) {
                  if (pathname === item2.key) {
                    defaultOpenKeys = [item2.key, item1.key]
                  }
                } else {
                  item2.children.forEach((item3) => {
                    if (pathname === item3.key) {
                      defaultOpenKeys.push(item1.key)
                      defaultOpenKeys.push(item2.key)
                      defaultOpenKeys.push(item3.key)
                    }
                  })
                }
              })
            }
          })        
        }
        return (
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className="sideBar"
            width={222}
          >
            <div className="logo" />
            <div className="siderdiv">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </div>
            <Menu
              defaultSelectedKeys={defaultSelectedKeys}
              selectedKeys={defaultSelectedKeys}
              defaultOpenKeys={defaultOpenKeys}
              mode="inline"
              theme="dark"
            >
              {
                this.props.data.map((item) => {
                  if (!item.children) {
                    return (
                      <Menu.Item key={item.path}>
                        <NavLink to={item.path}>
                          <Icon type={item.icon} />
                          <span className="sidernamespan">{item.title}</span>
                        </NavLink>
                      </Menu.Item>
                    )
                  } else {
                    return (
                      <SubMenu
                        title={(
                          <span>
                            <Icon type={item.icon} />
                            <span className="sidernamespan">{item.title}</span>
                          </span>
                        )}
                        key={item.key}
                      >
                        {
                          item.children.map((firstChildMenu) => {
                            if (!firstChildMenu.children) {
                              return (
                                <Menu.Item key={firstChildMenu.path}>
                                  <NavLink to={firstChildMenu.path}>{firstChildMenu.title}</NavLink>
                                </Menu.Item>
                              )
                            } else {
                              return (
                                <SubMenu
                                  title={(
                                    <span>
                                      <Icon type={firstChildMenu.icon} />
                                      <span className="sidernamespan">{firstChildMenu.title}</span>
                                    </span>
                                  )}
                                  key={firstChildMenu.key}
                                >
                                  {
                                    firstChildMenu.children.map((two) => {
                                      if (!two.children) {
                                        return (
                                          <Menu.Item key={two.path}>
                                            <NavLink to={two.path}>{two.title}</NavLink>
                                          </Menu.Item>
                                        )
                                      } else {
                                        return (
                                          <SubMenu title={<span className="ant-menu-submenu-title-span">{two.title}</span>} key={two.key}>
                                            {
                                              two.children.map((three) => {
                                                return (
                                                  <Menu.Item key={three.path}>
                                                    <NavLink to={three.path}>{three.title}</NavLink>
                                                  </Menu.Item>
                                                )
                                              })
                                            }
                                          </SubMenu>
                                        )
                                      }
                                    })
                                  }
                                </SubMenu>
                              )
                            }
                          })
                        }
                      </SubMenu>
                    )
                  }
                })
              }
            </Menu>
          </Sider>
        );
      }
}

export default SideBar;