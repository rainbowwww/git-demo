/**
 * Created by xu on 2018/5/30.
 */

//    1.初始化数据
var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

//    2.生成键盘
generateKeyBody(keys,hash) ;
//    3.监听用户动作
listenToKeyboard(hash)



//下面为工具函数
function init(){
    var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10} ,
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length':3
    }
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
    };
    var hashInLocalStorage =getFromLocalStorage('zzz');
    if(hashInLocalStorage){
        hash=hashInLocalStorage;
    }
    return {
        'keys': keys,
        'hash': hash
    }
}

function generateKeyBody(keys,hash){
    for(var index=0;index<keys['length'];index=index+1){
        var div = tag('div',{'className':'row'});
        y.appendChild(div);

        var row = keys[index];
        for(var index2=0; index2<row['length'];index2=index2+1){

            var span=creatSpan(row[index2]) ;
            var imgx= creatImg(hash[row[index2]]) ;
            var button = creatButton(row[index2]);
            var kbody = tag('kbd',{className:'key'});
            div.appendChild(kbody);
            kbody.appendChild(button);
            kbody.appendChild(imgx);
            kbody.appendChild(span);

        }

    }
}
function listenToKeyboard(hash){
    document.onkeypress = function (ss) {
        var key= ss['key'];
        var website = hash[key];
        console.log(website);
//     location.href = 'http://'+website;
        window.open('http://'+website,'_blank')
    }
}

function getFromLocalStorage (name){
    return JSON.parse(localStorage.getItem(name) ||null);
}
function tag(tagName,attribute){
    var element=document.createElement(tagName);
    for(var key in attribute){
        element[key] = attribute[key] ;
    }
    return element;
}
function creatSpan(textContent){
    var span=tag('span',{className:'text'});
    span.textContent = textContent;
    return span
}
function creatButton(id){
    var button= tag('button');
    button.id = id;
    button.textContent ='编辑';
    button.onclick = function(ll){
        var button2 = ll['target'];
        var img2 = button2.nextSibling;
        console.log(img2);
        var key=button2['id'];
        var x=prompt('请输入网址');
        hash[key] = x;
        img2.src= 'http://'+hash[row[index2]]+'/favicon.ico';
        localStorage.setItem('zzz',JSON.stringify(hash));
    };
    return button
}
function creatImg(domain){
    var imgx= tag('img');
    if(domain){
        imgx.src= 'http://'+domain+'/favicon.ico';
    }else{
        imgx.src ='http://'+'i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    imgx.onerror =function(x){
        x.target.src ='http://'+'i.loli.net/2017/11/10/5a05afbc5e183.png'
    };
    return imgx;
}