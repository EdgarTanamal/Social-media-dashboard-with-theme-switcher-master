const button=document.querySelector('.button-switch');
const body=document.querySelector('body');
let darkSwitch=false;


button.addEventListener('click',()=>{
    body.classList.toggle('dark-theme');
});


