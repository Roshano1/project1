let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let RH-Redecor = document.querySelector('.RH-Redecor');
window.onscroll = function(){
    let value = scrolly;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 +'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    RH-Redecor.style.fontsize = value + 'px';
    if(scrolly >= 67){
        RH-Redecor.style.fontsize = 67 +'px';
        RH-Redecor.style.position ='fixed';
        if(scrolly>=478){
            RH-Redecor.style.display ='none';
        }else{
            RH-Redecor.style.display ='block';
        }
        if(scrolly>=127){
            
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)' 
        }
    }
}