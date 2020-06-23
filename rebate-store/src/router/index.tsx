import * as React from 'react'
import Loadable from 'react-loadable'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

const RouterList: any[] = [
  {
    component: () => import('../pages/index'),
    path: '/'
  },
  {
    component: () => import('../pages/index'),
    path: '/index'
  },
  {
    component: () => import('../pages/about'),
    path: '/about'
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

console.log(RouterMap)

export default RouterMap
