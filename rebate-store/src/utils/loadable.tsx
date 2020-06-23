/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-22 15:59:22
 * @LastEditTime: 2020-06-22 16:00:16
 * @LastEditors: yangying01
 */ 

import React from 'react';
import Loadable from 'react-loadable';

export default (loader:any) => {
    return Loadable({
        loader,
        loading() {
            return <div>正在加载</div>
        },
    });
}