import * as React from 'react'
import Loadable from 'react-loadable'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

// import Index from '../pages/index'
// import About from '../pages/about'
// import User from '../pages/user'

const RouterList: any[] = [
  {
    path: '/',
    component: () => import('../pages/index')
  },
  {
    path: '/index',
    component: () => import('../pages/index')
  },
  {
    path: '/about',
    component: () => import('../pages/about')
  },{
    path: '/activity',
    component: () => import('../pages/activity/FreeOrder')
  }

]

const RouterMap = () => (
  <Router>
    <Switch>
      {RouterList.map(item => (
        <Route 
          key={item.path}
          exact={true}
          path={item.path} 
          component = {Loadable({
            loader: item.component,
            loading() {
                return <div>正在加载</div>
            },
          })}
        />
      ))}
    </Switch>
  </Router>
)

// const RouterMap2 = () => (
//   <Router>
//     <Switch>

//         <Route exact={true} path='./' component = {Index} />
//         <Route exact={true} path='./about' component = {About} />
//         <Route exact={true} path='./user' component = {User} />

//     </Switch>
//   </Router>
// )

export default RouterMap
