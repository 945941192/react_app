import React, { Component } from 'react';
import {
  Table, 
  // Modal, 
  Input,
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment'

// import { getSarTableInfo } from '../../../../service/os';
import './index.less';

// const { TextArea } = Input;
const Search = Input.Search;

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_info: [],
      table_info_all: [],
    }
  }

  // 获取数据
  getTableInfo = () => {
    // getSarTableInfo().then((obj) => {
    //   let data = obj.data;
    //   this.setState({
    //     table_info: data,
    //     table_info_all: data,
    //   })
    // }).catch((error) => {
    //   console.log(error)
    // })
  }

  // 渲染组件数据
  componentDidMount() {
    this.getTableInfo()
  }

  // 模糊查询
  searchdata = (e) => {
    // let search = e.target.value
    // const { table_info_all } = this.state;
    // let newtabledata = [];
    // // console.log(search)
    // if (search !== '') {
    //   // 循环拼接数据
    //   for (let i = 0; i < table_info_all.length; i++) {
    //     let checkItemObj = table_info_all[i]
    //     let str = Object.values(checkItemObj).join('')
    //     // console.log(str)
    //     // 如果search 在str中，push global list
    //     if (str.indexOf(search) != -1) {
    //       console.log(checkItemObj)
    //       newtabledata.push(checkItemObj)
    //     }
    //   }
    // } else {
    //   newtabledata = table_info_all;
    // }

    // this.setState({
    //   table_info: newtabledata,
    // });
  }

  render() {
    const columns = [
      {
        title: '上传人',
        dataIndex: 'user_name',
        key: 'user_name',
        width: '10%',
        align: 'center',
      },
      {
        title: '文件类型',
        dataIndex: 'file_type',
        key: 'file_type',
        width: '10%',
        align: 'center',
      },
      {
        title: '文件详情',
        dataIndex: 'file_name',
        key: 'file_name',
        width: '10%',
        align: 'center',
      },
      {
        title: '创建时间',
        dataIndex: 'upload_time',
        key: 'upload_time',
        align: 'center',
        width: '10%',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.upload_time - b.upload_time, 
        render: (record) => {
          const aa = moment(record * 1000).format('YYYY-MM-DD HH:mm:ss')
          return <span>{aa}</span>
        }
      },
      {
        title: '数据范围',
        align: 'center',
        width: '20%',
        sorter: (a, b) => a.start_time - b.start_time,
        render: (record) => {
          const aa = moment(record.start_time * 1000).format('YYYY-MM-DD HH:mm:ss')
          const bb = moment(record.end_time * 1000).format('YYYY-MM-DD HH:mm:ss')
          return (
            <div>
              <p>{aa + '至'}</p>
              <p>{bb}</p>
            </div>
          )
        }
      },
      {
        title: '备注',
        dataIndex: 'remarks',
        key: 'remarks',
        align: 'center',
        width: '20%',
        render: (record) => {
          let remarks = record.replace(/\n/g, '<br/>');

          return (
            <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: remarks }} />
          )
        }
      },
      {
        title: '可视化分析',
        align: 'center',
        width: '10%',
        render: (record) => {
          return (
            <Link
              to={{
                pathname: `/os/sarUploadInfo/linkin/sarAnalysis/${record.id}`,
                state: record,
              }}
            > 
              可视化
            </Link>
          )
        }
      },
    ]

    return (
      <div className="scripttools">

        <div className="scripttoolsTitle">
          <p>
            <span>检查项说明</span>
            <span>（脚本工具的检查项说明，编辑）</span>
          </p>
        </div>

        <div className="scripttoolsTab">
          <div style={{ width: 200, float: 'right', verticalAlign: 'middle' }}>    
            <Search
              placeholder="请输入查询条件"
              onChange={this.searchdata.bind(this)}
              style={{ width: 200, verticalAlign: 'middle' }}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            <Table
              bordered
              columns={columns}
              dataSource={this.state.table_info}
              pagination={{
                showTotal: (total, range) => `从 ${range[0]} 到 ${range[1]} / 共 ${total} 条`
              }}
            />
          </div>
        </div>

      </div>

    );
  }
}

export default Hello;