!function(){
    var duration = 50;
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed  = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        setTimeout(function creatCode(){
            n+=1
            container.innerHTML = code.slice(0,n);
            styleTag.innerHTML = code.slice(0,n);
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(creatCode,duration)
               
            }else{
                fn&&fn();
            }
        },duration)
    }
    let code  = `
    /*
     *首先我们来个背景颜色
     */
    .preview{
        height: 100%;
        border:1px solid green ;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper{
        height: 165px;
        width:100%;
        position: relative;
    }
    /*
    *接下来，画皮卡丘的鼻子
    */
    .nose{
        width: 0px;
        height: 0px;
        border-radius: 50%;
        border: 11px solid ;
        border-color: black transparent transparent;
     
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -11px;
    
    }
    /*
    *再来画皮卡丘的眼睛
    */
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border:2px solid #000000;
    }
    .eye::before{
        content: '';
        display:block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius:50%;
        left: 6px;
        top:-2px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    /*
    *来点腮红
    */
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border:2px solid black;
        border-radius:50%;
        position: absolute;
        top:85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        margin-left: 116px;
    }
    /*
    *好啦！最后来画皮卡丘的嘴和舌头
    */
    .upperLip{
        height:25px;
        width: 80px;
        border:3px solid black ;
        position: absolute;
        top:44px;
        background: #fee433;
    }
    .upperLip.left{
        right:50%;
        border-bottom-left-radius:40px 25px ;
        border-top:none;
        border-right: none;
        transform: rotate(-20deg);
       
    }
    .upperLip.right{
        left:50%;
        border-bottom-right-radius:40px 25px ;
        border-top:none;
        border-left: none;
        transform: rotate(20deg);
       
    }
    .lowLip-wrapper{
        bottom: 0;
        position:absolute;
        left: 50%;
        margin-left: -150px;
       
        height: 110px;
        overflow: hidden;
        width: 300px;
    }
    .lowLip{
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius:200px/2000px;
        border:2px solid black;
        position: absolute;
        bottom:0;
        overflow: hidden;
    }
    .lowLip:after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
    }  
    /*
    *画完啦！
    */  
    `
    writeCode('', code)

  
}.call()