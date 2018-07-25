window.jQuery  = function(nodeOrselector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html =function(){}
    return nodes;
}

window.jQuery.ajax = function({url,method,body,heads}){
    //给参数命名的套路，可以使其参数结构化
    // let url
    // if(arguments.length===1){
    //     url = options.url
    // } else if(arguments.length===2){
    //     url = options[0];
    //     options = arguments[1]
    // }
    //    let url = options.url
    // let method = options.method
    // let body  = options.body
    // let successFn = options.successFn
    // let failFn = options.failFn
    // let heads = options.heads
    //es6  解构赋值
    // let {url,method,body,successFn,failFn,heads} = options
  
 return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method,url)  //设置request
    for(let key in heads){
        let value  = heads[key];
        request.setRequestHeader(key ,value)
    }
    request.onreadystatechange = function(){
        if(request.readyState===4){
            console.log('所有的请求都已经响应完毕')
            console.log(request.status)
            console.log(request.statusText)
            if(request.status >= 200 && request.status < 300){
                // console.log('说明请求成功')
                // let string = request.responseText;
                // let object = window.JSON.parse(string)
                resolve.call(undefined,request.responseText)   //如果成功传送成功函数
            }else if(request.status >= 400){
                // console.log('说明请求失败')
                reject.call(undefined,request)   //如果失败
            }
        }
    }
    
    request.send(body)   //传送第四部分
 })
}
window.$ = window.jQuery

// function success(responseText){console.log(responseText)}
// function error(responseText){console.log(responseText)}
myButton.addEventListener('click',function(e){

//    $.ajax({
//             url:'/xxx'
//             method:'get'
           
//         }).then(function(responseText){console.log(responseText)},function(request){console.log('error')})
    
    window.jQuery.ajax({
        url:'/xxx'
        method:'get'
        heads:{
            'content-type':'application/x-www-form-urlencoded'
            'frank':'18'
        }.then(function(text){console.log(text)},
        function(request){console.log(request)})
        
    })
})