let $buttons = $('#buttons>button');
let $sliders = $('#sliders');
let $images = $sliders.children('img');

makeFakeSliders();
bindEvents();
//console.log($lastCopy[0].outerHTML);打印出新克隆的元素
//console.log($firstCopy[0].outerHTML);打印出新克隆的元素
function  makeFakeSliders(){
    let $firstCopy = $images.eq(0).clone(true);
    let $lastCopy = $images.eq($images.length-1).clone(true);
    $sliders.append($firstCopy);
    $sliders.prepend($lastCopy);
}

function bindEvents(){
    $sliders.css({transform:'translateX(-512px)'})
    let current = 0
    $buttons.eq(0).on('click',function(){
        if(current===2){
            $sliders.css({
                transform:'translateX(-2048px)'
            }).one('transitionend',function(){
                $sliders.hide().offset()
                $sliders.css({
                    transform:'translateX(-512px)'
                }).show();
            })
        }else{
            $sliders.css({
                transform:'translateX(-512px)'
            })
        }

        current = 0;
    })
    $buttons.eq(1).on('click',function(){

        $sliders.css({
            transform:'translateX(-1024px)'
        })
        current = 1;
    })
    $buttons.eq(2).on('click',function(){
        if(current===0){
            $sliders.css({
                transform:'translateX(0px)'
            }).one('transitionend',function(){
                $sliders.hide().offset()
                $sliders.css({transform:'translateX(-1536px)'}).show()
            })
        }else{
            $sliders.css({
                transform:'translateX(-1536px)'
            })
        }

        current = 2;
    })
}

