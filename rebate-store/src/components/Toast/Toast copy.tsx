import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import './toast.less'

export interface ToastOptions{
  message: string
  duration?: number
  complete?: Function | undefined
}

// 使用接口代替 PropTypes 进行类型校验
class Toast extends React.Component<ToastOptions>{
  // constructor(props: any){
  //   super(props)
  //   this.message = ''
  // }
  public render() {
      const { message, duration, complete } = this.props;
      return (
        <div className="toast-wrapper">
          <div className="toast-content">{message}</div>
        </div>
      )
  }
}

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()
  // ReactDOM.render(<Toast ref={ref} />, div)
  return {
    // addNotice(notice) {
    //   // return ref.current.addNotice(notice)
    // },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

export default createNotification()