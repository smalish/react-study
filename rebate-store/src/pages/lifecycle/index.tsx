import React, { Component, Fragment } from 'react';
import {getList} from '../../service/api'

class lifecycle extends Component<any, any>{
  constructor(props){
    super(props)
    this.state = {
      title: '生命周期',
      flag: 0//this.getData()
    }

    // this.setState({
    //   flag: 5
    // })
    this.getData = this.getData.bind(this)
  }
  componentWillMount(){

    console.log('componentWillMount --- ')

  }
  componentDidMount(){
    console.log('componentDidMount --- ')
    this.setState({
      flag: 5
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate --- ')
    
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate --- ')
    if(this.state.flag == 5){
      this.setState({
        flag: 6
      })
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount --- ')
  }
  getData(){
    
    getList({form_no: 123}).then((res) => {
      console.log('getList-------')
      this.setState({
        flag: 1
      })
    })

    
  }
  render() {
    console.log('render --- ' + this.state.flag)
  return <div>{this.state.flag}</div>;
  }
}

export default lifecycle;