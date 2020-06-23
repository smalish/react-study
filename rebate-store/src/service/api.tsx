import HttpClient from './index'

export function getList(params:any){
  return HttpClient.get('/hhrstore/getlist', {params})
}