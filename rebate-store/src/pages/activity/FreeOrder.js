/*
 * @Description: react jsx原理
 * @Author: yangying01
 * @Date: 2020-03-16 14:40:56
 * @LastEditTime: 2020-03-23 23:31:19
 * @LastEditors: yangying01
 */

import React from 'react';
import './index.less';
import FreeOrderModal from './FreeOrderModal'
import ProductList from './ProductList'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
            initDate: {
              cur_vol: "2020-03-02",
              distance_to_award: "86400",
              last_winning_list: [
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                },
                {
                  username: "*三",
                  mobile: "152****9456",
                  award_info: "多功能背包券"
                }
              ]
            },
            goodsList:[
                {
                    "sku_id":"110",
                    "sku_banner":"https://static.rong360.com/cimg/6b/6b92c85a80434c055a82034ae5dd4a453df29694.jpeg",
                    "price":"21.50",
                    "old_price":"45.90",
                    "stock_num":"库存充足",
                    "spu_id":"29",
                    "spu_name":"卷纸印花50卷装特价款卫生纸巾无芯卷纸家用厕纸",
                    "spu_banner":[
                        "https://static.rong360.com/cimg/19/19a8887e0cba7b364aa6399d75b3017b79f3dc89.jpeg",
                        "https://static.rong360.com/cimg/ef/efe806b6333fab7576cbc89c548d22dd24431aa4.jpeg",
                        "https://static.rong360.com/cimg/7d/7d480002cfd054d03e9a523057ae710c7849b667.jpeg",
                        "https://static.rong360.com/cimg/ff/ffcf3e7d800c7b40355a1549fb8dd9eb5e7f7f54.jpeg",
                        "https://static.rong360.com/cimg/af/af5f95ba782db28425ad80212dd382410495a68e.jpeg",
                        "https://static.rong360.com/cimg/6f/6f47fc3d9e53381a5ac84644968d9ccf6f3f1aec.jpeg",
                        "https://static.rong360.com/cimg/d4/d4df5e069cae9b5b95431817216351e8655afab9.jpeg"
                    ],
                    "spu_main":[
                        "https://static.rong360.com/cimg/e2/e298e83faff2968ca15bb0240a2abc064fb75104.jpeg",
                        "https://static.rong360.com/cimg/a4/a4708e45f69d0174efe472ba42267e2b816a1b18.jpeg",
                        "https://static.rong360.com/cimg/f9/f9240558496605dba65c655de5920cad239817e7.jpeg",
                        "https://static.rong360.com/cimg/9e/9e11d26ea25a37e30ab99d2a68225544d331ebc5.jpeg",
                        "https://static.rong360.com/cimg/0c/0c7f13bed72b1cac02f148f134a21d51354506f2.jpeg",
                        "https://static.rong360.com/cimg/0f/0f0acc57e657ca8c78b49e71c5d763ed48ee19b0.jpeg",
                        "https://static.rong360.com/cimg/60/60969964b9bc2a67e29434dafae8c85fc0fc3272.jpeg"
                    ],
                    "activity_name":[
                        "满减可用",
                        "无门槛券",
                        "包邮",
                        "7天内发货"
                    ]
                },
                {
                  "sku_id":"107",
                  "sku_banner":"https://static.rong360.com/cimg/7e/7e8461cab29d6eb9b9a530e52f7877ad93ebe0bb.jpeg",
                  "price":"30.90",
                  "old_price":"49.90",
                  "stock_num":"库存充足",
                  "spu_id":"28",
                  "spu_name":"抽纸蓝色时尚款40包32.9元整箱特价原木面巾纸餐巾纸抽",
                  "spu_banner":[
                      "https://static.rong360.com/cimg/87/8767411584aec8602afd4a425d3d6e14daa6a0be.jpeg",
                      "https://static.rong360.com/cimg/b4/b4173fe54c2fab1a1a10129adcdb58a931580fab.jpeg",
                      "https://static.rong360.com/cimg/4c/4c34ceb69c25efc0709e7b5af07efab7b0c77c61.jpeg",
                      "https://static.rong360.com/cimg/5e/5e3be9a07a3ed6b9125831e8d83dee3b64d6136c.jpeg",
                      "https://static.rong360.com/cimg/a6/a67c60a84103010e0267c616420debe5a8f31a33.jpeg",
                      "https://static.rong360.com/cimg/89/89a3687a10787798d09eab38be5e7d9ddb0b6531.jpeg",
                      "https://static.rong360.com/cimg/5e/5e9a8042dea92aab8b5e1e0be5cd8803f51a26af.jpeg"
                  ],
                  "spu_main":[
                      "https://static.rong360.com/cimg/77/77f1bcb20611b3b5b329dd0e1eeb9295b9d2306b.jpeg",
                      "https://static.rong360.com/cimg/ff/ff4a5a411208ed36749d440e5cd84e1dfb587c4b.jpeg",
                      "https://static.rong360.com/cimg/7e/7e05b5ae1bc707663b876c5ae84569f70803d35f.jpeg",
                      "https://static.rong360.com/cimg/6c/6cfec629c643f8ba59b7ba6c3b5fcedc170f17eb.jpeg",
                      "https://static.rong360.com/cimg/df/dfb7423f509bc3ceadefc2dc2435a16ceb093845.jpeg",
                      "https://static.rong360.com/cimg/45/45c78be9e92e828ee041e349a2bc81637dac3457.jpeg",
                      "https://static.rong360.com/cimg/9a/9a09c7aa1338d5acf209a6f7aa641874ab5e18d8.jpeg",
                      "https://static.rong360.com/cimg/f3/f334bdbaacd6a4df06303217be591cdd13720a2e.jpeg",
                      "https://static.rong360.com/cimg/3c/3c2dabf14f8d69b1a1552f79169d52113893ada9.jpeg",
                      "https://static.rong360.com/cimg/eb/ebdb0fe1a6b35b37898e2bd385009d1a5023c4cc.jpeg",
                      "https://static.rong360.com/cimg/58/584124ff42f08a274d42d57d2984e21949c6b95c.jpeg",
                      "https://static.rong360.com/cimg/64/64d1897e2b7cd0ac749a2c8d0c9fa9589c1dbff8.jpeg",
                      "https://static.rong360.com/cimg/a2/a2996d35ab61fc1e59db53d541f5ee2e68c33257.jpeg"
                  ],
                  "activity_name":[
                      "满减可用",
                      "无门槛券",
                      "包邮",
                      "7天内发货"
                  ]
              },
              {
                  "sku_id":"105",
                  "sku_banner":"https://static.rong360.com/cimg/17/17bb73ee35d8143cbb6fabca478708f34684dda7.jpeg",
                  "price":"26.90",
                  "old_price":"49.90",
                  "stock_num":"库存充足",
                  "spu_id":"27",
                  "spu_name":"抽纸黄色小熊款38包/30包整箱特价原木面巾纸餐巾纸抽",
                  "spu_banner":[
                      "https://static.rong360.com/cimg/39/39e893d7a378be83cde6808218c8da4dec1c2bef.jpeg",
                      "https://static.rong360.com/cimg/ac/ac33bdcac880e30499696871adeaa848e3a50abd.jpeg",
                      "https://static.rong360.com/cimg/97/97579abe85e372e89d7a6a6d61b6cd8096d40332.jpeg",
                      "https://static.rong360.com/cimg/3a/3aad449c5fd60fa205a6e097fd798c73536244e7.jpeg",
                      "https://static.rong360.com/cimg/0a/0a281f6cabd4d731eeee9e4566a965f4c221ca7b.jpeg"
                  ],
                  "spu_main":[
                      "https://static.rong360.com/cimg/bf/bf4deebee08ca0f1d014b00b4650bc540a93bf81.jpeg",
                      "https://static.rong360.com/cimg/d9/d95be862ad6f3ab21715552cea71d72fee98d34d.jpeg",
                      "https://static.rong360.com/cimg/75/75f78dd43783dc81931a87816bc28a25537e79bd.jpeg",
                      "https://static.rong360.com/cimg/af/afd4ebdeb84d80a5b2d3a0564279c51360f4bbd2.jpeg",
                      "https://static.rong360.com/cimg/1c/1c9905560e4aa2e618cc9369e03d65dc9b212bd0.jpeg",
                      "https://static.rong360.com/cimg/8d/8dd68cca44c39808b8e49e9bd5966d1f745cd242.jpeg",
                      "https://static.rong360.com/cimg/67/67b57876ef2ddc2d0d6a15afc886df688d116b8c.jpeg",
                      "https://static.rong360.com/cimg/a1/a1308b4126c34342a5f0f6b9b87d761fb1f02f74.jpeg"
                  ],
                  "activity_name":[
                      "满减可用",
                      "无门槛券",
                      "包邮",
                      "7天内发货"
                  ]
              },
              {
                  "sku_id":"100",
                  "sku_banner":"https://static.rong360.com/cimg/e2/e2ab92c69a705a715c5277eb1070fad964a7dcae.jpeg",
                  "price":"18.15",
                  "old_price":"199.00",
                  "stock_num":"库存充足",
                  "spu_id":"26",
                  "spu_name":"臂力器+护手+收纳袋 扩胸肌器弹簧压力棒握力棒臂力棒60kg",
                  "spu_banner":[
                      "https://static.rong360.com/cimg/02/029cd4495579a5c30bc30182f70328000559205d.jpeg",
                      "https://static.rong360.com/cimg/8f/8ff7c7a56b2bc511884b478c0bb96dc34737d887.jpeg",
                      "https://static.rong360.com/cimg/fe/fea93893f67132fa645e26556c6d30f0f339c49b.jpeg",
                      "https://static.rong360.com/cimg/39/396a9a1b4bc0c313f1c668bd4e772aad30eb6343.jpeg",
                      "https://static.rong360.com/cimg/5d/5d16d79812f23ca2d11e51f5d7e4a340558129f6.jpeg",
                      "https://static.rong360.com/cimg/f9/f9e9acb02485392370ed0087a905e5c5237073cd.jpeg",
                      "https://static.rong360.com/cimg/87/875b925fd9c3f40fc230587b1bea80db989fdf3b.jpeg",
                      "https://static.rong360.com/cimg/b8/b8d9be316fe6f19743a26ce6f4d121c6724b26f2.jpeg",
                      "https://static.rong360.com/cimg/90/90cecbc03a1242728079158e4d196269dce67ac7.jpeg"
                  ],
                  "spu_main":[
                      "https://static.rong360.com/cimg/f6/f6d09cba20271e6705a91b57a8ea26d5ccc8f283.jpeg",
                      "https://static.rong360.com/cimg/db/dbf09b60d92a530de2cbe4e08d67416b71e30ee7.jpeg",
                      "https://static.rong360.com/cimg/57/5796fcefe8b21bc4c0eacfc8ca8372955f75c3eb.jpeg",
                      "https://static.rong360.com/cimg/28/28820b053bddaa62977665fa3d3d2c59ef401560.jpeg",
                      "https://static.rong360.com/cimg/a8/a88320f0e48a9ba996247e415c07b3d84cd095bc.jpeg",
                      "https://static.rong360.com/cimg/e8/e87973667f2a6df50423b2de0a44ade8fa42e8ff.jpeg",
                      "https://static.rong360.com/cimg/9b/9bee36171b9834c81689e3efb182ca2c51d416df.jpeg",
                      "https://static.rong360.com/cimg/0a/0ad188e2b46122e6de4d0def34e6c6f37ab3ee98.jpeg",
                      "https://static.rong360.com/cimg/67/6778aba7010b7bb4a1f56f556532cc5d7a19e26e.jpeg",
                      "https://static.rong360.com/cimg/36/36f2ea3d13b7de598e9807d790265eaf21cd87d1.jpeg",
                      "https://static.rong360.com/cimg/96/96b2f9239addeac8337acfc83da7fdc52959c1fc.jpeg",
                      "https://static.rong360.com/cimg/f3/f37e04fdae5325a51890ce2166693c76b2ce1aa4.jpeg",
                      "https://static.rong360.com/cimg/da/da70d986e29191e51fdb7d29f78d811f5a9125b2.jpeg",
                      "https://static.rong360.com/cimg/bd/bd5072f6b61a4cc53c1a707961b2f3a8e077ec1a.jpeg",
                      "https://static.rong360.com/cimg/5b/5b10799e8a561c7e700e39fcae883d1b1771e18f.jpeg"
                  ],
                  "activity_name":[
                      "满减可用",
                      "无门槛券",
                      "包邮",
                      "7天内发货"
                  ]
              },
              {
                  "sku_id":"98",
                  "sku_banner":"https://static.rong360.com/cimg/3d/3d7e203c79a62df57b38f84b5bc8c45912f669c0.jpeg",
                  "price":"16.70",
                  "old_price":"30.00",
                  "stock_num":"库存充足",
                  "spu_id":"25",
                  "spu_name":"【正品】强力挂钩贴60个装",
                  "spu_banner":[
                      "https://static.rong360.com/cimg/6a/6aeaa33deb2edceaa3b70e7861d4dcaecd004e21.jpeg",
                      "https://static.rong360.com/cimg/db/dbeba829e5bcd0071ef4561c4fc3f9384fd3c7f6.jpeg",
                      "https://static.rong360.com/cimg/b6/b66b2baf4f677eeeec45702ae1404ca04d3ef32b.jpeg",
                      "https://static.rong360.com/cimg/31/3114ca75be8991cb976e8556e4aeb8bf70145577.jpeg",
                      "https://static.rong360.com/cimg/26/26b6c0dfde02974858444ec030fd5a0025dc7bd2.jpeg",
                      "https://static.rong360.com/cimg/e7/e7d74da071c50e50b219a21dba9a9c18074dcc2d.jpeg",
                      "https://static.rong360.com/cimg/62/62659976e3c57114a9e9387e4a8fb74162d46074.jpeg"
                  ],
                  "spu_main":[
                      "https://static.rong360.com/cimg/1c/1c838904b528e0b88c8fdd93dadcb2dda5f3bea4.jpeg",
                      "https://static.rong360.com/cimg/5d/5dda129d75e9f8e70ef86ff8b5f3a1eb6215ec7f.jpeg",
                      "https://static.rong360.com/cimg/64/64d923af7a229274cbdae8ca574c3b9f298078fc.jpeg",
                      "https://static.rong360.com/cimg/cb/cba3dfb9d353c1dcb6a7631708f3eb2573e451bd.jpeg",
                      "https://static.rong360.com/cimg/df/df79b930532c268a8b4b42213c8b67b9ad92aeed.jpeg",
                      "https://static.rong360.com/cimg/27/27099795d702ac4f36de40f7870d4020b22b9ae1.jpeg",
                      "https://static.rong360.com/cimg/66/66e2be72e36d8f57162b1b98a1a31a519d4be986.jpeg",
                      "https://static.rong360.com/cimg/3f/3f52d70c5c1c9537e80e8d167bfcf8615c5b948c.jpeg",
                      "https://static.rong360.com/cimg/ae/ae4ea3c82162a0291b4d61bf67bcc04af7121141.jpeg",
                      "https://static.rong360.com/cimg/5b/5be980d292cbca3a9389b667076ab772e695d2a8.jpeg",
                      "https://static.rong360.com/cimg/6c/6c7f23c86cbd49c04b881fa2a7e623088087ba34.jpeg"
                  ],
                  "activity_name":[
                      "满减可用",
                      "无门槛券",
                      "包邮",
                      "7天内发货"
                  ]
              },
              {
                  "sku_id":"89",
                  "sku_banner":"https://static.rong360.com/cimg/6e/6ea0eed76379fd15f1591f0d34fcfcdf9bf4122b.jpeg",
                  "price":"8.00",
                  "old_price":"19.90",
                  "stock_num":"库存充足",
                  "spu_id":"24",
                  "spu_name":"【正品】高压自行车打气筒充气筒电动车汽车打气筒篮球足球充气筒",
                  "spu_banner":[
                      "https://static.rong360.com/cimg/d2/d27fced692de6e928f41c055b22a1d128eb01774.jpeg",
                      "https://static.rong360.com/cimg/c6/c6a234c52273b8d5e34904eb17fd6caf0cfc6733.jpeg",
                      "https://static.rong360.com/cimg/24/24999b1900152dcc81950e37b403e4474d5efedf.jpeg",
                      "https://static.rong360.com/cimg/be/be3db66151370294a9338e018cf73cbe19402710.jpeg",
                      "https://static.rong360.com/cimg/7b/7b163bc9f3bb0a2700dd0992623db532e6769b06.jpeg",
                      "https://static.rong360.com/cimg/de/defef39713a1dc2220c30b16f78a89b89b8c959d.jpeg",
                      "https://static.rong360.com/cimg/50/50654de50b8abfbf22f0d05d996c8b57d6bbf6ff.jpeg",
                      "https://static.rong360.com/cimg/10/10b728dddcedf2eb59fcc02bf0d77a132e1f5f1d.jpeg",
                      "https://static.rong360.com/cimg/65/65a162fb9200096e36e63ce89ed40c10896fb555.jpeg"
                  ],
                  "spu_main":[
                      "https://static.rong360.com/cimg/f2/f26dad64be25ce1f276d610e5c8d0d395baf8074.jpeg",
                      "https://static.rong360.com/cimg/84/8421996916d6dcf86b42555bc5e0e91e8cf21621.jpeg",
                      "https://static.rong360.com/cimg/32/328ac8a8a19ee330cddb80f9c81e63012c3394c4.jpeg",
                      "https://static.rong360.com/cimg/fc/fce8fa928ad43310d09b7c6314a7df515e11feeb.jpeg",
                      "https://static.rong360.com/cimg/f2/f23864d4e132ffd44147caae20341811dc316d9a.jpeg",
                      "https://static.rong360.com/cimg/f0/f064e477581165cc631e559d44bd4983dd965ab9.jpeg",
                      "https://static.rong360.com/cimg/28/28e4fd6ff60988f2d989389b79d496dab11abd8f.jpeg",
                      "https://static.rong360.com/cimg/43/431165677a9bf5b8e44205b62b751806ad2dfad8.jpeg",
                      "https://static.rong360.com/cimg/3b/3bad436ab41ef1137a9a05c81889951132a87a40.jpeg",
                      "https://static.rong360.com/cimg/1c/1c5c56e3253a4f08dfd6a324464236c6c18c7df9.jpeg",
                      "https://static.rong360.com/cimg/08/0843743c6b2861dccce26d8417b72ce04cfea041.jpeg",
                      "https://static.rong360.com/cimg/c6/c659397d55ebf3188ecf10a33f1aba7952b69595.jpeg",
                      "https://static.rong360.com/cimg/e6/e60bb436c80ae1064ff30356439c434e98603cec.jpeg",
                      "https://static.rong360.com/cimg/b9/b9bb755f481abbfd2ed483440bb42b4ff6431e28.jpeg",
                      "https://static.rong360.com/cimg/5c/5c27bdba1b2f8acc7c2ef67ac5a5c5badd6a68ca.jpeg",
                      "https://static.rong360.com/cimg/e0/e089c920497512fac6b3e1523f6dd2aea011983d.jpeg",
                      "https://static.rong360.com/cimg/02/025f6f75dedff4e653be1cc423cac91d6761d992.jpeg"
                  ],
                  "activity_name":[
                      "满减可用",
                      "无门槛券",
                      "包邮",
                      "7天内发货"
                  ]
              }
              
            ],
           
            timeObj:{
                time: 0,
                hour: 0,
                minute: 0,
                second: 0
            },
            // 弹窗
            modalObj: {
                show: false,
                type: 0,//0:活动规则弹窗，1：上期中奖名单弹窗
            }
    }
  }

  
  componentDidMount() {
    // 倒计时
    this.timeOut = null
    this.showCountDown()

  }
  
  componentWillUnmount() {
    clearInterval(this.timeOut);
  }


  //显示倒计时
  showCountDown(){
      let that = this
      let {initDate} = this.state
      let timeObj = {}
      
      if(initDate && initDate.distance_to_award){
          timeObj.time = parseInt(initDate.distance_to_award)
          timeObj.hour = parseInt(timeObj.time/60/60)
          timeObj.minute = parseInt( (timeObj.time - timeObj.hour*60*60)/60 )
          timeObj.second = parseInt(timeObj.time%60)
          that.setState({
            timeObj: timeObj
          }, () => {
            that.timeDec()
          })
          

      }
  }

  timeDec(){
      let that = this
      let timeObj = this.state.timeObj

      that.timeOut = setTimeout(() => {
          if(timeObj.time > 0){
              timeObj.time --
              timeObj.hour = parseInt(timeObj.time/60/60)
              timeObj.minute = parseInt( (timeObj.time - timeObj.hour*60*60)/60 )
              timeObj.second = parseInt(timeObj.time%60)
              that.setState({
                timeObj: timeObj
              }, () => {
                that.timeDec()
              })

          }else{
              clearTimeout(that.timeOut)
              that.render()
          }
                
      }, 1000)
  }

  showModal(type){
    let that = this

    if(type == 1 && that.state.initDate.last_winning_list.length == 0){
        return
    }

    that.setState({
      modalObj : {
        type: type,
        show: true
      }
    })

    console.log(type)
  }
  closeModal = () => {
    let that = this

    that.setState({
      modalObj : {
        show: false
      }
    })
  }

  render(){
    let {initDate, timeObj, modalObj, goodsList} = this.state
    
    return(
      <div className="page free-chanrge">
      <div className="main-content">
            <div className="time">{initDate.cur_vol}期</div>
            <div className="count-down">
                <span className="count-down-num num-1">{timeObj.hour >= 10 ? parseInt(timeObj.hour / 10) : 0}</span>
                <span className="count-down-num num-2">{parseInt(timeObj.hour % 10)}</span>
                <span className="count-down-num num-3">{timeObj.minute >= 10 ? parseInt(timeObj.minute / 10) : 0}</span>
                <span className="count-down-num num-4">{parseInt(timeObj.minute % 10)}</span>
                <span className="count-down-num num-5">{timeObj.second >= 10 ? parseInt(timeObj.second / 10) : 0}</span>
                <span className="count-down-num num-6">{parseInt(timeObj.second % 10)}</span>
            </div>
            <div className="main-text">{initDate.freeorder_chance? '您已获得本期抽奖资格，继续购买可以增加中奖几率哦':'下单支付任意产品，即可参与任意购抽免单活动'}</div>
            <div className="button-left" onClick={() => this.showModal(0)}></div>
            <div className="button-right" onClick={() => this.showModal(1)}></div>
        </div>
        <ProductList list={goodsList}></ProductList>


        <FreeOrderModal modalObj={modalObj} list={initDate.last_winning_list} closeModal={this.closeModal}></FreeOrderModal>
    </div>
    )
  }
}

export default App;