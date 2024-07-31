const buttons=document.querySelectorAll('.button')
const body=document.body;


buttons.forEach(function ( elements){
    elements.addEventListener('click',function(changes){
       if(changes.target.id === 'green'){
        body.style.backgroundColor='green'
       }
       if(changes.target.id === 'orange'){
        body.style.backgroundColor='orange'
       }
       if(changes.target.id === 'red'){
        body.style.backgroundColor='red'
       }
       if(changes.target.id === 'blue'){
        body.style.backgroundColor='blue'
       }
       if(changes.target.id === 'gray'){
        body.style.backgroundColor='gray'
       }
    })
})

const head=document.querySelectorAll('.heading')
head.forEach(function (h){
    if(body.style.backgroundColor='green'){
        h.style.color='white'
    }
   
})