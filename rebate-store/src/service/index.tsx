import axios,{Method} from 'axios'

function apiAxios (method: Method, url: string, params: any ){

  return new Promise((resolve,reject) => {

    axios({
			method,
			url,
			data: method === 'POST' || method === 'PUT' ? params : null,
			params: method === 'GET' || method === 'DELETE' || method === 'PATCH' ? params : null,
			withCredentials: false
		}).then((response) => {
      if (response.status === 200) {
        let status = response.data.status

        switch(status){
          case 9996: // 需要授权，当前路径存入cookie
            if (process.env.NODE_ENV == 'production') {
              // console.log('BASE_API = ' + process.env.BASE_API)
              // Vue.prototype.GLOBAL.cookie('callback_url',  location.href.split('#')[1], Vue.prototype.GLOBAL.mainUrl)
              // location.reload()
            
              let mainUrl = window.location.protocol + '//' + window.location.host
              var pagepath = window.location.href.replace(mainUrl, response.data.data.domain)
              var callback_url = response.data.data.domain + '/wx/NwH5AuthCallback?platform_id=' + response.data.data.platform_id + '&callback=' + encodeURIComponent(pagepath)
      
              var weixin_url = response.data.data.authUrl.split('redirect_uri=')[0] + 'redirect_uri=' + encodeURIComponent(callback_url) + response.data.data.authUrl.split('redirect_uri=')[1]
              location.href = weixin_url
            }
    
            break 
          
          case 9998: //未登录

            break

          default:
           

        }


        resolve(response)
      } else {
        reject('Axios返回状态不对，查看请求处理过程．．．．')
      }
    }, err => {
      reject(err)
      if(err.response.status){

        const errCode = err.response.status
        const msg = err.response.message
    
        switch (errCode) {
          case 400:
            console.log('错误请求')
            break
          case 401:
            // 权限处理 重新登录 清空token
            // message.error('请检查用户名和密码')
            console.log('请检查用户名和密码')
            break
          case 403:
            // message.error('身份过期请重新登录', 3)
            console.log('身份过期请重新登录')
            break
          case 404:
            // message.error('请求错误,未找到该资源')
            console.log('请求错误,未找到该资源')
            break
          case 405:
            console.log('请求方法未允许')
            break
          case 408:
            console.log('请求超时')
            break
          case 500:
            // message.error('服务器端出错')
            console.log('服务器端出错')
            break
          case 501:
            console.log('网络未实现')
            break
          case 502:
            console.log('网络错误')
            break
          case 503:
            console.log('服务不可用')
            break
          case 504:
            console.log('网络超时')
            break
          default:
            console.log('未知错误')
            // message.error('未知错误')
        }
      }
    }).catch((error) => {
      console.log(error)
    })
			
	})


}


export default {
  get:(url: string, params:any) => {
    return apiAxios('GET', url, params)
  },
  post: (url: string, params:any) => {
		return apiAxios('POST', url, params)
	},
	put: (url: string, params:any) => {
		return apiAxios('PUT', url, params)
	},
	delete: (url: string, params:any) => {
		return apiAxios('DELETE', url, params)
	},
	patch: (url: string, params:any) => {
		return apiAxios('PATCH', url, params)
	}
}