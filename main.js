const darkmode = document.querySelector('.dark');
const app = document.querySelector('.app');

darkmode.onclick = function(){
    darkmode.classList.toggle('active');
    app.classList.toggle('dark');
}