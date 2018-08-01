!function(){
    var view = document.querySelector('nav.menu')
  
let aTags = view.querySelectorAll('nav.menu>ul>li>a');
        
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);




for(let i =0; i<aTags.length;i++){
    aTags[i].onclick=function(x){
        x.preventDefault(); //阻值默认动作
    //     let a = x.currentTarget ;
    //    let href =  a.getAttribute('href');  //得到什么，就是什么不做任何处理。浏览器不会处理
    //    let element = document.querySelector(href);//以获取的href值，来找到对应的元素
    //    let top = element.offsetTop;//获取元素到窗口顶部的高度
    //上面四句合成下面一句
    let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop;
    // window.scrollTo(0,top-80);
    // console.log(a.href); //这个打印出来带有http协议，浏览器处理后的
    // console.log(x.currentTarget);
    
    let currentTop = window.scrollY;
    let targetTop= top-80;
    var s = targetTop -currentTop;
    var t =Math.abs((s/100)*300);
    if(t>500){t=500;}
    var coords = { y:currentTop}; 
    var tween = new TWEEN.Tween(coords) 
    .to({ y: targetTop }, t) 
    .easing(TWEEN.Easing.Quadratic.InOut) 
    .onUpdate(function() {
        window.scrollTo(0,coords.y);
    })
    .start(); 
    }
}
}.call()
