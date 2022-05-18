const button = document.querySelector('.navtog');
const nav = document.querySelector('nav ul');
button.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

const beverage = document.querySelector('#hov1');
const bdrop = document.querySelector("#hov1 ul");
const dessert = document.querySelector('#hov2');
const ddrop = document.querySelector("#hov2 ul"); 

beverage.addEventListener('click', function(){
    if(ddrop.classList.contains('show')===true){
        ddrop.classList.toggle('show');
    }
    bdrop.classList.toggle('show');
})


dessert.addEventListener('click', function(){
    if(bdrop.classList.contains('show')===true){
        bdrop.classList.toggle('show');
    }
    ddrop.classList.toggle('show');
})
