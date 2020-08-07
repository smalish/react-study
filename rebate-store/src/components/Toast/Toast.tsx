//toast.jsx
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import success from '../../../assets/images/toast_success.png'
import error from '../../../assets/images/toast_warning.png'
import loading from '../../../assets/images/loading.gif'
import './toast.scss'

let timer:any = null
let _scrollTop = 0
export default class Toast extends React.Component{    
    constructor(props:any){
        super(props)
    }
    static success(mes='success', duration = 2500){
        init()
        setTime(duration)
        ReactDOM.render(
            <Fragment>
                <div className="toast">
                    <div className="toast-box"> 
                       <img className="toast-icon" src={success} alt=""/>
                        <span>{mes}</span>
                    </div>
                </div>
            </Fragment>,
            document.getElementById('toast')
        )
    }
    static error(mes='fail', duration = 2500){
        init()
        setTime(duration)
        ReactDOM.render(
            <Fragment>
                <div className="toast">
                    <div className="toast-box">
                        <img className="toast-icon" src={error} alt=""/>
                        <span>{mes}</span>
                    </div>
                </div>
            </Fragment>,
            document.getElementById('toast')
        )
    }
    static loading(status:any, mes=''){
        init()
        setLoading(status)
        ReactDOM.render(
            <Fragment>
                <div className="toast">
                    <div className="toast-box">
                        <img className="toast-icon" src={loading} alt=""/>
                        <span>{mes}</span>
                    </div>
                </div>
            </Fragment>,
            document.getElementById('toast')
        )
    }
}

//弹层出现时设置body类名，防止页面滚动
function popupOpen(){
    _scrollTop = document.scrollingElement.scrollTop
    document.body.classList.add('body-popup')
    document.body.style.top = - _scrollTop + 'px'
}
//弹层隐藏时恢复滚动
function popupClose(){
    document.body.classList.remove('body-popup')
    document.scrollingElement.scrollTop = _scrollTop
}
//设置loading
function setLoading(status:any){
    let toast = document.getElementById('toast')
    if(status){
        toast.style.display = 'block'
        popupOpen()
    }else{
        toast.style.display = 'none'
        popupClose()
    }
}
//初始化toast
function init(){
    clearTimeout(timer)
    let toast = document.getElementById('toast')
    if(toast){
        toast.style.display = 'block'
    }else{ 
       let div = document.createElement('div')
        div.setAttribute('id', 'toast')
        document.body.appendChild(div)
    }
    popupOpen()
}
//设置定时器
function setTime(duration:number){
    timer = setTimeout(()=>{
        let toast = document.getElementById('toast')
        if(toast){
            toast.style.display = 'none'
            popupClose()
        }
    }, duration)
}