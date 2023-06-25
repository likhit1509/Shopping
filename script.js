const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


// Shoping Cart
let carts = document.querySelectorAll('.add-cart');
carts[0]
let products =[
    {
        name : 'Gray Tshirt'
    }
]

for(let i =0; i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartsNumbers();
    })
}

function cartsNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers =parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumber',productNumbers + i);
    }else{
        localStorage.setItem('cartNumber',1);
        document.querySelector('.pro span').textContent = 1;
        document.querySelector('.pro span').textContent = productNumbers +1;
    }
    localStorage.setItem('cartNumbers',1);
}
