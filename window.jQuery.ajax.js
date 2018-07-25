window.jQuery  = function(nodeOrselector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html =function(){}
    return nodes;
}
window.jQuery.ajax = function(url,method,body,successFn,failFn){
    let request = new XMLHttpRequest()
    request.open(method,url)  //设置request

    request.onreadystatechange = function(){
        if(request.readyState===4){
            console.log('所有的请求都已经响应完毕')
            console.log(request.status)
            console.log(request.statusText)
            if(request.status >= 200 && request.status < 300){
                // console.log('说明请求成功')
                // let string = request.responseText;
                // let object = window.JSON.parse(string)
                successFn.call(undefined,request.responseText)   //如果成功传送成功函数
            }else if(request.status >= 400){
                // console.log('说明请求失败')
                failFn.call(undefined,request)   //如果失败
            }
        }
    }
    
    request.send(body)   //传送第四部分
 
}
window.$ = window.jQuery

myButton.addEventListener('click',function(e){
    window.jQuery.ajax('/xxx',
    'post',
    'a=1&b=2',
    function(responseText){console.log(成功)},
    function(request){console.log(失败)})
})