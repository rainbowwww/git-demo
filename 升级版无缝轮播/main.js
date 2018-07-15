let $buttons = $('#buttons>button');
let $sliders = $('#sliders');
let $images = $sliders.children('img');
let current = 0
makeFakeSliders();
$sliders.css({transform:'translateX(-512px)'})
bindEvents();
$('#next').on('click',function(){
    goToSlide(current+1);
})
$('#previous').on('click',function(){
    goToSlide(current-1);
})

 let timer= setInterval(function(){
    goToSlide(current+1);
},2000)

$('.container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer=setInterval(function(){
        goToSlide(current+1)
    },2000)
})
function  makeFakeSliders(){
    let $firstCopy = $images.eq(0).clone(true);
    let $lastCopy = $images.eq($images.length-1).clone(true);
    $sliders.append($firstCopy);
    $sliders.prepend($lastCopy);
}

function bindEvents(){
    $('#buttons').on('click', 'button', function(e){
        let $button =$(e.currentTarget);
        let index = $button.index();
        goToSlide(index)
    })

}
function goToSlide(index){
    if(index>$buttons.length-1){
        index=0
    }else if(index<0){
        index = $buttons.length-1
    }
    //最后一张到第一张
    if(current===$buttons.length-1&& index===0){
        $sliders.css({transform:'translateX('+(-($buttons.length + 1) * 512)+'px)'
        }).one('transitionend',function(){
            $sliders.hide().offset()
            $sliders.css({
                transform:'translateX('+(-(index+1)*512)+'px)'
            }).show();
        })
    }else if(current===0&& index===$buttons.length-1){
        //从第一张到最后一张
        $sliders.css({transform:'translateX(0px)'
        }).one('transitionend',function(){
            $sliders.hide().offset()
            $sliders.css({
                transform:'translateX('+(-(index+1)*512)+'px)'
            }).show();
        })
    }else{
        $sliders.css({transform:'translateX('+(-(index+1)*512)+'px)'})
    }
    current =index;
}
