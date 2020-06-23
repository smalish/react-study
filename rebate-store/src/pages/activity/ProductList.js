/*
 * @Description: 商品列表
 * @Author: yangying01
 * @Date: 2020-03-22 13:15:26
 * @LastEditTime: 2020-03-25 22:52:39
 * @LastEditors: yangying01
 */

 import React, { Component } from 'react';
 import './ProductList.less'
 
 class ProductList extends Component {
 
     render() {
         return (
            <div className="list-view">
                <div className="list-title"></div>
                <div className="goods-list">
                    {
                        this.props.list.map((item) => {
                            return (
                                <div className="goods-item" key={item.sku_id}>
                                    <div className="item-img"><img src={item.sku_banner} alt=""/></div>
                                    <div className="bottom-desc">
                                        <p className="goods-title text-overflow-2">{item.spu_name}</p>
                                        <div className="price">
                                            <span className="now-price">{item.price.split('.')[0]}<span>{item.price.split('.')[1] > 0? '.' + item.price.split('.')[1] : ''}</span></span>
                                            <span className="old-price">市场均价¥{item.old_price.split('.')[0]}<span>{item.old_price.split('.')[1] > 0? '.' + item.old_price.split('.')[1] : ''}</span></span>
                                        </div>
                                        <div className="bay-btn">立即购买</div>
                                    </div>
                                </div> 
                            )
                            
                        })
                    }
                    
                </div>
            </div>
         );
     }
 }
 
 export default ProductList;
