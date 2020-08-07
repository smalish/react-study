
export function isWeixin(): boolean{
  return /MicroMessenger/i.test(window.navigator.userAgent) 
}

export function isIos(): boolean{
  return /(iphone|ipad|ipod|ios)/i.test(window.navigator.userAgent)
}

export function isAndroid(): boolean{
  return /android/i.test(window.navigator.userAgent)
}

interface CookieOptions{
  expires?: number | Date
  domain?: string
  path?: string
  secure?: boolean
}

export const cookie = {
  set(name: string, value: string, options?: CookieOptions): void{
    
    let str: string = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if(options){
      if(options.expires && typeof options.expires == "number"){
        var date = new Date();
        date.setDate(date.getDate() + options.expires);
        str+=";expires="+date.toUTCString();
      }else if(options.expires && options.expires instanceof Date){
        str+=";expires="+options.expires.toUTCString();
      }
      if(options.path){
        str+=";path="+options.path;
      }
      if(options.domain){
        str+=";domain="+options.domain;
      }
      if(options.secure){
        str+=";secure";
      }
    }
    
    document.cookie = str

    console.log(document.cookie)
   
  },

  get(name: string): string|null{
    let str = document.cookie
    let arr = str.split(';')
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(name) !== -1){
        let temp = arr[i].split('=')
        if(temp[0] === name){
          return encodeURIComponent(temp[1])
        }
      }
    }
    return null
  },

  remove(name: string): void{

    this.set(name, '')
  }
}