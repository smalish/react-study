import React, { Component} from 'react';
import { disconnect } from 'process';

class Banner extends Component <any, any>{
  static defaultProps = {
    bannerData: {
      // id: 0,
      obj1:{
        // name: '小明',
        age: 20,
        identity: 'student'
      },
      obj2:{
        // name: '花花',
        otherInfo:{
          eyeColor: 'gray'
        }
      }
    }
  }
  render() {
    console.log(this.props.bannerData)
    return (
        <div></div>
    );
  }
}

export default Banner;