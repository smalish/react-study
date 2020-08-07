import React, { Component } from 'react';
import Banner from './banner'

class DefaultPropsDemo extends Component<any, any> {
  bannerData = {
    id: 0,
    obj1:{
      name: '小明',
      // age: 18
    },
    obj2:{
      name: '花花',
      // age: 3,
      otherInfo:{
        // eyeColor: 'blur',
        footColor: 'white'
      }
    }
  }

  render() {
    return (
      <div>
        test
        <Banner bannerData={this.bannerData} />
      </div>
    );
  }
}

export default DefaultPropsDemo;