
    var APP_ID = 'WjasFpVMKkqzCKnXkbzzYi1w-gzGzoHsz';
    var APP_KEY = 'yoWurSdTEyxtddkOeIqbv18c';
    AV.init({appId: APP_ID,appKey: APP_KEY});
    

    var query = new AV.Query('Message');
    query.find()
    .then(function(message){
        let array = message.map(function(item){ return item.attributes})
        array.forEach(function(item){
            let li = document.createElement('li');
            li.innerText = item.name+': '+item.content
            let messageList = document.querySelector("#messageList")
            messageList.append(li)
        })
    },function(error){console.log('存入失败，请改天来试')})
    

let myForm = document.querySelector("#postMessageForm")
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message() 
    message.save({
        'name':name,
        "content": content
      }).then(function(object) {
        let li = document.createElement('li');
        li.innerText = object.attributes.name+': '+object.attributes.content
        console.log(object)
        let messageList = document.querySelector("#messageList")
        messageList.append(li)
        myForm.querySelector('input[name=name]').value ='' ;
        myForm.querySelector('input[name=content]').value ='' ;
      })
})



