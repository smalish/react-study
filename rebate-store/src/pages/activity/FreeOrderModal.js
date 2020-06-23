/*
 * @Description: 免单活动弹窗
 * @Author: yangying01
 * @Date: 2020-03-21 16:46:11
 * @LastEditTime: 2020-03-22 13:59:10
 * @LastEditors: yangying01
 */

 import React, { Component } from 'react';
 import './FreeOrderModal.less'
 
 class FreeOrderModal extends Component {

 
     render() {
         return (
                <div className="out_div" style={{ display: this.props.modalObj.show ? "block" : "none" }}>
                    <div className="flex_div">
                        {
                            this.props.modalObj.type == 1?
                            
                            <div className="modal_div user_div">
                                <div className="close_btn" onClick={this.props.closeModal}></div>
                                <div className="modal_title">上期中奖名单</div>
                                <div className="modal_content">
                                    <div className="row r_title">
                                        <span>姓名</span>
                                        <span>手机号</span>
                                        <span>奖品信息</span>
                                    </div>
                                    {this.props.list.map((item, index) => {
                                        return (
                                            <div className="row" key={index}>
                                                <span className="overflow-text">{item.username}</span>
                                                <span className="overflow-text">{item.mobile}</span>
                                                <span className="overflow-text">{item.award_info}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            <div className="modal_div rule_div">
                                <div className="close_btn" onClick={this.props.closeModal}></div>
                                <div className="modal_title">活动规则</div>
                                <div className="modal_content">
                                    <p><span className="icon">1</span>每人每期第一笔支付，可获得一次参与抽奖机会，每天10:00会更新活动期数；</p>
                                    <p><span className="icon">2</span>任意支付金额大于0的已支付订单都可成功参与活动，包括使用优惠券的订单；</p>
                                    <p><span className="icon">3</span>优惠商品购买数量超出一件，则不享受优惠；</p>
                                    <p><span className="icon">4</span>活动中如发现违规行为（包括但不限于虚假交易、作弊领取、机器刷奖、恶意套现等行为），主办方将取消用户的资格并有权利收回因此享有的利益。</p>
                                </div>
                            </div>

                        }
                        
            
                       
            
                        
            
                    </div>
            </div>
         );
     }
 }
 
 export default FreeOrderModal;