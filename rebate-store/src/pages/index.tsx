import * as React from 'react'
import {getList} from '../service/api'
import { createStore } from 'redux' // 引入

class App extends React.Component{
    public render(){
        return (<div>
                index111
                {/* <CountCon /> */}
            </div>)
    }
    componentDidMount(){
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        // .then((res) => {
        //     res = res.data
        //     console.log(res)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })



        getList({form_no: 123}).then((res) => {
          console.log('getList-------')
        })

        

        // redux
        const reducer = (state = {count: 0}, action:any) => {
            switch (action.type){
              case 'INCREASE': return {count: state.count + 1};
              case 'DECREASE': return {count: state.count - 1};
              default: return state;
            }
        }
          
        const actions = {
          increase: () => ({type: 'INCREASE'}),
          decrease: () => ({type: 'DECREASE'})
        }

        const store = createStore(reducer);

        store.subscribe(() =>
          console.log(store.getState())
        );

        store.dispatch(actions.increase()) // {count: 1}
        store.dispatch(actions.increase()) // {count: 2}
        store.dispatch(actions.increase()) // {count: 3}

        
    }
}

export default App