// const darkmode = document.querySelector('.dark');
// const app = document.querySelector('.app');

// darkmode.onclick = function(){
//     darkmode.classList.toggle('active');
//     app.classList.toggle('dark');
// }

const darkmode = document.getElementById('dark');
const app = document.querySelector('.app');
const p = document.querySelector('p');
const back = document.querySelector('.back');
const fb = document.querySelector('.card-fb');
const ins = document.querySelector('.card-ins');
const ytb = document.querySelector('.card-ytb');
const bh = document.querySelector('.card-bh');
const nt = document.querySelector('.nt');
const td = document.querySelector('.td');
darkmode.onclick = function(){
    app.classList.toggle('dark-theme');
    p.classList.toggle('dark-theme');
    back.classList.toggle('dark-theme');
    fb.classList.toggle('dark-theme');
    ins.classList.toggle('dark-theme');
    ytb.classList.toggle('dark-theme');
    bh.classList.toggle('dark-theme');
    nt.classList.toggle('dark-theme');
    td.classList.toggle('dark-theme');
    // if(document.app.classList.toggle('dark-theme')){
    //     <i class="fas fa-sun"></i>;
    // } else{
    //     <i class="fa fa-moon-o" aria-hidden="true"></i>;
    // }
}
