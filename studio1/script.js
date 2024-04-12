(function(){
    'use strict'

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const intervalID = setInterval(checkTime, 1000);
    const change = document.querySelector('#goUp');
    const back = document.querySelector('#goDown');
    const video = document.querySelector('#theVideo');

    function checkTime(){
        if (1<video.currentTime && video.currentTime<6){
            line1.className = 'showing';
        } else{
            line1.className = 'hidden';
        }

        if (4<video.currentTime && video.currentTime<9){
            line2.className = 'showing';
        } else{
            line2.className = 'hidden';
        }
    }

    change.addEventListener('click', function(){
        video.src = 'media/rainbow.wepb';
        video.src = 'media/rainbow.mp4';
        video.style.top = '-50%';
        line1.className = 'hidden';
        line1.innerHTML = "I build a life & tear it apart";
        line2.innerHTML = "& the sun keeps shining"
        change.className= 'hidden';
        back.className = 'showing';
    })

    back.addEventListener('click', function(){
        video.src = 'media/fish.webp';
        video.src = 'media/fish.mp4';
        video.style.top = '0%';
        line1.innerHTML = "I love you.";
        line2.innerHTML = "I'm glad I exist.";
        change.className = 'showing';
        back.className = 'hidden';
    })
    


})()