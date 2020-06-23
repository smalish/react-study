import HttpClient from './index'

export function getList(params:any){
  return HttpClient.post('/Userinfo/TaskStatus', params)
}