!function(){
    let specialTags = document.querySelectorAll('[data-x]');
for(let i =0;i<specialTags.length;i++){
  specialTags[i].classList.add('offset');
  }
  setTimeout(function(){ findClosestAndRemoveOffset()},100)
  window.addEventListener('scroll',function(){
    findClosestAndRemoveOffset();
})

// helper
function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i =1;i<specialTags.length;i++){
       if(Math.abs(specialTags[i].offsetTop - window.scrollY)<Math.abs(specialTags[minIndex].offsetTop - window.scrollY) ){
           minIndex = i;
       }
    }
   specialTags[minIndex].classList.remove('offset');
   let id = specialTags[minIndex].id ;
   let a = document.querySelector('a[href="#'+id +'"]');
   var li = a.parentNode ;
   var brotherAndMe = li.parentNode.children;
   for(var i =0;i<brotherAndMe.length;i++){
    brotherAndMe[i].classList.remove('heightLight');
   }
   li.classList.add('heightLight');
}
}.call()
