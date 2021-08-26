import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import SideBar from '../../container/Sidebar'

// import SarFileUpload from './component/SarFileUpload'
// import SarUploadInfo from './component/SarUploadInfo'
// import SarAnalysis from './component/SarAnalysis'
import Hello from './component/Hello'

import './index.less'

class OS extends Component {
  constructor() {
    super()
    this.state = {
      menu_flag: false,
    }
  }

  componentDidMount() {
    // console.log(this.props)
    if ((this.props.location.pathname.indexOf('os') >= 0)
      && this.props.location.search) {
      this.setState({
        menu_flag: true
      })
    }
  }
  
  render() {
    const sideBarData = [];
    
    sideBarData.push({
      title: '性能分析',
      key: 'sar_file',
      path: '/os/handerinfo',
      children: [
        {
          title: '上传数据文件', key: '/os/sarFileUpload', path: '/os/sarFileUpload'
        },
        {
          title: '上传记录', key: '/os/sarUploadInfo', path: '/os/sarUploadInfo'
        }
      ]
    })

   
    return (
      <div className="content">
        {
          this.state.menu_flag ? null
            : <SideBar data={sideBarData} />
        }
        <div className="commonCent os">
          <Switch>
            <Route path="/os/sarFileUpload" component={Hello} />
            {/* <Route path="/os/sarUploadInfo/linkin/sarAnalysis/:id" component={SarAnalysis} /> */}
            {/* <Route path="/os/sarUploadInfo" component={SarUploadInfo} /> */}
            <Redirect to="/os/overview" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default OS;