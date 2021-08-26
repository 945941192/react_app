import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'
import './App.less';
// import createHistory from 'history/createBrowserHistory';
import Header from './container/Header'
import OS from './routes/OS'
// import YUM from './routes/YUM'
// import { ssoLogin } from './service/bucsso'
// import QUALITY from './routes/QUALITY'

// import TestObj from './test';

// export const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastName: '',
    }
  }

  // 渲染组件数据
  componentDidMount() {
    // logout()
    // ssoLogin()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={OS} />
            <Route path="/os" component={OS} />
            {/* <Route path="/yum" component={YUM} /> */}
            {/* <Route path="/quality" component={QUALITY} /> */}
            {/* <Redirect to="/machineType" /> */}
            <Redirect to="/os" />
            {/* <Redirect to="/yum" /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import Header from './container/Header'
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>

//         <Header />
        
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;