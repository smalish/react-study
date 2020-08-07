import * as React from 'react'
import {getList} from '../service/api'
import {cookie} from '../utils/common'

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

        cookie.set('flag', '1')
        cookie.set('flag', '2')
        console.log(cookie.get('flag'))
        cookie.remove('flag')
        
    }
}

export default App